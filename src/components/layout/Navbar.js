import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleScroll = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    closeMenu();
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Karthi-NexGen</div>

      {/* Desktop Navigation */}
      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        <li><a href="#home" onClick={() => handleScroll("home")}>Home</a></li>
        <li><a href="#about" onClick={() => handleScroll("about")}>About</a></li>
        <li><a href="#projects" onClick={() => handleScroll("projects")}>Projects</a></li>
        <li><a href="#skills" onClick={() => handleScroll("skills")}>Skills</a></li>
        <li><a href="#contact" 
        // onClick={() => handleScroll("contact")}
         >
          Contact</a></li>
      </ul>

      {/* Hamburger Menu (Mobile) */}
      <motion.button
        className={styles.hamburger}
        onClick={toggleMenu}
        whileTap={{ scale: 0.9 }}
        aria-expanded={menuOpen}
        aria-label="Toggle Navigation"
      >
        ☰
      </motion.button>

      {/* Mobile Navigation (Animated) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className={styles.mobileNav}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <li><a href="#home" onClick={() => handleScroll("home")}>Home</a></li>
            <li><a href="#about" onClick={() => handleScroll("about")}>About</a></li>
            <li><a href="#projects" onClick={() => handleScroll("projects")}>Projects</a></li>
            <li><a href="#contact" onClick={() => handleScroll("contact")}>Contact</a></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
