import React from "react";
import HeroSection from "../components/sections/HeroSection";
// import ProjectsSection from "../components/sections/ProjectsSection";
// import ContactSection from "../components/sections/ContactSection";
import AboutSection from "../components/sections/AboutSection";
// import SkillsSection from "../components/sections/SkillsSection";
// import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <div>
      <section id="home"> <HeroSection/></section>
      <section id="about"><AboutSection /></section>
      {/* <section id="projects"><ProjectsSection /></section>
      <section id="contact"><ContactSection /></section> */}
    </div>
  );
};

export default Home;
