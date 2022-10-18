import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  RecaptchaVerifier,
  sendSignInLinkToEmail,
  signInWithPhoneNumber,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC86631nbR9vV25_UT5xLq8XOYHT3bQ0Do",
  authDomain: "pocagathaloginsms.firebaseapp.com",
  projectId: "pocagathaloginsms",
  storageBucket: "pocagathaloginsms.appspot.com",
  messagingSenderId: "587368615561",
  appId: "1:587368615561:web:d73cff437599237d578058",
  measurementId: "G-9E0BBESQEQ",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//const phoneNumber = getPhoneNumberFromUserInput();
const appVerifier = window.recaptchaVerifier;

const actionCodeSettings = {
  url: "http://localhost:5173",
  handleCodeInApp: true,
};

export const sendEmailVerification = async (email) => {
  try {
    await sendSignInLinkToEmail(auth, email, actionCodeSettings);
  } catch (error) {
    console.log(error);
  }
};

export const signUp = async (email, password) => {
  try {
    const abc = await createUserWithEmailAndPassword(auth, email, password);
    console.log(abc);
  } catch (e) {
    console.log(e);
  }
  await sendEmailVerification(email);
};

export const sendPhoneNumber = async (phoneNumber) => {
  try {
    await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
  } catch (error) {
    console.log(error);
  }
};

window.recaptchaVerifier = new RecaptchaVerifier(
  "sign-in-button",
  {
    size: "invisible",
    callback: (response) => {
      onSignInSubmit();
    },
  },
  auth
);
