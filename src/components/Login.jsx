import { useEffect } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";
import "../stylesheets/Login.css";

export default function Login() {
  const SESSION_TIME = 10 * 60 * 1000; // 10 minutes

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

      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async () => {
    try {
      // Clear old session only
      localStorage.removeItem("loginTime");

      const result = await signInWithPopup(auth, provider);

      if (result.user) {
        localStorage.setItem("loginTime", Date.now().toString());

        alert("✅ Login Successful!");
        alert("⚠️ Session valid for 10 minutes only.");

        setTimeout(async () => {
          await handleSessionExpire();
        }, SESSION_TIME);
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert(error.message);
    }
  };

  return (
    <div className="Login-page">
      <div className="Login-card">
        <div className="Login-logo">
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

        <span className="Login-footer">
          Powered by <strong>Harsh Kaushik</strong>
          <br />
          © 2026 All Rights Reserved
        </span>
      </div>
    </div>
  );
}