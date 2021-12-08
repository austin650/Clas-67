import firebase from 'firebase';

// add SDK Firebase

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCetHn_1z26pPtSTo39E-ghB4ZHlmsy3d8",
  authDomain: "voting-app-41e9c.firebaseapp.com",
  databaseURL: "https://voting-app-41e9c-default-rtdb.firebaseio.com",
  projectId: "voting-app-41e9c",
  storageBucket: "voting-app-41e9c.appspot.com",
  messagingSenderId: "438073227755",
  appId: "1:438073227755:web:6a48b7b7f1781cce8001ae"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();