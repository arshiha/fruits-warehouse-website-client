// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8IWL_17grVk5LVLhNXQ0v4UC-NHG2VBg",
  authDomain: "fruits-warehouse.firebaseapp.com",
  projectId: "fruits-warehouse",
  storageBucket: "fruits-warehouse.appspot.com",
  messagingSenderId: "1011179123124",
  appId: "1:1011179123124:web:75b237cc92102435c142e1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
