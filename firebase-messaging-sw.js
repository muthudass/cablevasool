importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyDPLCoetChy2tY5JVYSJA0R9NXfC99L2iw",
    authDomain: "react-burger-builder-2ccc0.firebaseapp.com",
    databaseURL: "https://react-burger-builder-2ccc0-default-rtdb.firebaseio.com",
    projectId: "react-burger-builder-2ccc0",
    storageBucket: "react-burger-builder-2ccc0.appspot.com",
    messagingSenderId: "701624320065",
    appId: "1:701624320065:web:ab9ad8631eca75a48246c0",
    measurementId: "G-GBW3DHTKQ2"
 });
const messaging = firebase.messaging();