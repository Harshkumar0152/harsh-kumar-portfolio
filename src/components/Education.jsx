import { motion } from "framer-motion";
import "../stylesheets/Education.css";

const educationData = [
  {
    degree: "B.E. in Computer Science & Engineering",
    institution: "Chandigarh University, Mohali, Punjab",
    year: "Aug 2022 – Aug 2026",
    details: "CGPA: 7/10",
    logo: "/images/CU.jpg"
  },
  {
    degree: "Senior Secondary (CBSE, Non-Medical Stream)",
    institution: "D.A.V. Centenary Public School, Faridabad, Haryana",
    year: "Apr 2021 – Apr 2022",
    details: "Subjects: Physics, Chemistry, Mathematics, English, Physical education",
    logo: "/images/DAV.jpg"
  },
  {
    degree: "Secondary (CBSE, X)",
    institution: "D.A.V. Centenary Public School, Faridabad, Haryana",
    year: "Apr 2019 – Apr 2020",
    details: "Percentage: 70%",
    logo: "/images/DAV.jpg"
  },
];

export default function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <motion.h2
          className="education-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Education
        </motion.h2>
        <div className="education-list">
          {educationData.map((item, idx) => (
            <motion.div
              className="education-card"
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
            >
              <div className="edu-logo-wrapper">
                <img
                  src={item.logo}
                  alt={`${item.institution} logo`}
                  className="edu-logo"
                  loading="lazy"
                />
              </div>
              <div className="edu-card-main">
                <div className="edu-degree">{item.degree}</div>
                <div className="edu-inst">{item.institution}</div>
                <div className="edu-score">{item.details}</div>
              </div>
              <div className="edu-card-side">
                <div className="edu-year">{item.year}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}