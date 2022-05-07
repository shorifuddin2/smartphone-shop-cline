// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQi_KUYUyHANZuKsHNcoui4SBUjy5OOBg",
  authDomain: "smartphone-show-room-88deb.firebaseapp.com",
  projectId: "smartphone-show-room-88deb",
  storageBucket: "smartphone-show-room-88deb.appspot.com",
  messagingSenderId: "1096050922332",
  appId: "1:1096050922332:web:0f8660fc3c74e1dfada799"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;