import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider} 
  from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDmiMhUGSSfjutrqkQWn3r5u66L-QdRWE",
  authDomain: "subhadip-cloth-db.firebaseapp.com",
  projectId: "subhadip-cloth-db",
  storageBucket: "subhadip-cloth-db.appspot.com",
  messagingSenderId: "738028337287",
  appId: "1:738028337287:web:d941ee9069a82c10c8e022"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters(
  {
    prompt: "select_account"
  }
);

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumnet = async (userAuth) => {
  const userRef =  doc(db, 'users', userAuth.uid);
  console.log(userRef)
  const userSnapshot = await getDoc(userRef);
  console.log(userSnapshot);
  if(!userSnapshot.exists()) {
    const {email, displayName} = userAuth
    const createDate = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createDate
      })
    }catch(error) {
      alert('error is saving user data :::: ' + error)
    }
  }
  return userRef;

}