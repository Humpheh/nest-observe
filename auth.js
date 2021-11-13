const fetch = require('node-fetch');
const querystring = require('querystring');

// Timeout other API calls after this number of seconds
const API_TIMEOUT_SECONDS = 40;

// We want to look like a browser
const USER_AGENT_STRING =
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36';

// Client ID of the Nest iOS application
const CLIENT_ID =
    '733249279899-1gpkq9duqmdp55a7e5lft1pr2smumdla.apps.googleusercontent.com';

const JWT_ISSUE_URL =
    'https://nestauthproxyservice-pa.googleapis.com/v1/issue_jwt';

const TOKEN_URL = 'https://oauth2.googleapis.com/token';

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
const googleAuth = async refreshToken => {
    // Request an access token
    const tokenResult = await fetch(TOKEN_URL, {
        method: 'POST',
        redirect: 'follow',
        timeout: API_TIMEOUT_SECONDS * 1000,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': USER_AGENT_STRING,
        },
        body: querystring.stringify({
            refresh_token: refreshToken,
            client_id: CLIENT_ID,
            grant_type: 'refresh_token',
        }),
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
            Referer: 'https://home.nest.com',
        },
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
