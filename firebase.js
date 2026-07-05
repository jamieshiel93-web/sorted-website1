// Firebase App
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";

// Firebase Authentication
import {
  getAuth
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// Firestore Database
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBUp527nMtmDU9Lf8_EjU2RPjYgI8Kymy0",
  authDomain: "sorted-client-portal.firebaseapp.com",
  projectId: "sorted-client-portal",
  storageBucket: "sorted-client-portal.firebasestorage.app",
  messagingSenderId: "158256495111",
  appId: "1:158256495111:web:96cf1f4ad77ff0da74c8a2",
  measurementId: "G-YLM1F8NL3B"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
