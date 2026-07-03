import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDawcu89o9mxf3Mrn5URrIQA71bNBT_E04",
  authDomain: "harshkaushik01-portfolio.firebaseapp.com",
  projectId: "harshkaushik01-portfolio",
  storageBucket: "harshkaushik01-portfolio.firebasestorage.app",
  messagingSenderId: "386297952062",
  appId: "1:386297952062:web:3032f06e2f96b5b750de6f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

// 🔥 Force account selection every login
provider.setCustomParameters({
  prompt: "select_account",
});