import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaCheckCircle,
} from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "../stylesheets/Contact.css";

const SERVICE_ID = "service_ssy9l7o";
const TEMPLATE_ID = "template_po2o0v8";
const PUBLIC_KEY = "Nt_42I7US1TE7d2iD";

const EMAIL = "harshkaushik8610@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/harshkumar0152/";
const GITHUB = "https://github.com/Harshkumar0152";

export default function Contact() {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setSubmitted(true);
        toast.success("Message sent successfully 🚀");

        setTimeout(() => setSubmitted(false), 3000);
        e.target.reset();
      })
      .catch(() => {
        toast.error("Failed to send message.");
      });
  };

  return (
    <section className="contact-section" id="contact">

      <div className="contact-glow"></div>

      <div className="contact-container">

        {/* LEFT PANEL */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2>Let’s Work Together 🚀</h2>

          <p>
            Open to internships, freelance projects, and full-time opportunities
            in Data Analytics, BI & Development.
          </p>

          <div className="contact-email-box">
            <FaEnvelope />
            <span>{EMAIL}</span>
          </div>

          <div className="contact-socials">
            <a href={`mailto:${EMAIL}`}><FaEnvelope /></a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href={GITHUB} target="_blank" rel="noreferrer"><FaGithub /></a>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >

          <h3 className="form-title">Send a Message</h3>

          <div className="input-group">
            <label>Name</label>
            <input type="text" name="user_name" placeholder="Your full name" required />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" name="user_email" placeholder="you@example.com" required />
          </div>

          <div className="input-group">
            <label>Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message..."
              required
            />
          </div>

          <button type="submit" className="contact-send">
            <LuSend /> Send Message
          </button>

          {submitted && (
            <div className="contact-success">
              <FaCheckCircle /> Message sent successfully!
            </div>
          )}
        </motion.form>

      </div>
    </section>
  );
}