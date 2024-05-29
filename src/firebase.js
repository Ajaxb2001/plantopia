// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Remove import for getAnalytics if not used
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDjWMCKoVrJ4ZwQxhMOl3RByuJVjL1k-qQ",
  authDomain: "plant-store-ajay.firebaseapp.com",
  projectId: "plant-store-ajay",
  storageBucket: "plant-store-ajay.appspot.com",
  messagingSenderId: "453382897130",
  appId: "1:453382897130:web:2d067163628c44017cc693",
  measurementId: "G-TLF374KETL",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Correctly initialize auth
// Remove analytics initialization if not used
// const analytics = getAnalytics(app);

export { auth }; // Export auth
