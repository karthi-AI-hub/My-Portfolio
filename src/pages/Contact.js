import React from "react";
import "./Contact.module.css";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me through any of the channels below.</p>

      <div className="contact-details">
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <a href="tel:+919688976383">+91 96889 76383</a>
        </div>

        <div className="contact-item">
          <FaWhatsapp className="contact-icon" />
          <a
            href="https://wa.me/919688976383"
            target="_blank"
            rel="noopener noreferrer"
          >
            Message on WhatsApp
          </a>
        </div>

        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:karthikeyan@example.com">karthikeyan@example.com</a>
        </div>

        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <p>Chennai, India</p>
        </div>
      </div>

      <div className="google-maps">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.292730053939!2d80.27071897494582!3d13.082680487217803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52679d125d8fb5%3A0x25d9b5767421ff10!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1710447507481"
          width="100%"
          height="400"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
