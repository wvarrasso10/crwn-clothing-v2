// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider,} from "firebase/auth";
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHHGbFsUVCcZucvlOTKFuHcn4asfFfb9I",
  authDomain: "crown-clothing-db-3c0a1.firebaseapp.com",
  projectId: "crown-clothing-db-3c0a1",
  storageBucket: "crown-clothing-db-3c0a1.appspot.com",
  messagingSenderId: "504243737073",
  appId: "1:504243737073:web:126f7f8a2a304e3675b450",
  measurementId: "G-EYQDPX775W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithGooglePopup(auth, provider);
