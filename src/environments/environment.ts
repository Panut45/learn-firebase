// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyC1yyOtDL2IArTlsO0NAlDRcRUYxWmPD60",
    authDomain: "learn-firebase-4a949.firebaseapp.com",
    projectId: "learn-firebase-4a949",
    storageBucket: "learn-firebase-4a949.appspot.com",
    messagingSenderId: "838816401856",
    appId: "1:838816401856:web:c122d7a9fafcb4a50c2025",
    measurementId: "G-T98FBZ42L9"
  }
};

const app = initializeApp(environment.firebaseConfig);
const db = getFirestore(app);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
