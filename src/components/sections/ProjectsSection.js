import React, { useState } from "react";
import { motion } from "framer-motion";
import projectsData from "../data/projectData";
import ProjectCard from "../components/common/ProjectCard";

const categories = ["All", "Web", "Mobile", "Full-Stack", "Cross-Platform"];

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) =>
          project.category.includes(selectedCategory)
        );

  return (
    <section className="projects-section">
      <h2 className="section-title">My Projects</h2>
      
      <div className="category-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <motion.div className="projects-grid" layout>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
