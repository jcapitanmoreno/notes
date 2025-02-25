// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  firebaseConfig : {
    apiKey: "AIzaSyCJnwlwndld8LWt6DY9veyzykPAY8r9bck",
    authDomain: "mynotes-19c2b.firebaseapp.com",
    projectId: "mynotes-19c2b",
    storageBucket: "mynotes-19c2b.firebasestorage.app",
    messagingSenderId: "670462892082",
    appId: "1:670462892082:web:57eda8f9d5b361271bc42b"
  },
  supabaseConfig: {
    projectURl: "https://ppcodbmazhnlyxomiswi.supabase.co",
    apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwY29kYm1hemhubHl4b21pc3dpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MDQ3NDgzOSwiZXhwIjoyMDU2MDUwODM5fQ.qAiONrm6BzZqFCBPIsAyDLglnUgfWG56vdwK154EUOQ",
    bucket: "MyNotes"
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
