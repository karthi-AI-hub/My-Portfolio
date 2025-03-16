import React from "react";
import { motion } from "framer-motion";
import "../../styles/global.css";
import { FaReact, FaNodeJs, FaAndroid, FaShoppingCart, FaLaptopCode } from "react-icons/fa";
import { SiFlutter, SiMongodb, SiFirebase, SiGraphql } from "react-icons/si";

const skills = [
  { id: 1, name: "Full-Stack Development", icon: <FaLaptopCode />, description: "Building scalable web applications with modern frameworks." },
  { id: 2, name: "Android Development", icon: <FaAndroid />, description: "Developing native and cross-platform mobile applications." },
  { id: 3, name: "Cross-Platform Apps", icon: <SiFlutter />, description: "Creating seamless experiences across iOS & Android." },
  { id: 4, name: "E-Commerce Solutions", icon: <FaShoppingCart />, description: "Building online stores and marketplaces with secure payment integration." },
  { id: 5, name: "React & React Native", icon: <FaReact />, description: "Developing modern UI/UX experiences for web and mobile." },
  { id: 6, name: "Node.js & Backend", icon: <FaNodeJs />, description: "Building scalable and efficient backend services." },
  { id: 7, name: "MongoDB & Firebase", icon: <SiMongodb />, description: "Implementing NoSQL databases and real-time solutions." },
  { id: 8, name: "GraphQL API", icon: <SiGraphql />, description: "Efficient data fetching with GraphQL APIs." }
];

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            className="skill-card"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-description">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
