// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQorG3uWhddj0mZI2YPvcRJATTR07DOi8",
  authDomain: "fir-8424e.firebaseapp.com",
  projectId: "fir-8424e",
  storageBucket: "fir-8424e.firebasestorage.app",
  messagingSenderId: "914047593539",
  appId: "1:914047593539:web:d686f50110031fba5b78f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export{db}