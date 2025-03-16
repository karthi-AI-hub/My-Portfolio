import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Timeline, TimelineItem } from "@mui/lab";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { name: "Full-Stack Development", level: "90%" },
  { name: "Android Development", level: "85%" },
  { name: "Cross-Platform Development", level: "80%" },
  { name: "E-commerce Applications", level: "75%" },
  { name: "Web Development (Static & Dynamic)", level: "95%" }
];

const experience = [
  { year: "2025", title: "SAIL Health Portal", description: "Developed a web app for managing employee medical reports at Steel Authority of India Limited." },
  { year: "2025", title: "Track My Grade", description: "Android app for students & faculties to calculate CGPA and manage mark sheets." }
];

export default function AboutMe() {
  return (
    <section className="p-6 md:p-12 lg:p-16">
      <motion.h1 className="text-4xl font-bold mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        About Me
      </motion.h1>
      
      <motion.p className="text-lg mb-6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        I am a passionate Full-Stack and Mobile Developer with expertise in Android, Cross-Platform, and Web Development.
        I create high-quality, scalable applications ranging from static sites to e-commerce platforms.
      </motion.p>

      <h2 className="text-2xl font-semibold mt-8">Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {skills.map((skill, index) => (
          <Card key={index} className="p-4 shadow-md">
            <CardContent>
              <h3 className="text-lg font-bold">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-md h-2 mt-2">
                <div className="bg-blue-500 h-2 rounded-md" style={{ width: skill.level }}></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-8">Experience & Projects</h2>
      <Timeline>
        {experience.map((exp, index) => (
          <TimelineItem key={index}>
            <h3 className="text-lg font-semibold">{exp.title} ({exp.year})</h3>
            <p className="text-gray-600">{exp.description}</p>
          </TimelineItem>
        ))}
      </Timeline>
      
      <div className="flex space-x-4 mt-8">
        <a href="/resume.pdf" className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
          <FaDownload className="mr-2" /> Download Resume
        </a>
        <a href="mailto:karthikeyanks463@gmail.com" className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
          <FaEnvelope className="mr-2" /> Contact Me
        </a>
      </div>
    </section>
  );
}
