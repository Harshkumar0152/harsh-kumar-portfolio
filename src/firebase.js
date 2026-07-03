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

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

provider.addScope("email");
provider.addScope("profile");

// LOGIN
export const loginWithGoogle = async () => {
  await signInWithRedirect(auth, provider);
};

// Redirect Result
export const handleRedirectResult = async () => {
  try {
    const result = await getRedirectResult(auth);

    if (result?.user) {
      localStorage.setItem("loginTime", Date.now().toString());
      return result.user;
    }

    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// LOGOUT
export const logoutUser = async () => {
  await signOut(auth);
  localStorage.removeItem("loginTime");
  sessionStorage.clear();
};

// AUTH LISTENER
export const onAuthChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};