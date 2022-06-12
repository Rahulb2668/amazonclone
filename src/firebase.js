// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCS2uGPSelG9VvCqy1x_aPsQ8KeMm2vz0I",
  authDomain: "clone-1b72b.firebaseapp.com",
  projectId: "clone-1b72b",
  storageBucket: "clone-1b72b.appspot.com",
  messagingSenderId: "1096534437552",
  appId: "1:1096534437552:web:0949afab5122050e139575",
  measurementId: "G-K4G1GDYNV0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
