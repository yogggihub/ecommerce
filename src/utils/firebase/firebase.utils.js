// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRNxdu5LjmB-pwBtk1nEtT8lEhJg-BAaw",
  authDomain: "ecommerce-381bc.firebaseapp.com",
  projectId: "ecommerce-381bc",
  storageBucket: "ecommerce-381bc.appspot.com",
  messagingSenderId: "843074967483",
  appId: "1:843074967483:web:0a81073aa4bd6c3749d69e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.getCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,        
        email,
        createAt,
      });
    } catch (error) {
      console.log("error creating the use", error.message);
    }
  }
  return userDocRef;
};
