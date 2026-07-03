import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDawcu89o9mxf3Mrn5URrIQA71bNBT_E04",
  authDomain: "harshkaushik01-portfolio.firebaseapp.com",
  projectId: "harshkaushik01-portfolio",
  storageBucket: "harshkaushik01-portfolio.appspot.com", // ✅ Check this matches Firebase Console
  messagingSenderId: "386297952062",
  appId: "1:386297952062:web:3032f06e2f96b5b750de6f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Auth
export const auth = getAuth(app);

// Google Provider
export const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

provider.addScope("email");
provider.addScope("profile");

// ================================
// LOGIN
// ================================
export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);

    localStorage.setItem("loginTime", Date.now().toString());

    return result.user;
  } catch (error) {
    console.error("Google Login Error:", error);
    throw error;
  }
};

// ================================
// LOGOUT
// ================================
export const logoutUser = async () => {
  try {
    await signOut(auth);
  } finally {
    localStorage.removeItem("loginTime");
    sessionStorage.clear();
  }
};

// ================================
// AUTH LISTENER
// ================================
export const onAuthChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};