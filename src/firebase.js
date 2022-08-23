// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBd0rPkCxDMHBykjVYR1nw8A1aawXZiEm8",
  authDomain: "cityhospital-9cbb7.firebaseapp.com",
  projectId: "cityhospital-9cbb7",
  storageBucket: "cityhospital-9cbb7.appspot.com",
  messagingSenderId: "220197075588",
  appId: "1:220197075588:web:6a74c3602032b121ff20d1",
  measurementId: "G-KRD04G7DDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
