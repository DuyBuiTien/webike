importScripts("https://www.gstatic.com/firebasejs/7.19.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.19.0/firebase-messaging.js");
var firebaseConfig = {
    apiKey: "AIzaSyAmPxTvIwRRjgbtpKeO4TW23kmTr9L4YOQ",
    authDomain: "nd-ttdh.firebaseapp.com",
    databaseURL: "https://nd-ttdh.firebaseio.com",
    projectId: "nd-ttdh",
    storageBucket: "nd-ttdh.appspot.com",
    messagingSenderId: "63656255152",
    appId: "1:63656255152:web:67bb774200dc0302492575",
    measurementId: "G-GDY1QHCGFZ"
  };
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
     const promiseChain = clients
          .matchAll({
               type: "window",
               includeUncontrolled: true,
          })
          .then((windowClients) => {
               for (let i = 0; i < windowClients.length; i++) {
                    const windowClient = windowClients[i];
                    windowClient.postMessage(payload);
               }
          })
          .then(() => {
               return registration.showNotification("my notification title");
          });
     return promiseChain;
});
self.addEventListener("notificationclick", function(event) {
     console.log(event);
});