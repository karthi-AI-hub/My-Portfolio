import React from "react";
import "../../styles/HeroSection.css";
import { motion } from "framer-motion";

const Hero = () => {

  const handleScroll = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }}>
        Hi, I'm <span className="gradient-text">Karthikeyan</span>
      </motion.h1>
      <p>A passionate developer building amazing web experiences.</p>
      <motion.div className="hero-buttons" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <button className="btn"  onClick={() => handleScroll("projects")}>View Projects</button>
        <button className="btn">Download Resume</button>
        <button className="btn">Contact Me</button>
      </motion.div>
    </section>
  );
};

export default Hero;
