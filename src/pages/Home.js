import React from "react";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import EducationSection from "../components/sections/EducationSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import SkillsSection from "../components/sections/SkillsSection";
import ContactSection from "../components/sections/ContactSection";

const Home = () => {
  return (
    <div>
      <section id="home"> <HeroSection/></section>
      <section id="about"><AboutSection /></section>
      <section id="education"><EducationSection /></section>
      <section id="projects"><ProjectsSection /></section>
      <section id="skills"><SkillsSection/></section>
      <section id="contact"><ContactSection /></section>
    </div>
  );
};

export default Home;
