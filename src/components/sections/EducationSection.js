import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const educationData = [
  { year: "2022 - 2026", title: "B.Tech Artificial Intelligence", location: "Excel Engineering College (AUTONOMOUS), Namakkal" },
  { year: "2022", title: "HSC - Tamil Nadu State Board", location: "Attur, Salem (Computer Science, Python)" },
  { year: "2020", title: "SSLC - Tamil Nadu State Board", location: "Attur, Salem" },
];

const EducationTimeline = () => {
  return (
    <Box id="education" sx={{ py: 0, px: { xs: 3, md: 8 }, textAlign: "center" }}>
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
        Education
      </Typography>

      {/* Timeline Section */}
      <Timeline position="right" sx={{ maxWidth: "600px", mx: "auto" }}>
        {educationData.map((edu, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary" sx={{ width: 16, height: 16 }} />
              {index !== educationData.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent sx={{ textAlign: "left", pl: 2 }}>
              <Typography variant="h6" fontWeight="bold" color="secondary">
                {edu.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {edu.location} ({edu.year})
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default EducationTimeline;
