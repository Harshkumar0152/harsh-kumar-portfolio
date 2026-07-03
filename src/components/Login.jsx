import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import "../stylesheets/Login.css";

export default function Login() {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      if (result.user) {
        alert("✅ Login Successful!");
        console.log("User:", result.user);
      }
    } catch (error) {
      console.error("Login Error:", error);

      if (error.code !== "auth/popup-closed-by-user") {
        alert(error.message);
      }
    }
  };

  return (
    <div className="Login-page">
      <div className="Login-card">
        <div className="Login-logo">
          <img src="/images/photo.jpeg" alt="Profile" />
        </div>

        <h1>Harsh Kumar</h1>
        <h3>Data Analyst Portfolio</h3>

        <p>
          Sign in with Google to explore portfolio, projects,
          certifications, resume, and professional journey.
        </p>

        <button className="google-btn" onClick={handleLogin}>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="Google"
          />
          <span>Continue with Google</span>
        </button>

        <span className="Login-footer">
          Powered by <strong>Harsh Kaushik</strong>
          <br />
          © 2026 All Rights Reserved
        </span>
      </div>
    </div>
  );
}