import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5WDc6YKWk6DpVx_0wCUPYvcOdSJoUi9s",
  authDomain: "superchat-ffe67.firebaseapp.com",
  projectId: "superchat-ffe67",
  storageBucket: "superchat-ffe67.appspot.com",
  messagingSenderId: "529434623945",
  appId: "1:529434623945:web:b9a943ecc8019661933218",
  measurementId: "G-CK0XRHHEYJ",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firestore = firebase.firestore();
