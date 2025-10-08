import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAPANdqRDPSizB_yKlGMDnOw9ogA0pU04",
  authDomain: "lms-mobile-project-35b52.firebaseapp.com",
  projectId: "lms-mobile-project-35b52",
  storageBucket: "lms-mobile-project-35b52.firebasestorage.app",
  messagingSenderId: "678698554369",
  appId: "1:678698554369:web:c4a065b8bac478d2601c00",
};
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);

export { auth };
