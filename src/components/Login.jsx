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
    await signOut(auth);
    localStorage.removeItem("loginTime");

    alert("⏰ Session expired. Please login again.");

    window.location.reload();
  };

  const handleLogin = async () => {
    try {
      // Clean old session
      localStorage.removeItem("loginTime");

      const result = await signInWithPopup(auth, provider);

      if (result.user) {
        localStorage.setItem("loginTime", Date.now().toString());

        alert("✅ Login Successful!");
        alert("⚠️ Session valid for 10 minutes only.");

        setTimeout(() => {
          handleSessionExpire();
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
          <img src="/images/photo.jpeg" alt="Profile" />
        </div>

        <h1>Harsh Kumar</h1>
        <h3>Data Analyst Portfolio</h3>

        <p>
          Sign in with Google to access portfolio, projects, certifications,
          resume and more.
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