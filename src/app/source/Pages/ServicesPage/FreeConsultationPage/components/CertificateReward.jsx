import React from "react";
import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import backgroundImage from '../../../../../assests/images/FreeConsultation/CareerSection/certificateCardBackground.png'
import DummayCertificate from '../../../../../assests/images/FreeConsultation/CareerSection/DummayCertificate.png'

const CertificateReward = () => {
  const features = [
    "Daily Classes",
    "Placement Partners",
    "Latest Tools",
    "Trainer with 2+ Years of Experience",
    "100% Job Oriented",
    "Internship Program",
    "Practice Labs",
  ];

  return (
    <Box sx={{ px: 5, py: 5, backgroundImage: `url(${backgroundImage})`, margin: '80px 0' }}>
      {/* Main Heading */}
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", textAlign: "center", mb: 2 }}
      >
        What you will Get in V Recruiters
      </Typography>
      <Typography
        variant="body1"
        sx={{ textAlign: "center", maxWidth: "800px", mx: "auto", mb: 5 }}
      >
        We have an expert team of trainers that have coached 500+ students. Our
        course comes loaded with many benefits and features that are hard to
        find these days. Here are a few key features of our courses.
      </Typography>

      <Grid container spacing={4} alignItems="center">
        {/* Features List */}
        <Grid item xs={12} md={6}>
          <Typography>
            {features.map((feature, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: "#4caf50", fontSize: '3rem' }} />
                </ListItemIcon>
                <ListItemText primary={feature} sx={{fontSize: '3rem'}} />
              </ListItem>
            ))}
          </Typography>
        </Grid>

        {/* Certificate Image */}
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <Grid 
            
            sx={{
              display: "inline-block",
              p: 2,
              maxWidth: "100%",
              "& img": { maxWidth: "100%", height: "auto" },
            }}
          >
            <img
              src={DummayCertificate} // Replace this URL with the certificate image URL
              alt="Certificate"
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CertificateReward;

