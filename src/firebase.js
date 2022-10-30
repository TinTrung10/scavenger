// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzH92jZDH5DKo9WpEkCtfxDMQ1bohE1nY",
  authDomain: "list-2d0e5.firebaseapp.com",
  projectId: "list-2d0e5",
  storageBucket: "list-2d0e5.appspot.com",
  messagingSenderId: "44794623323",
  appId: "1:44794623323:web:76ae8a9f2176537f45d67e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);