# nest-observe

> Unofficial API for observing Google Nest devices which works with Google authentication

It provides a simple interface to create an event emitter which will stream updates whenever
a device in your home changes.

## About

This repository contains a proof-of-concept library that uses the https://home.nest.com
grpc-web API to observe Nest devices. This is the same API that is used on the app 
homepage, which comes with a few of benefits:

- Access to data using a Google authenticated account (Nest API access was recently removed 
  for migrated accounts)
- Access to data from the EU/UK version of the _Nest Thermostat E_, which is unavailable 
  through the official API
  
This library was created by examining the https://home.nest.com source code to retrieve 
protobuf specs for the publically exposed `GatewayService` used by the app. 
The library pretends to be a client on the web app to access the api. I have used it 
here solely for the `Observe` rpc call, which is a streaming endpoint that pushes new states
of devices in your home to the client, other endpoints exist on the service which may allow
for updating the state of the home, however this is yet to be explored (feel free to open
a PR!).

The endpoint returns a list of 'traits' for each device in the home. This includes information
such as current temperature, current humidity, room names, device names, target temperatures,
eco modes and more.

Caveats about this library:
- This has only been tested in a home using EU/UK versions of the Nest Thermostat E and 
  Heat Link E. While it has been shown to provide access to this data, it would be good 
  to confirm what other devices work with this.
- Not all of the trait protobuf specs have been implemented. Please feel free to open am
  issue/PR to add them, or contact me about my method of extracting the protobuf 
  specs from the source code.
  
There is still a lot of opportunity for this method of accessing your nest data - 
please feel free to contribute!

## Installation

```
npm install nest-observe
```

## Usage

Authentication is done using the method outlined by the `homebridge-nest` library to retrieve
the values for `issueToken`, `cookie` and `apikey`. Thankfully
you will only need to do this once _(note that the other authentication methods on that 
page are currently unsupported)_: 
https://github.com/chrisjshull/homebridge-nest#using-a-google-account

```js
const { authGoogle, observe } = require('nest-observe');

// Use auth details to get JWT token. Returned object contains {token, expiry, refresh}
// where refresh is a function to get a new token object
const token = await authGoogle(issueToken, cookie, apikey);

// Create the observer. Can also be done using promises
const observer = await observe(token.token, {
    protobuf: false, // set true to return protobuf object as value
    debug: false // set true to log a lot more
});

// Event emitted for new updates which include only the new values
observer.on('data', state => {
    console.log('New state:', state);
});

// Event emitted when the streaming is stopped 
observer.on('end', () => {
    console.log('Streaming ended');
});
```

For each data event, the state is an object which contains mappings of `DEVICE/STRUCTURE` to
values. An example of the state:

```json5
{
  "DEVICE_XXXX": {
     "traits": [
       { 
         // Name of the protobuf trait type
         "type": "nest.trait.sensor.TemperatureTrait",

         // Label provided by observe endpoint
         "label": "temperature",

         // Value of the trait (spec is defined in the .proto files)
         "value": {
            "temperatureValue": {
               "temperature": {
                  "value": 19.8700008392334
               }
            }
         }
       },
        // ...  
     ],

     // List of traits which have no corresponding protobuf spec yet
     "ignored": [
       {
          // Name of the protobuf trait type
          "type": "nest.trait.hvac.UtilitySettingsTrait",

          // Base64 encoded message
          "value": "CAEQARgB"
       },
       // ...
     ],
    },
    // more devices and structures...
}
```

## Feedback

There is a lot more we could do with this library and it is still very young and buggy. Please 
feel free to contribute or contact me!

## Acknowledgement

Thanks to https://github.com/chrisjshull/homebridge-nest for the method of authenticating to
Google.