import { motion } from "framer-motion";
import { FaLaptopCode, FaUsers, FaChartBar, FaDatabase } from "react-icons/fa";
import "../stylesheets/Experience.css";

const experienceData = [
  {
    role: "Data Analytics Developer (Self-Projects)",
    company: "Personal Portfolio Projects",
    period: "2026 – Present",
    description:
      "Built multiple data analytics projects including Power BI dashboards, SQL-based business insights, and Python data analysis solutions. Focused on data cleaning, visualization, and deriving actionable business insights using real-world datasets.",
    icon: <FaLaptopCode className="exp-icon" />,
    achievements: [
      "Developed interactive Power BI dashboards for sales and HR analytics",
      "Performed data cleaning and EDA using Python (Pandas, NumPy)",
      "Created SQL queries for business performance analysis",
    ],
  },

  {
    role: "Data Analytics Team Projects",
    company: "Chandigarh University",
    period: "2022 – 2026",
    description:
      "Worked on academic projects involving data analysis, visualization, and reporting. Collaborated with peers to design dashboards and present insights using structured datasets and visualization tools.",
    icon: <FaUsers className="exp-icon" />,
    achievements: [
      "Built Excel and Power BI dashboards for academic case studies",
      "Improved data interpretation and reporting accuracy",
      "Presented insights through structured visual storytelling",
    ],
  },

  {
    role: "Business Intelligence & Data Visualization Practice",
    company: "Self-Learning & Training Projects",
    period: "2026 – Present",
    description:
      "Practiced advanced data visualization and business intelligence concepts using Power BI and Excel. Focused on transforming raw datasets into meaningful dashboards for decision-making support.",
    icon: <FaChartBar className="exp-icon" />,
    achievements: [
      "Created KPI-driven dashboards using Power BI",
      "Worked on real-world datasets for business insights",
      "Improved storytelling through data visualization techniques",
    ],
  },

  {
    role: "SQL & Data Management Practice",
    company: "Personal Learning Projects",
    period: "2026 – Present",
    description:
      "Practiced SQL for data extraction, transformation, and analysis. Built structured queries for business reporting and database management tasks using MySQL.",
    icon: <FaDatabase className="exp-icon" />,
    achievements: [
      "Wrote complex SQL queries using joins and aggregations",
      "Analyzed structured datasets for business insights",
      "Improved database understanding and query optimization skills",
    ],
  },
];

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <motion.h2
          className="experience-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Experience
        </motion.h2>

        <div className="experience-list">
          {experienceData.map((item, idx) => (
            <motion.div
              className="experience-card"
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
            >
              {item.icon}

              <div className="exp-main">
                <div className="exp-role">{item.role}</div>
                <div className="exp-company">{item.company}</div>
                <div className="exp-desc">{item.description}</div>

                <ul className="exp-achievements">
                  {item.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="exp-period-badge">{item.period}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}