// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
      apiKey: "AIzaSyBcRbVHZLw3MsTAaKa3SLH82My3GYxLrYo",
      authDomain: "cubers-7f7ed.firebaseapp.com",
      databaseURL: "https://cubers-7f7ed.firebaseio.com",
      projectId: "cubers-7f7ed",
      storageBucket: "cubers-7f7ed.appspot.com",
      messagingSenderId: "298279938164"    
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
