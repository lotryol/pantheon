// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import firebase from 'firebase';
// import firebase from "@firebase/app";
import { initializeApp } from "@firebase/app";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcIV3sjibfgXF4rUVpSRLo5Ham-nLVj_o",
  authDomain: "pantheon-97490.firebaseapp.com",
  projectId: "pantheon-97490",
  storageBucket: "pantheon-97490.appspot.com",
  messagingSenderId: "696346933978",
  appId: "1:696346933978:web:2a099f1b284436eef003e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// app.firestore().settings({});
export default app;