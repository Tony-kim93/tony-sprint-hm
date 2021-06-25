importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js');

firebase.initializeApp({
  apiKey: 'AIzaSyBRnNF4z4burdQlNpBhbrSZF0fqceNDKjQ',
  authDomain: 'hm-sprint-tony.firebaseapp.com',
  databaseURL: 'https://hm-sprint-tony.firebaseio.com',
  projectId: 'hm-sprint-tony',
  storageBucket: 'hm-sprint-tony.appspot.com',
  messagingSenderId: '802846160049',
  appId: '1:802846160049:web:860eeec063a4181d585e90'
});
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  const title = 'Background Message Title';
  const options = {
    body: 'Background Message body.'
  };

  self.registration.showNotification(title, options);
});
