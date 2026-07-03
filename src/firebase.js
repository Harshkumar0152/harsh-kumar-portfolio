import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
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

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// 🔥 IMPORTANT: keeps user logged in permanently
setPersistence(auth, browserLocalPersistence);

// Google provider config
provider.setCustomParameters({
  prompt: "select_account",
});

provider.addScope("email");
provider.addScope("profile");

// LOGIN (Redirect method)
export const loginWithGoogle = async () => {
  try {
    await signInWithRedirect(auth, provider);
  } catch (error) {
    console.error("Login Error:", error);
  }
};

// Handle Redirect Result
export const handleRedirectResult = async () => {
  try {
    const result = await getRedirectResult(auth);

    if (result?.user) {
      return result.user;
    }

    return null;
  } catch (error) {
    console.error("Redirect Error:", error);
    return null;
  }
};

// LOGOUT
export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout Error:", error);
  }
};

// AUTH LISTENER
export const onAuthChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};