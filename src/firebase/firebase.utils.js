import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";

import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyCJ-UyvfP6EpgoJX3NAKQdMppDBzQoTt3Y",
  authDomain: "my-crwn-clothing-db-f46e6.firebaseapp.com",
  projectId: "my-crwn-clothing-db-f46e6",
  storageBucket: "my-crwn-clothing-db-f46e6.appspot.com",
  messagingSenderId: "631380447417",
  appId: "1:631380447417:web:d152f45d516afd5ca0cb68",
};

export const firebaseApp = initializeApp(config);
export const db = getFirestore();

export const auth = getAuth(firebaseApp);
export const provider = new GoogleAuthProvider(firebaseApp);

provider.setCustomParameters({
  prompt: "select_account",
  login_hint: "user@example.com",
});

export const signInWithGoogle = async function () {
  try {
    await signInWithPopup(auth, provider);
  } catch (err) {
    console.log(new Error(err.code));
  }
};

// FIRESTORE

export const createUserProfileDocument = async (userAuth, otherData) => {
  if (!userAuth) return;
  const docRef = doc(db, `users/${userAuth.uid}`);
  const snapShot = await getDoc(docRef);

  if (!snapShot.exists()) {
    const createdAt = new Date();

    // BUG in firebase/firestore, "setDoc".
    const userData = {
      displayName:
        userAuth?.displayName ||
        otherData?.displayName ||
        userAuth?.user?.displayName ||
        null,
      email: userAuth?.email || userAuth?.user?.email || null,
      createdAt,
      ...otherData,
    };

    try {
      await setDoc(docRef, userData);
    } catch (error) {
      console.log(`Error creating user:`);
      console.log(error);
    }
  }

  return snapShot;
};
