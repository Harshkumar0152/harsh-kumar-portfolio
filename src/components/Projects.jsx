import { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "../stylesheets/Projects.css";

const projects = [
  {
    title: "Sales Performance Dashboard",
    description:
      "Built an interactive Power BI dashboard to analyze sales, revenue, profit, and KPIs using DAX, Power Query, and dynamic visualizations.",
    tech: ["Power BI", "Excel", "DAX", "Power Query"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    github: "https://github.com/Harshkumar0152/Sales-Performance-Dashboard-PowerBI",
    demo: "https://github.com/Harshkumar0152/Sales-Performance-Dashboard-PowerBI",
    category: "Power BI",
  },

  {
    title: "HR Analytics Dashboard",
    description:
      "Designed a Power BI dashboard to monitor employee attrition, workforce demographics, department-wise performance, and HR KPIs.",
    tech: ["Power BI", "Excel", "DAX"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    github: "https://github.com/Harshkumar0152",
    demo: "https://app.powerbi.com/view?r=YOUR_REPORT_ID",
    category: "Power BI",
  },

  {
    title: "Financial Risk Analysis",
    description:
      "Performed financial data analysis using Python to identify trends, visualize risks, clean datasets, and generate actionable business insights.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
    github: "https://github.com/Harshkumar0152",
    demo: "#",
    category: "Python",
  },

  {
    title: "SQL Business Insights",
    description:
      "Created SQL queries to analyze customer behavior, sales trends, revenue growth, and business performance using MySQL.",
    tech: ["SQL", "MySQL"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    github: "https://github.com/Harshkumar0152",
    demo: "#",
    category: "SQL",
  },

  {
    title: "Retail Sales Analysis",
    description:
      "Analyzed retail sales data using Excel and Power BI to identify top-selling products, regional performance, and customer purchasing trends.",
    tech: ["Excel", "Power BI"],
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800",
    github: "https://github.com/Harshkumar0152",
    demo: "#",
    category: "Excel",
  },
  {
    title: "Netflix Data Analysis",
    description:
      "Conducted exploratory data analysis on Netflix datasets to uncover trends in genres, countries, release years, and content ratings.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800",
    github: "https://github.com/Harshkumar0152",
    demo: "#",
    category: "Python",
  },
];

const categories = ["All", "Power BI", "Python", "SQL", "Excel"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        <motion.h2
          className="projects-title"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <motion.p
          className="projects-intro"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          A selection of data analytics projects showcasing my expertise in
          Power BI, SQL, Python, Excel, dashboard development, business
          intelligence, and data visualization.
        </motion.p>

        <div className="projects-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>

                <p className="project-desc">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="project-tech-item"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaExternalLinkAlt />
                    &nbsp;Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub />
                    &nbsp;Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}