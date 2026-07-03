import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const loginTime = localStorage.getItem("loginTime");

      if (!loginTime) {
        signOut(auth);
        setUser(null);
        return;
      }

      const SESSION_TIME = 10 * 60 * 1000;
      const diff = Date.now() - Number(loginTime);

      if (diff >= SESSION_TIME) {
        signOut(auth);
        localStorage.removeItem("loginTime");
        setUser(null);
      } else {
        setUser(currentUser);
      }
    });

    return () => unsubscribe();
  }, []);

  if (!user) {
    return <Login />;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <ToastContainer />

      <button
        onClick={() => {
          signOut(auth);
          localStorage.removeItem("loginTime");
          setUser(null);
        }}
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          zIndex: 999,
          padding: "8px 15px",
          borderRadius: "8px",
          cursor: "pointer",
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