import { motion } from "framer-motion";
import {
  FaChartBar,
  FaChartLine,
  FaDatabase,
  FaMapMarkerAlt,
  FaLanguage,
  FaLightbulb,
  FaUserGraduate,
} from "react-icons/fa";
import "../stylesheets/About.css";

const aboutVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <motion.h2
          className="about-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          About <span className="about-gradient">Me</span>
        </motion.h2>

        <div className="about-content">
          {/* About Summary */}
          <motion.div
            className="about-summary"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={aboutVariants}
            custom={1}
          >
            <p>
              Hi! I'm <span className="about-name">Harsh Kumar</span>, a{" "}
              <span className="about-highlight">Data Analyst</span> and
              Computer Science Engineering graduate passionate about data
              analytics and business intelligence. I enjoy transforming raw
              data into meaningful insights, uncovering trends, and building
              interactive dashboards that support smarter business decisions.
              Through academic and personal projects, I have gained hands-on
              experience in data cleaning, exploratory data analysis (EDA), KPI
              reporting, and data visualization using SQL, Python, Microsoft
              Excel, Power BI, and Tableau. I believe in continuous learning and
              constantly explore new tools and technologies to strengthen my
              analytical skills and deliver impactful, data-driven solutions.
            </p>
          </motion.div>

          {/* Quick Facts */}
          <motion.div
            className="about-facts"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={aboutVariants}
            custom={2}
          >
            <div className="about-fact">
              <FaMapMarkerAlt className="about-fact-icon" />
              <span>Location: Faridabad, Haryana, India</span>
            </div>

            <div className="about-fact">
              <FaLanguage className="about-fact-icon" />
              <span>Languages: English, Hindi</span>
            </div>

            <div className="about-fact">
              <FaLightbulb className="about-fact-icon" />
              <span>Interests: Data Analytics, Dashboards, Cricket, Chess</span>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            className="about-highlights-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={aboutVariants}
            custom={3}
          >
            <div className="about-highlight-card">
              <FaChartBar className="about-highlight-icon chart-color" />
              <div>
                <h4>Data Analytics</h4>
                <p>
                  Transforming raw data into actionable insights through
                  analysis, visualization, and reporting.
                </p>
              </div>
            </div>

            <div className="about-highlight-card">
              <FaDatabase className="about-highlight-icon database-color" />
              <div>
                <h4>Data Management</h4>
                <p>
                  Cleaning, organizing, and querying data using SQL, Excel, and
                  relational databases.
                </p>
              </div>
            </div>

            <div className="about-highlight-card">
              <FaChartLine className="about-highlight-icon dashboard-color" />
              <div>
                <h4>Dashboard & BI</h4>
                <p>
                  Building interactive Power BI and Tableau dashboards with KPI
                  reporting for business insights.
                </p>
              </div>
            </div>

            <div className="about-highlight-card">
              <FaUserGraduate className="about-highlight-icon" />
              <div>
                <h4>B.E. Computer Science Engineering</h4>
                <p>Chandigarh University | 2022 – 2026</p>
              </div>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.p
            className="about-mission"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={aboutVariants}
            custom={4}
          >
            Passionate about turning data into meaningful insights, building
            impactful dashboards, and helping organizations make smarter,
            data-driven decisions through continuous learning and analytical
            thinking.
          </motion.p>
        </div>
      </div>
    </section>
  );
}