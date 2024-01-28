// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWW3SW3fOYkchURXpU_1-xrLcdRkqfA4A",
  authDomain: "challenge-9a1db.firebaseapp.com",
  projectId: "challenge-9a1db",
  storageBucket: "challenge-9a1db.appspot.com",
  messagingSenderId: "909058140730",
  appId: "1:909058140730:web:252e6dcf6bfbdd6a246303",
  measurementId: "G-52LGFXH50F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
