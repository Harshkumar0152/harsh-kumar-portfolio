import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// 🔥 Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDawcu89o9mxf3Mrn5URrIQA71bNBT_E04",
  authDomain: "harshkaushik01-portfolio.firebaseapp.com",
  projectId: "harshkaushik01-portfolio",
  storageBucket: "harshkaushik01-portfolio.firebasestorage.app",
  messagingSenderId: "386297952062",
  appId: "1:386297952062:web:3032f06e2f96b5b750de6f",
};

// 🔥 Init App
const app = initializeApp(firebaseConfig);

// 🔥 Auth
export const auth = getAuth(app);

// 🔥 Google Provider
export const provider = new GoogleAuthProvider();

// ⭐ FIX: force account selection
provider.setCustomParameters({
  prompt: "select_account",
});


// ================================
// 🔐 LOGIN
// ================================
export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.log("Login Error:", error);
  }
};


// ================================
// 🚪 LOGOUT
// ================================
export const logoutUser = async () => {
  try {
    await signOut(auth);

    // clear session (fix auto-login issue)
    localStorage.clear();
    sessionStorage.clear();
  } catch (error) {
    console.log("Logout Error:", error);
  }
};


// ================================
// 👤 AUTH STATE LISTENER
// ================================
export const onAuthChange = (callback) => {
  return onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};