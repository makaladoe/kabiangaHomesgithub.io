// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTdrhhus3jYPQWEdvAWAhZ4x6Q7GCR_Ak",
  authDomain: "kabiangahomes.firebaseapp.com",
  projectId: "kabiangahomes",
  storageBucket: "kabiangahomes.appspot.com",
  messagingSenderId: "656556242815",
  appId: "1:656556242815:web:fb2934dbd4d94fd0a00c4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
  }

  
  
  export default firebase;