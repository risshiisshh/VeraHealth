import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCQFfVkj_rW7o693uAOY0hlAGUFGbhiZqg",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "verahealth-f0b99.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "verahealth-f0b99",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "verahealth-f0b99.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "699789479792",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:699789479792:web:bae36298160f83ea7309b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error;
  }
};
