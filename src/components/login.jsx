import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import "../stylesheets/Login.css";

export default function Login() {
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-logo">
          <img src="/images/photo.jpeg" alt="Harsh Kumar" />
        </div>

        <h1>Harsh Kumar</h1>

        <h3>Data Analyst Portfolio</h3>

        <p>
          Welcome! Sign in with your Google account to explore my portfolio,
          projects, certifications, resume, and professional journey in Data
          Analytics.
        </p>

        <button className="google-btn" onClick={handleLogin}>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="Google"
          />
          <span>Continue with Google</span>
        </button>

        <span className="login-footer">
          Powered by <strong>Harsh Kaushik</strong> <br />
          © 2026 All Rights Reserved
        </span>

      </div>
    </div>
  );
}