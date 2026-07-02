import { motion } from "framer-motion";
import {
  FaPython,
  FaJava,
  FaGitAlt,
  FaDatabase,
  FaNetworkWired,
  FaUsers,
  FaChartBar,
  FaMicrosoft,
} from "react-icons/fa";

import {
  SiMysql,
  SiTableau,
  SiPostman,
  SiCplusplus,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiGooglecolab,
} from "react-icons/si";

import { DiVisualstudio } from "react-icons/di";
import "../stylesheets/Skills.css";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: <FaPython className="python-color" /> },
      { name: "SQL", icon: <FaDatabase className="db-color" /> },
      { name: "Java", icon: <FaJava className="java-color" /> },
      { name: "C++", icon: <SiCplusplus className="cpp-color" /> },
    ],
  },

  {
    title: "Data Analysis & Visualization",
    skills: [
      { name: "Microsoft Power BI", icon: <FaChartBar className="powerbi-color" /> },
      { name: "Tableau", icon: <SiTableau className="tableau-color" /> },
      { name: "Microsoft Excel", icon: <FaMicrosoft className="excel-color" /> },
      { name: "Data Visualization", icon: <FaChartBar className="chart-color" /> },
      { name: "Dashboard Development", icon: <FaChartBar className="chart-color" /> },
      { name: "Business Intelligence", icon: <FaChartBar className="chart-color" /> },
      { name: "KPI Reporting", icon: <FaChartBar className="chart-color" /> },
    ],
  },

  {
    title: "Python Libraries",
    skills: [
      { name: "Pandas", icon: <SiPandas className="pandas-color" /> },
      { name: "NumPy", icon: <SiNumpy className="numpy-color" /> },
      { name: "Data Cleaning", icon: <FaDatabase className="db-color" /> },
      { name: "Data Transformation", icon: <FaDatabase className="db-color" /> },
      { name: "Exploratory Data Analysis (EDA)", icon: <FaChartBar className="chart-color" /> },
    ],
  },

  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: <SiMysql className="mysql-color" /> },
      { name: "Database Design", icon: <FaDatabase className="db-color" /> },
      { name: "Data Modeling", icon: <FaDatabase className="db-color" /> },
      { name: "SQL Queries", icon: <FaDatabase className="db-color" /> },
    ],
  },

  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", icon: <FaGitAlt className="git-color" /> },
      { name: "Jupyter Notebook", icon: <SiJupyter className="jupyter-color" /> },
      { name: "Google Colab", icon: <SiGooglecolab className="colab-color" /> },
      { name: "VS Code", icon: <DiVisualstudio className="vscode-color" /> },
      { name: "Postman", icon: <SiPostman className="postman-color" /> },
    ],
  },

  {
    title: "Core Computer Science",
    skills: [
      { name: "Data Structures & Algorithms", icon: <FaDatabase className="db-color" /> },
      { name: "DBMS", icon: <FaDatabase className="db-color" /> },
      { name: "Operating Systems", icon: <FaDatabase className="db-color" /> },
      { name: "Computer Networks", icon: <FaNetworkWired className="network-color" /> },
      { name: "Object-Oriented Programming", icon: <FaJava className="java-color" /> },
    ],
  },

  {
    title: "Professional Skills",
    skills: [
      { name: "Analytical Thinking", icon: <FaUsers className="team-color" /> },
      { name: "Problem Solving", icon: <FaUsers className="team-color" /> },
      { name: "Communication", icon: <FaUsers className="team-color" /> },
      { name: "Teamwork", icon: <FaUsers className="team-color" /> },
      { name: "Time Management", icon: <FaUsers className="team-color" /> },
      { name: "Attention to Detail", icon: <FaUsers className="team-color" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <motion.h2
          className="skills-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Skills
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map(({ title, skills }, idx) => (
            <motion.div
              key={title}
              className="skills-category"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <h3>{title}</h3>

              <ul className="skills-list">
                {skills.map(({ name, icon }) => (
                  <li key={name} className="skill-row">
                    <span className="skill-icon">{icon}</span>
                    <span className="skill-name">{name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}