import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Tabs,
  Tab,
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import { projects, certificates, techStacks } from "../../data/projectData";
import Tilt from "react-parallax-tilt";
import TechSection from "./TechSection";
const tabStyles = {
  color: "rgba(0, 0, 0, 0.7)",
  fontWeight: "bold",
  fontSize: "1rem",
  "&.Mui-selected": {
    color: "#00bcd4",
  },
  textTransform: "none",
};

const ProjectSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ width: "100%", textAlign: "center", py: 4 }}>
      {/* Tabs */}
      <Tabs
        value={activeTab}
        onChange={handleChange}
        aria-label="Project Sections Tabs"
        centered
        sx={{
          "& .MuiTabs-indicator": { backgroundColor: "#00bcd4" },
        }}
      >
        <Tab label="Projects" sx={tabStyles} />
        <Tab label="Certifications" sx={tabStyles} />
        <Tab label="Tech Stacks" sx={tabStyles} />
      </Tabs>

      <Divider sx={{ my: 2, bgcolor: "rgba(255, 255, 255, 0.1)" }} />

      {activeTab === 0 && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Grid container spacing={3} justifyContent="center">
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.02} transitionSpeed={500}>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Card
                      sx={{
                        background: "rgba(0, 0, 0, 0.7)",
                        borderRadius: 3,
                        overflow: "hidden",
                        boxShadow: "0px 5px 15px rgba(0, 255, 255, 0.3)",
                        minHeight: "auto",
                        transition: "0.3s",
                        "&:hover": { transform: "translateY(-5px)" },
                      }}
                    >
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        width="100%"
                        loading="lazy"
                        style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12, objectFit: "cover" }}
                      />
                      <CardContent>
                        <Typography variant="h6" fontWeight="bold" color="#00bcd4" gutterBottom>
                          {project.title}
                        </Typography>
                        <Typography variant="body2" color="rgba(255, 255, 255, 0.8)" gutterBottom>
                          {project.description}
                        </Typography>
                        <Button
                          variant="contained"
                          href={project.liveLink}
                          target="_blank"
                          aria-label={`Visit ${project.title}`}
                          sx={{
                            mt: 1,
                            background: "#00bcd4",
                            "&:hover": { background: "#008c9e" },
                          }}
                        >
                          Visit
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Tilt>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      )}

      {/* Certifications Section */}
      {activeTab === 1 && (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <Grid container spacing={3} justifyContent="center">
            {certificates.slice(0, 6).map((cert, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.img
                  src={cert.image}
                  alt={cert.title}
                  width="100%"
                  loading="lazy"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  style={{ objectFit: "cover", borderRadius: 8 }}
                />
              </Grid>
            ))}
          </Grid>
          <Button
            variant="contained"
            color="secondary"
            href="/certificates"
            sx={{ mt: 2, background: "#00bcd4", "&:hover": { background: "#008c9e" } }}
          >
            View All Certificates
          </Button>
        </motion.div>
      )}

      {/* Tech Stack Section */}
      {activeTab === 2 && (
        <TechSection/>
      )}
    </Box>
  );
};

export default ProjectSection;
