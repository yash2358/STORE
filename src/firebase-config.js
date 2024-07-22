// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnXEBe6f5MTakkCeyiFP2wQUyjvaURyI0",
  authDomain: "fdfds-aba8d.firebaseapp.com",
  projectId: "fdfds-aba8d",
  storageBucket: "fdfds-aba8d.appspot.com",
  messagingSenderId: "331898522252",
  appId: "1:331898522252:web:1aeb8b8a6595dc7c8e49a9",
  measurementId: "G-M6QR406LMT"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);