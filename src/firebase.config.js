// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSoAsxN0kr_FbN8WdRoJ0dP-sJ9F5oZv4",
  authDomain: "quasar-3bd1b.firebaseapp.com",
  projectId: "quasar-3bd1b",
  storageBucket: "quasar-3bd1b.appspot.com",
  messagingSenderId: "1044396547979",
  appId: "1:1044396547979:web:24e71de733a187b611d98e"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};