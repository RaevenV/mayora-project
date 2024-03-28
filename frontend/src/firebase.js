import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsE2xu2vECeTbtXWznsCQ0QFU5YRfPFYk",
  authDomain: "mayora-e3140.firebaseapp.com",
  databaseURL:
    "https://mayora-e3140-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mayora-e3140",
  storageBucket: "mayora-e3140.appspot.com",
  messagingSenderId: "958437444867",
  appId: "1:958437444867:web:13dde98223de309d2fed36",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);