// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyoHQn7ZtT5gi4YI-8KWD4RvnCzUqRUBw",
  authDomain: "it-park-dc71d.firebaseapp.com",
  projectId: "it-park-dc71d",
  storageBucket: "it-park-dc71d.appspot.com",
  messagingSenderId: "676986393125",
  appId: "1:676986393125:web:d86b5c425eb007f92ce5cc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fire = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();
