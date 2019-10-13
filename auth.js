const fetch = require('node-fetch');

// Timeout other API calls after this number of seconds
const API_TIMEOUT_SECONDS = 40;

// We want to look like a browser
const USER_AGENT_STRING =
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36';

const JWT_ISSUE_URL = 'https://nestauthproxyservice-pa.googleapis.com/v1/issue_jwt';

/**
 * Use the provided configuration to authenticate with Google and retrieve a JWT for
 * accessing the Nest api. The function will return an object containing the JWT,
 * the expiry date, and a function to get a new token without providing the credentials
 * again. Note that there is currently no error handling in this function.
 *
 * @param issueToken
 * @param cookies
 * @param apiKey
 * @returns {Promise<{refresh: (function(): Promise<{refresh, expiry, token}>), expiry: Date, token: string}>}
 */
const googleAuth = async (issueToken, cookies, apiKey) => {
    // Request an access token
    const tokenResult = await fetch(issueToken, {
        method: 'GET',
        redirect: 'follow',
        timeout: API_TIMEOUT_SECONDS * 1000,
        headers: {
            'Sec-Fetch-Mode': 'cors',
            'User-Agent': USER_AGENT_STRING,
            'X-Requested-With': 'XmlHttpRequest',
            Referer: 'https://accounts.google.com/o/oauth2/iframe',
            cookie: cookies,
        },
    });
    const tokenJSON = await tokenResult.json();
    const googleAccessToken = tokenJSON.access_token;

    // Ask for a JWT
    const jwtResult = await fetch(JWT_ISSUE_URL, {
        method: 'POST',
        redirect: 'follow',
        timeout: API_TIMEOUT_SECONDS * 1000,
        body: JSON.stringify({
            embed_google_oauth_access_token: true,
            expire_after: '3600s',
            google_oauth_access_token: googleAccessToken,
            policy_id: 'authproxy-oauth-policy',
        }),
        headers: {
            Authorization: 'Bearer ' + googleAccessToken,
            'User-Agent': USER_AGENT_STRING,
            'x-goog-api-key': apiKey,
            Referer: 'https://home.nest.com',
        }
    });
    const jwtJSON = await jwtResult.json();
    const googleJWT = jwtJSON.jwt;

    // Parse the data part of the JWT to retrieve the expiry timestamp
    const splitToken = googleJWT.split('.');
    const jwtData = JSON.parse(Buffer.from(splitToken[3], 'base64').toString());
    const expiry = new Date(jwtData.exp * 1000);

    return {
        refresh: () => googleAuth(issueToken, cookies, apiKey),
        token: googleJWT,
        expiry,
    };
};

module.exports = googleAuth;