import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";

const config = {
  apiKey: "AIzaSyCNSwSLO-yc3LcTGBlGCP95W-NJKK9kHuI",
  authDomain: "my-crwn-shop-db.firebaseapp.com",
  projectId: "my-crwn-shop-db",
  storageBucket: "my-crwn-shop-db.appspot.com",
  messagingSenderId: "672222445954",
  appId: "1:672222445954:web:54730b1d9f3dd87b00cf9b",
  measurementId: "G-S2T40TLVVS",
};

const firebaseApp = initializeApp(config);

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
    console.log(res);

    // const credential = GoogleAuthProvider.credentialFromResult(res);
    // const token = credential.accessToken;
    // const user = res.user;

    // console.log(token, "\n", user);
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    // const errorMessage = error.message;
    // // The email of the user's account used.
    // const email = error.email;
    // // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);

    console.log(new Error(errorCode));
  }
};

// time 13:12
