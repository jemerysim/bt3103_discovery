import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyAFbsBgPYKj8VRQvaUUwD6PyH5uT7JPaD0",
    authDomain: "bt3103-week-6-fc1e6.firebaseapp.com",
    projectId: "bt3103-week-6-fc1e6",
    storageBucket: "bt3103-week-6-fc1e6.appspot.com",
    messagingSenderId: "961975625243",
    appId: "1:961975625243:web:ad7b19a57f2e5b2403fabe",
    measurementId: "G-VG6Z2MN8KW"
  };

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;