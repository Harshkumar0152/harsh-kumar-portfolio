import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaEarlybirds } from "react-icons/fa6";
import { useEffect, useState } from "react";
import "../stylesheets/Hero.css";

// Simple typing animation hook
function useTypingAnimation(words, typingSpeed = 150, pauseDuration = 1500) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    const currentWord = words[wordIndex % words.length];

    if (!isDeleting) {
      // Typing
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
        if (text.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      }, typingSpeed);
    } else {
      // Deleting
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => prev + 1);
        }
      }, typingSpeed / 2);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, pauseDuration]);

  return text;
}

export default function Hero() {
  const roles = [
    "Aspiring Data Analyst",
    "Power BI Developer",
    "Tableau Specialist",
    "Python Programmer",
    "SQL Enthusiast",
    "Data Visualization Expert",
    "Business Intelligence Analyst",
    "Dashboard Deployer"
  ];
  const typedText = useTypingAnimation(roles);

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.p
            className="hero-welcome"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.6, ease: "easeOut" }}
          >
            Welcome to My Portfolio !
          </motion.p>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
          >
            I'm  <span className="gradient-text"> Harsh Kumar</span>
          </motion.h1>
          <motion.h2
            className="hero-subtitle"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
          >
            {typedText}
            <span className="typing-cursor">|</span>
          </motion.h2>
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
          >
          Aspiring Data Analyst and Computer Science Engineering graduate from Chandigarh University with a passion for transforming data into actionable insights. Skilled in SQL, Python, Microsoft Excel, Power BI, and Tableau, with hands-on experience in data analysis, visualization, and dashboard development. Dedicated to solving real-world business problems through data-driven decision-making and continuously expanding my analytical and technical expertise.
          </motion.p>

          {/* Circular Social Links */}
          <motion.div
            className="hero-socials"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" }}
          >
            <a
              href="https://www.linkedin.com/in/harshkumar0152/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Harshkumar0152"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://leetcode.com/u/Harshkaushik1/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="LeetCode"
            >
              <SiLeetcode />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="#"
            >
              <FaEarlybirds />
            </a>
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6, ease: "easeOut" }}
          >
            <a href="mailto:harshkaushik8610@gmail.com" className="hero-button">
              <FaEnvelope /> Contact Me
            </a>
            <a
              href="/Resume.pdf"
              download="Resume.pdf"
              className="hero-button secondary"
            >
              <FaFileDownload /> Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Floating profile image */}
        <motion.div
          className="hero-image-container"
          initial={{ y: 0 }}
          animate={{ y: -16 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
          }}
        >
          <div className="image-wrapper">
            <img
              src="/images/MyPhoto.jpg"
              alt="harsh kumar"
              className="hero-image"
              draggable="false"
            />
            <div className="image-border"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}