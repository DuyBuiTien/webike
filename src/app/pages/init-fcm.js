import * as firebase from "firebase/app";
import "firebase/messaging";
const initializedFirebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCY1o_MOluqway0rzgp2aHYOQsxM1QhSLA",
    authDomain: "bg-ttdh.firebaseapp.com",
    databaseURL: "https://bg-ttdh.firebaseio.com",
    projectId: "bg-ttdh",
    storageBucket: "bg-ttdh.appspot.com",
    messagingSenderId: "894401672330",
    appId: "1:894401672330:web:77e6b29da8476f1897a973",
    measurementId: "G-HMSH5L2D5S"
  });
let messaging = null
if (firebase.messaging.isSupported()) {
    messaging = initializedFirebaseApp.messaging();
}

export { messaging };