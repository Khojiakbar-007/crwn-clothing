import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";

import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyCNSwSLO-yc3LcTGBlGCP95W-NJKK9kHuI",
  authDomain: "my-crwn-shop-db.firebaseapp.com",
  projectId: "my-crwn-shop-db",
  storageBucket: "my-crwn-shop-db.appspot.com",
  messagingSenderId: "672222445954",
  appId: "1:672222445954:web:54730b1d9f3dd87b00cf9b",
  measurementId: "G-S2T40TLVVS",
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
