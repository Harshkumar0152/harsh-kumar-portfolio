import { motion } from "framer-motion";
import { FaFileDownload, FaEye } from "react-icons/fa";
import "../stylesheets/Resume.css";

const keySkills = [
  "Data Analysis & Data Visualization",
  "Power BI Dashboards & Reporting",
  "SQL (MySQL) for Data Extraction & Analysis",
  "Python (Pandas, NumPy, Matplotlib)",
  "Microsoft Excel (Pivot Tables, Charts, Dashboards)",
  "Business Intelligence & KPI Reporting",
  "Data Cleaning & Preprocessing",
  "Problem Solving & Analytical Thinking",
  "Version Control (Git, GitHub)",
];

const experienceSummary = [
  "Developed multiple data analytics projects including Power BI dashboards, SQL analysis, and Python-based data insights.",
  "Worked on real-world datasets to generate business insights and improve decision-making using visualization tools.",
  "Practiced data cleaning, transformation, and exploratory data analysis using Python and Excel.",
  "Built interactive dashboards focusing on KPIs, trends, and business performance metrics.",
];

const educationSummary = [
  "B.E. in Computer Science & Engineering, Chandigarh University, Mohali, Punjab (2022 – 2026) | CGPA: 7/10",
  "Senior Secondary (CBSE, Non-Medical), D.A.V. Centenary Public School, Faridabad, Haryana (2021 – 2022)",
  "Secondary Education (CBSE), D.A.V. Centenary Public School, Faridabad, Haryana (2019 – 2020) | 70%",
];

const resumeUrl = "#";

export default function Resume() {
  return (
    <section className="resume-section" id="resume">
      <div className="resume-container">

        <motion.h2
          className="resume-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Resume
        </motion.h2>

        <motion.p
          className="resume-desc"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Download my resume to view my skills, projects, and experience in
          Data Analytics, Power BI, SQL, Python, and Business Intelligence.
        </motion.p>

        <motion.div
          className="resume-actions"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <a
            href="/Documents/Resume.pdf"
            className="resume-download"
            download="Harsh_Resume.pdf"
          >
            <FaFileDownload /> Download Resume (PDF)
          </a>

          <a
            href={resumeUrl}
            className="resume-view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEye /> View Resume
          </a>
        </motion.div>

        <motion.div
          className="resume-section-sub"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="resume-subsection">
            <h3>Key Skills</h3>
            <ul>
              {keySkills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="resume-subsection">
            <h3>Experience Highlights</h3>
            <ul>
              {experienceSummary.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="resume-subsection">
            <h3>Education</h3>
            <ul>
              {educationSummary.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}