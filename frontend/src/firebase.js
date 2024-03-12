// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "mayora-e3140.firebaseapp.com", 
  projectId: "mayora-e3140",
  storageBucket: "mayora-e3140.appspot.com",
  messagingSenderId: "958437444867",
  appId: "1:958437444867:web:13dde98223de309d2fed36",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
