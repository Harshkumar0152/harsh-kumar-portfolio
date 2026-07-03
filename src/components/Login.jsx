import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth, loginWithGoogle } from "../firebase";
import "../stylesheets/Login.css";

export default function Login() {
  const SESSION_TIME = 10 * 60 * 1000; // 10 min

  useEffect(() => {
    const loginTime = localStorage.getItem("loginTime");

    if (!loginTime) return;

    const diff = Date.now() - Number(loginTime);

    if (diff >= SESSION_TIME) {
      handleSessionExpire();
    } else {
      const timer = setTimeout(() => {
        handleSessionExpire();
      }, SESSION_TIME - diff);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSessionExpire = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("loginTime");

      alert("⏰ Session expired. Please login again.");
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async () => {
    try {
      localStorage.removeItem("loginTime");

      // Redirect to Google Sign-In
      await loginWithGoogle();
    } catch (error) {
      console.error("Login Error:", error);
      alert(error.message);
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