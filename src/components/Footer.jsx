import { useEffect, useState } from "react";
import "../stylesheets/Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="footer-glow"></div>

        <div className="footer-container">

          {/* LEFT */}
          <div className="footer-left">
            <h3 className="footer-title">Harsh Kumar</h3>
            <p className="footer-subtitle">
              Data Analyst • Power BI • Python • SQL
            </p>
            <p className="footer-desc">
              Building clean, data-driven digital experiences with precision.
            </p>
          </div>

          {/* CENTER */}
          <div className="footer-center">
            <p className="footer-label">Quick Links</p>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>

          {/* RIGHT */}
          <div className="footer-right">
            <p className="footer-label">Connect</p>

            <div className="footer-icons">
              <a href="mailto:Harshkaushik8610@gmail.com">
                <FaEnvelope />
              </a>

              <a
                href="https://www.linkedin.com/in/harshkumar0152/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/Harshkumar0152"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Harsh Kumar. All rights reserved.</p>
        </div>
      </footer>

      {/* FLOATING SCROLL TOP BUTTON */}
      {showTop && (
        <button className="scroll-top-btn" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </>
  );
}