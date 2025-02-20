import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {Typography, CardContent, Grid } from '@mui/material';
import jobServiceImage from "../../../../../assests/images/jobService.png";

export default function JobPlacementServices() {
  const theme = useTheme();
  return (
    <Grid container spacing={3} sx={{mt: {xs: 2, sm: 6, md: 6}}}>
          <Grid item xs={12}>
            <CardContent sx={{ p: 3 }}>
              <Grid container >
                <Grid item
                  sm={12}
                  md={5}
                  sx={{
                    padding: "15px",
                  }}>
                 <img
                src={jobServiceImage}
                className="w-full h-full block max-md:hidden max-sm:hidden animate-ping-slow"
                alt="job Service"
              />
                </Grid>
                <Grid item
                  sm={12}
                  md={7}
                  sx={{
                    padding: "15px",
                  }}
                > 
                <Typography
                component="h2"
                variant="h5"
                sx={{
                  textAlign: {xs: "center", sm : "center", md:"left"},
                  color: theme.palette.text.primary,
                  mb: 3,
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    width: '80px',
                    height: '4px',
                    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                    position: 'absolute',
                    bottom: '-10px',
                    left: {xs: "30%", sm: "45%", md: 0},
                    borderRadius: '2px',
                  },
                }}
              >
                Job Placement Services For IT and Non-IT
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 3,
                  fontSize: '14px',
                  lineHeight: '1.75rem',
                  textAlign: {xs: "center", sm : "center", md:"left"},
                }}
              >
                At VR Recruiter, we specialize in connecting talented professionals with top employers across various industries. Our job placement services are designed to match candidates with roles that fit their skills, experience, and career goals.
              </Typography>
              <Typography
                component="h2"
                variant="h5"
                sx={{
                  textAlign: {xs: "center", sm : "center", md:"left"},
                  color: theme.palette.text.primary,
                  mb: 3,
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    width: '80px',
                    height: '4px',
                    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                    position: 'absolute',
                    bottom: '-10px',
                    left: {xs: "30%", sm: "45%", md: 0},
                    borderRadius: '2px',
                  },
                }}
              >
                Advantage of Our Services
              </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.text.secondary,
                      mb: 3,
                      fontSize: '14px',
                      lineHeight: '1.75rem',
                      textAlign: {xs: "center", sm : "center", md:"left"},
                    }}
                  >
                    <ul>
                      <li><strong>Expert Recruitment Team:</strong> Our seasoned recruiters have deep industry knowledge and a vast network of connections.</li>
                      <li><strong>Personalized Job Matching:</strong> We deliver tailored solutions that meet your specific requirements.</li>
                      <li><strong>Confidential and Professional:</strong> We maintain high levels of confidentiality and professionalism.</li>
                    </ul>
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Grid>
        </Grid>
  );
}
