import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import "../stylesheets/Login.css";

export default function Login() {
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-logo">
       <img src="public/images/photo.jpeg" alt="Harsh Kumar" />
       </div>

        <h1>Harsh Kumar</h1>

        <h3>Data Analyst Portfolio</h3>

        <p>
          Welcome! Sign in with your Google account to explore My
          Portfolio, Projects, Certifications and Resume.
        </p>

        <button className="google-btn" onClick={handleLogin}>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="Google"
          />
          Continue with Google
        </button>

        <span>
          Powered by Harsh Kaushik 
         | &copy; 2026 All Rights Reserved 
        </span>

      </div>
    </div>
  );
}