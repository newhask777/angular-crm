// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// import {client_secret, client_id} from '../../client.json';

export const environment = {
  production: false,
  apiUrl: 'http://127.0.0.1:8000/',
  auth: {
    clientSecret: "mpHOQIBZQ8wBoUPWcxk4F3ZxpLRI6Y6ntKm4llkx",
    clientId: "2"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
