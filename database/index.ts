import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY3RTpUfvnsrcyuiEIPC0qw7v9RW7ihrE",
  authDomain: "blog-project-e8217.firebaseapp.com",
  projectId: "blog-project-e8217",
  storageBucket: "blog-project-e8217.appspot.com",
  messagingSenderId: "279935384348",
  appId: "1:279935384348:web:0142eea286e17d99a318d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;