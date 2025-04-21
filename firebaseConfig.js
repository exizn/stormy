// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWiBuWZwIMGh9Vk_DvI8oOp27d2Iu-nbg",
  authDomain: "insta-34f97.firebaseapp.com",
  projectId: "insta-34f97",
  storageBucket: "insta-34f97.firebasestorage.app",
  messagingSenderId: "1013957796292",
  appId: "1:1013957796292:web:7e09b79740df63cfa5c491",
  measurementId: "G-HVZ29M1ZFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
