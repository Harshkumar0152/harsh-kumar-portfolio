import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDawcu89o9mxf3Mrn5URrIQA71bNBT_E04",
  authDomain: "harshkaushik01-portfolio.firebaseapp.com",
  projectId: "harshkaushik01-portfolio",
  storageBucket: "harshkaushik01-portfolio.appspot.com",
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
// LOGIN (Redirect)
// ================================
export const loginWithGoogle = async () => {
  try {
    await signInWithRedirect(auth, provider);
  } catch (error) {
    console.error("Google Login Error:", error);
    throw error;
  }
};

// ================================
// HANDLE REDIRECT RESULT
// ================================
export const handleRedirectResult = async () => {
  try {
    const result = await getRedirectResult(auth);

    if (result?.user) {
      localStorage.setItem("loginTime", Date.now().toString());
      return result.user;
    }

    return null;
  } catch (error) {
    console.error("Redirect Login Error:", error);
    return null;
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