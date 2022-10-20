import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  RecaptchaVerifier,
  sendSignInLinkToEmail,
  signInWithPhoneNumber,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC86631nbR9vV25_UT5xLq8XOYHT3bQ0Do',
  authDomain: 'pocagathaloginsms.firebaseapp.com',
  projectId: 'pocagathaloginsms',
  storageBucket: 'pocagathaloginsms.appspot.com',
  messagingSenderId: '587368615561',
  appId: '1:587368615561:web:d73cff437599237d578058',
  measurementId: 'G-9E0BBESQEQ',
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const actionCodeSettings = {
  url: 'http://localhost:5173',
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
  window.recaptchaVerifier = new RecaptchaVerifier(
    'recaptcha-container',
    {
      size: 'invisible',
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
      },
    },
    auth
  );

  let appVerifier = window.recaptchaVerifier;
  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const sendPhoneCode = async (phoneCode) => {
  try {
    let confirmationResult = window.confirmationResult;
    confirmationResult.confirm(phoneCode).then((result) => {
      const user = result.user;
      console.log(result.user);
    });
  } catch (error) {
    console.log(error);
  }
};
