import { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiCoursera } from "react-icons/si";
import { TbCircleLetterSFilled } from "react-icons/tb";
import "../stylesheets/Certifications.css";

const certifications = [
  // Core/Relevant Certifications
  {
    name: "React Native",
    provider: "Meta (Coursera)",
    date: "2024",
    description: "Building cross-platform mobile apps with React Native.",
    icon: <SiCoursera className="cert-provider-icon coursera" />,
    image: "/images/react-native.png",
    link: "https://drive.google.com/file/d/1VA8HGemCG3vu1xq9QlHbGELLoj_tZjbe/view?usp=sharing",
    category: "Core"
  },
  {
    name: "Introduction to Databases",
    provider: "Meta (Coursera)",
    date: "2024",
    description: "Database fundamentals and practical usage for modern applications.",
    icon: <SiCoursera className="cert-provider-icon coursera" />,
    image: "/images/databases.png",
    link: "https://drive.google.com/file/d/1kVWMeu-4zH26WuYV5S1jJD7SNd5NYwxi/view?usp=sharing",
    category: "Core"
  },
  {
    name: "Introduction to NoSQL Databases",
    provider: "IBM (Coursera)",
    date: "2024",
    description: "NoSQL concepts and hands-on experience with modern databases.",
    icon: <SiCoursera className="cert-provider-icon coursera" />,
    image: "/images/nosql.png",
    link: "https://drive.google.com/file/d/1vR5Qt6iA6A-pX-0xyvD-5-fRa_37yay1/view?usp=sharing",
    category: "Core"
  },
  {
    name: "SQL: A Practical Introduction for Querying Databases",
    provider: "IBM (Coursera)",
    date: "2024",
    description: "Practical SQL querying and relational database management.",
    icon: <SiCoursera className="cert-provider-icon coursera" />,
    image: "/images/sql.png",
    link: "https://drive.google.com/file/d/1WxiBO7bRn9LrPkuyAQkyIaB64NGFhx7l/view?usp=sharing",
    category: "Core"
  },
  {
    name: "Python for Everybody",
    provider: "University of Michigan (Coursera)",
    date: "2023",
    description: "Fundamentals of Python programming for data and web applications.",
    icon: <SiCoursera className="cert-provider-icon coursera" />,
    image: "/images/python.jpg",
    link: "https://drive.google.com/file/d/1mqohQ9zqfZrP47AelL15_APGBOy4axyw/view?usp=sharing",
    category: "Core"
  },
  // Additional Certifications (for breadth, not core)
  {
    name: "Developing Industrial Internet of Things",
    provider: "University of Colorado Boulder (Coursera)",
    date: "2024",
    description: "Industrial IoT development and deployment strategies.",
    icon: <SiCoursera className="cert-provider-icon coursera" />,
    image: "/images/iiot.jpg",
    link: "https://drive.google.com/file/d/1lZa8fD5tjYawQJzh1suucGH5O92BGoLL/view?usp=sharing",
    category: "Additional"
  },
  {
    name: "Foundation of Cloud IoT Edge ML",
    provider: "Swayam NPTEL",
    date: "2024",
    description: "Integration of cloud, IoT, and edge machine learning technologies.",
    icon: <TbCircleLetterSFilled className="cert-provider-icon swayam" />,
    image: "/images/cloud-iot-edge.jpg",
    link: "https://drive.google.com/file/d/1mhikxlKz2448-MjMI12sMLMaXbJf58Er/view?usp=sharing",
    category: "Additional"
  },
  {
    name: "Internet of Things: Design Concepts and Use Cases",
    provider: "Swayam NPTEL",
    date: "2024",
    description: "IoT system design, practical applications, and real-world use cases.",
    icon: <TbCircleLetterSFilled className="cert-provider-icon swayam" />,
    image: "/images/iot.jpg",
    link: "https://drive.google.com/file/d/1f6kCiMy8yv_XihTcmHvHSC7fDwCTrVBA/view?usp=sharing",
    category: "Additional"
  },
  {
    name: "Multi-Core Computer Architecture",
    provider: "Swayam NPTEL",
    date: "2024",
    description: "Comprehensive study of advanced computer architecture and multi-core processing.",
    icon: <TbCircleLetterSFilled className="cert-provider-icon swayam" />,
    image: "/images/coa.webp",
    link: "https://drive.google.com/file/d/1Mr1CeKCKD1-myD1goBFpMheQJfum0G9j/view?usp=sharing",
    category: "Additional"
  },
  {
    name: "Foundations of Cryptography",
    provider: "Swayam NPTEL",
    date: "2024",
    description: "Core cryptographic principles and security protocols for modern applications.",
    icon: <TbCircleLetterSFilled className="cert-provider-icon swayam" />,
    image: "/images/cryptography.jpg",
    link: "https://drive.google.com/file/d/1DbMFYXfrOfFeW8_eVT_rTEhz7QHx71TI/view?usp=sharing",
    category: "Additional"
  }
];

const categories = ["All", "Core", "Additional"];

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCerts =
    activeCategory === "All"
      ? certifications
      : certifications.filter((cert) => cert.category === activeCategory);

  return (
    <section className="cert-section" id="certifications">
      <div className="cert-container">
        <motion.h2
          className="cert-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Certifications
        </motion.h2>
        <motion.p
          className="cert-intro"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          Explore my core and additional certifications. Use the filter to view the most relevant credentials or see my broader learning journey.
        </motion.p>
        <div className="cert-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn${activeCategory === cat ? " active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="cert-grid">
          {filteredCerts.map((cert, idx) => (
            <motion.div
              className="cert-card"
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
            >
              <div className="cert-image-wrapper">
                <img src={cert.image} alt={cert.name + " certificate"} className="cert-image" loading="lazy" />
              </div>
              <div className="cert-card-main">
                <div className="cert-icon-container">
                  {cert.icon}
                </div>
                <div>
                  <div className="cert-name">{cert.name}</div>
                  <div className="cert-provider-row">
                    <span className="cert-provider">{cert.provider}</span>
                    <span className="cert-date-badge">{cert.date}</span>
                  </div>
                  {cert.description && (
                    <div className="cert-description">{cert.description}</div>
                  )}
                </div>
              </div>
              {cert.link && cert.link !== "#" && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-link"
                >
                  <FaExternalLinkAlt /> View Certificate
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}