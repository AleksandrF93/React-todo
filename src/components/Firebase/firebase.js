// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVju08mtZBbylDxNq91P8gP_ZCUjqBiKU",
  authDomain: "todo-app-b6dc3.firebaseapp.com",
  projectId: "todo-app-b6dc3",
  storageBucket: "todo-app-b6dc3.appspot.com",
  messagingSenderId: "601712433629",
  appId: "1:601712433629:web:cc324dbbaf1109108a3e34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);