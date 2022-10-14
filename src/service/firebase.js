import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

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
