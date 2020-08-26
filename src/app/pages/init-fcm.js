import * as firebase from "firebase/app";
import "firebase/messaging";
const initializedFirebaseApp = firebase.initializeApp({
     // Project Settings => Add Firebase to your web app
     apiKey: "AIzaSyAmPxTvIwRRjgbtpKeO4TW23kmTr9L4YOQ",
    authDomain: "nd-ttdh.firebaseapp.com",
    databaseURL: "https://nd-ttdh.firebaseio.com",
    projectId: "nd-ttdh",
    storageBucket: "nd-ttdh.appspot.com",
    messagingSenderId: "63656255152",
    appId: "1:63656255152:web:67bb774200dc0302492575",
    measurementId: "G-GDY1QHCGFZ"
});
let messaging = null
if (firebase.messaging.isSupported()) {
    messaging = initializedFirebaseApp.messaging();
}

export { messaging };