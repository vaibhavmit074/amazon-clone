import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeqMVOyCC9knFOuxO6od0-7FuTSpXrdEE",
  authDomain: "clone-c83ac.firebaseapp.com",
  databaseURL: "https://clone-c83ac.firebaseio.com",
  projectId: "clone-c83ac",
  storageBucket: "clone-c83ac.appspot.com",
  messagingSenderId: "634829849381",
  appId: "1:634829849381:web:94326325644bf1458b10cc",
  measurementId: "G-58HK1VS5QR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };