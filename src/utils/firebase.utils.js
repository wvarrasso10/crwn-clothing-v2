// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {doc, getDoc, getFirestore, setDoc} from "firebase/firestore";
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
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  //check if user data dpes not exists
  //create / set the document with the data from userAuth om my collection

  //if user data does exist
};
