import React, { useState } from "react";
import { motion } from "framer-motion";
import emailService from "../../services/emailService";
import "../../styles/global.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await emailService.sendEmail(formData);
      setStatus("Message Sent Successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Failed to send message. Try again later.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="contact-section"
    >
      <h2>Contact Me</h2>
      <p>Let's connect! Feel free to reach out.</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
        <button type="submit">Send Message</button>
      </form>
      <p className="status-message">{status}</p>
      <div className="social-links">
        <a href="https://github.com/karthi-AI-hub" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:your.email@example.com">Email</a>
      </div>
    </motion.section>
  );
};

export default ContactSection;
