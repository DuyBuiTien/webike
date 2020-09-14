importScripts("https://www.gstatic.com/firebasejs/7.19.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.19.0/firebase-messaging.js");
var firebaseConfig = {
     apiKey: "AIzaSyCY1o_MOluqway0rzgp2aHYOQsxM1QhSLA",
     authDomain: "bg-ttdh.firebaseapp.com",
     databaseURL: "https://bg-ttdh.firebaseio.com",
     projectId: "bg-ttdh",
     storageBucket: "bg-ttdh.appspot.com",
     messagingSenderId: "894401672330",
     appId: "1:894401672330:web:77e6b29da8476f1897a973",
     measurementId: "G-HMSH5L2D5S"
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