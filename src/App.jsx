import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import { onAuthStateChanged } from "firebase/auth";
import { auth, logoutUser } from "./firebase";
import { useEffect, useState } from "react";

import Login from "./components/Login";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await logoutUser();
    setUser(null);
  };

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
          fontWeight: "600",
        }}
      >
        Loading...
      </div>
    );
  }

  if (!user) {
    return <Login />;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <ToastContainer />

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          zIndex: 999,
          padding: "8px 15px",
          borderRadius: "8px",
          cursor: "pointer",
          background: "#dc3545",
          color: "#fff",
          border: "none",
          fontWeight: "600",
        }}
      >
        Logout
      </button>

      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;