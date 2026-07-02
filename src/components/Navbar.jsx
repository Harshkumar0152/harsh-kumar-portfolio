import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoSunny, IoMoon, IoMenu, IoClose } from "react-icons/io5";
import "../stylesheets/Navbar.css";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Education", to: "education" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Experience", to: "experience" },
  { name: "Certifications", to: "certifications" },
  { name: "Resume", to: "resume" },
  { name: "Contact", to: "contact" }
];

export default function Navbar() {
  const [hovered, setHovered] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    setDarkMode(false);
  document.body.classList.remove("dark");

    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
      if (window.innerWidth >= 900) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleThemeToggle = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.body.classList.toggle("dark", newDarkMode);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`navbar${darkMode ? " dark" : ""}`}>
      <div className="navbar-container">
        <div
          className="navbar-logo"
          tabIndex={0}
          role="button"
          aria-label="Go to Home"
          onClick={() => { window.location.hash = "#home"; closeMenu(); }}
        >
          <span className="logo-first">Harsh</span>
          <span className="logo-surname">Kumar</span>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <ul className="navbar-links">
            {navLinks.map((link, idx) => (
              <li key={link.to} className="navbar-link-item">
                <a
                  href={`#${link.to}`}
                  className="navbar-link"
                  tabIndex={0}
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={closeMenu}
                >
                  {link.name}
                  <AnimatePresence>
                    {hovered === idx && (
                      <motion.div
                        className="navbar-underline"
                        initial={{ opacity: 0, scaleX: 0.8 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        exit={{ opacity: 0, scaleX: 0.8 }}
                        transition={{ duration: 0.22 }}
                      />
                    )}
                  </AnimatePresence>
                </a>
              </li>
            ))}
            <button
              className="theme-toggle"
              onClick={handleThemeToggle}
              aria-label="Toggle light/dark mode"
              tabIndex={0}
            >
              {darkMode ? <IoMoon size={22} /> : <IoSunny size={22} />}
            </button>
          </ul>
        )}

        {/* Mobile Navigation */}
        {isMobile && (
          <div className="mobile-nav">
            <button
              className="theme-toggle"
              onClick={handleThemeToggle}
              aria-label="Toggle light/dark mode"
              tabIndex={0}
            >
              {darkMode ? <IoMoon size={22} /> : <IoSunny size={22} />}
            </button>
            <button 
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
            </button>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  className="mobile-menu"
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 300 }}
                  transition={{ duration: 0.3 }}
                >
                  <ul className="mobile-links">
                    {navLinks.map((link) => (
                      <li key={link.to}>
                        <a
                          href={`#${link.to}`}
                          className="mobile-link"
                          onClick={closeMenu}
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </nav>
  );
}