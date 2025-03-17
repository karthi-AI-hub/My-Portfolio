import React from "react";
import { motion } from "framer-motion";
import "../../styles/global.css";
import { FaReact, FaNodeJs, FaAndroid, FaShoppingCart, FaLaptopCode } from "react-icons/fa";
import { SiFlutter, SiMongodb, SiFirebase, SiGraphql } from "react-icons/si";

// Skill Data
const skills = [
  { id: 1, name: "Full-Stack Development", icon: <FaLaptopCode />, color: "#ff5722" },
  { id: 2, name: "Android Development", icon: <FaAndroid />, color: "#4caf50" },
  { id: 3, name: "Cross-Platform Apps", icon: <SiFlutter />, color: "#2196f3" },
  { id: 4, name: "E-Commerce Solutions", icon: <FaShoppingCart />, color: "#ff9800" },
  { id: 5, name: "React & React Native", icon: <FaReact />, color: "#61dafb" },
  { id: 6, name: "Node.js & Backend", icon: <FaNodeJs />, color: "#8bc34a" },
  { id: 7, name: "GraphQL API", icon: <SiGraphql />, color: "#e535ab" },
  { id: 8, name: "MongoDB & Firebase", icon: <SiMongodb />, color: "#4db33d" },
];

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: i * 0.1 }
  }),
};

const SkillSection = () => {
  return (
    <section className="skills-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            className="skill-card"
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.1, rotate: 2, boxShadow: `0px 0px 15px ${skill.color}` }}
            whileTap={{ scale: 0.95 }}
            style={{ borderBottom: `4px solid ${skill.color}` }}
          >
            <div className="skill-icon" style={{ color: skill.color }}>{skill.icon}</div>
            <h3 className="skill-name">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
