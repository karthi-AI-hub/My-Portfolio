import React from "react";
import { Box, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

// Framer Motion Animations
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const AboutSection = () => {
  return (
    <Box id="about" sx={{ py: 12, px: 3, bgcolor: "#f9fafb", textAlign: "center" }}>
      {/* Section Title */}
      <Typography
        component={motion.h2}
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variant="h3"
        fontWeight="bold"
        color="primary"
        mb={4}
      >
        About Me
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={8}>
          {/* Card Container */}
          <Card
            component={motion.div}
            variants={scaleUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            sx={{
              p: 5,
              borderRadius: 3,
              boxShadow: 5,
              backgroundColor: "white",
              textAlign: "left",
            }}
          >
            <CardContent>
              {/* Introduction */}
              <Typography variant="h5" fontWeight="bold" color="secondary" mb={2}>
                Full-Stack & Mobile Developer | Passion for Innovation & Problem-Solving
              </Typography>

              {/* Tech Journey */}
              <Typography variant="body1" color="textSecondary" mb={3} lineHeight={1.8}>
                My journey began with <strong>Python</strong>, diving into the fascinating world of 
                <strong> Machine Learning & AI</strong>. My curiosity drove me to explore <strong>Java, C++,</strong> and more.
              </Typography>

              <Typography variant="body1" color="textSecondary" mb={3} lineHeight={1.8}>
                Entering <strong>Web Development</strong>, I mastered <strong>HTML, CSS, JavaScript, and PHP</strong>. This evolved into 
                <strong> Full-Stack Development</strong>, where I built scalable applications using <strong>React.js, Node.js, and Firebase</strong>.
              </Typography>

              {/* Mobile Development */}
              <Typography variant="body1" color="textSecondary" mb={3} lineHeight={1.8}>
                My venture into <strong style={{ color: "#1976d2" }}>Mobile Development</strong> led me to successfully 
                <strong style={{ color: "#1976d2" }}> publish two apps on the Play Store</strong>. While monetizing through 
                <strong> AdMob</strong>, I gained experience handling <strong>Play Console & AdMob policies</strong>, refining 
                my expertise in backend development.
              </Typography>

              {/* Final Specialization */}
              <Typography variant="body1" fontWeight="bold" color="primary" mt={2}>
                Today, I specialize in <strong>React.js, Node.js, Firebase, and Mobile App Development</strong>, 
                building high-performance applications that enhance digital experiences.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Call-to-Action Button */}
      <Button
        component={motion.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        variant="contained"
        color="secondary"
        sx={{ mt: 5, px: 4, py: 1.5, fontSize: "1rem", borderRadius: 2 }}
        onClick={() => window.open("https://google.com", "_blank")}
      >
        Learn More
      </Button>
    </Box>
  );
};

export default AboutSection;
