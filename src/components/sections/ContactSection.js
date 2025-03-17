import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../styles/ContactSection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      console.log("Form submitted:", formData);
      setTimeout(() => setIsSubmitted(false), 3000);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <motion.section
      className="contact-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Contact Me
      </motion.h2>

      {isSubmitted && (
        <motion.p
          className="success-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          ✅ Message Sent Successfully!
        </motion.p>
      )}

      <motion.form onSubmit={handleSubmit} className="contact-form">
        <motion.input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          whileFocus={{ scale: 1.05 }}
          className={errors.name ? "error" : ""}
        />
        {errors.name && <motion.span className="error-text">{errors.name}</motion.span>}

        <motion.input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          whileFocus={{ scale: 1.05 }}
          className={errors.email ? "error" : ""}
        />
        {errors.email && <motion.span className="error-text">{errors.email}</motion.span>}

        <motion.textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          whileFocus={{ scale: 1.05 }}
          className={errors.message ? "error" : ""}
        />
        {errors.message && <motion.span className="error-text">{errors.message}</motion.span>}

        <motion.button
          type="submit"
          className="send-btn"
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(255, 204, 0, 0.8)" }}
          whileTap={{ scale: 0.9 }}
          animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.section>
  );
};

export default ContactSection;
