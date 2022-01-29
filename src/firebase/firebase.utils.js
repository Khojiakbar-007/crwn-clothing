import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";

import {
  firestore,
  getFirestore,
  collection,
  getDocs,
  getDoc,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { useRef } from "react";

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
// provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
provider.setCustomParameters({
  prompt: "select_account",
  login_hint: "user@example.com",
});

export const signInWithGoogle = async function () {
  try {
    const res = await signInWithPopup(auth, provider);
    // console.log(res);

    // const credential = GoogleAuthProvider.credentialFromResult(res);
    // const token = credential.accessToken;
    // const user = res.user;

    // console.log(token, "\n", user);
  } catch (error) {
    const errorCode = error.code;
    // const errorMessage = error.message;
    // // The email of the user's account used.
    // const email = error.email;
    // // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);

    console.log(new Error(errorCode));
  }
};

// FIRESTORE

export const createUserProfileDocument = async (userAuth, otherData) => {
  if (!userAuth) return;

  const docRef = doc(db, `users/${userAuth.uid}`);
  const snapShot = await getDoc(docRef);
  console.log(
    "Working",
    snapShot,
    snapShot.exists(),
    "User Auth",
    userAuth,
    "\nUser auth user: ",
    userAuth.user
  );

  if (!snapShot.exists()) {
    const createdAt = new Date();

    // const { displayName, email } = userAuth.user;
    // let email = '';
    // email = await userAuth.email;
    // email = await userAuth.user?.email;
    // console.log(
    //   "User Auth: ",
    //   userAuth /* "Display name: ", displayName,  "email: ", email*/
    // );
    // console.log("\n other data: ", otherData);
    try {
      await setDoc(
        docRef,
        {
          displayName:
            userAuth?.displayName ||
            otherData?.displayName ||
            userAuth?.user?.displayName ||
            null,
          email: userAuth?.email || userAuth?.user?.email || null,
          createdAt,
          ...otherData,
        },
        {
          merge: true,
        }
      );
      console.log("Document reference: ", docRef, "\n other data: ", otherData);
    } catch (error) {
      console.log(`Error creating user:`);
      console.log(error);
    }
  }

  console.log("Working", snapShot, snapShot.exists());
  return docRef;
};

// 12:42
