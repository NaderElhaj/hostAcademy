// Import the functions you need from the SDKs you need
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK3HDGkI0PHysqM_Sihu-8eOmg_2bPnSY",
  authDomain: "hostapplication-29b2d.firebaseapp.com",
  projectId: "hostapplication-29b2d",
  storageBucket: "hostapplication-29b2d.appspot.com",
  messagingSenderId: "839862986229",
  appId: "1:839862986229:web:0cbe4fd9857a45b3ca2cbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
