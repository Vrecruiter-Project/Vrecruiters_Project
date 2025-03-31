// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  // appId: import.meta.env.VITE_FIREBASE_APP_ID,
  // measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  // databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  apiKey: "AIzaSyAsUjhgKV9FKr1j2vxegTEI9RzaJk63v0A",
  authDomain: "vrecruiters-7cda0.firebaseapp.com",
  databaseURL: "https://vrecruiters-7cda0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vrecruiters-7cda0",
  storageBucket: "vrecruiters-7cda0.appspot.com",
  messagingSenderId: "1019901149127",
  appId: "1:1019901149127:web:5fdc5c8a75902c78d7a3e2",
  measurementId: "G-CX9G1X7JLD"
};

// Initialize Firebase
export function initializeFirebaseApp() {
  let firebaseApp;
  const apps = getApps();
  if (apps.length === 0) {
    firebaseApp = initializeApp(firebaseConfig);
    const auth = getAuth();
    setPersistence(auth, browserLocalPersistence);
  } else {
    firebaseApp = apps[0];
  }
}
