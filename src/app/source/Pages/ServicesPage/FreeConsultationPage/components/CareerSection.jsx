import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

// Import your images (replace with actual imports)
import Animation from '../../../../../assests/images/FreeConsultation/CareerSection/3DAnimation.png';
import Graphic from '../../../../../assests/images/FreeConsultation/CareerSection/GraphicDesign.png';
import Development from '../../../../../assests/images/FreeConsultation/CareerSection/Development.png';
import WebDesigning from '../../../../../assests/images/FreeConsultation/CareerSection/WebDesigning.png';
import Short from '../../../../../assests/images/FreeConsultation/CareerSection/ShortTermCourses.png';
import More from '../../../../../assests/images/FreeConsultation/CareerSection/MoreCareerCourses.png';

// Define an array for course categories with image paths
const courses = [
  { name: '3D Animation', icon: Animation },
  { name: 'Graphic Design', icon: Graphic },
  { name: 'Development', icon: Development },
  { name: 'Web Designing', icon: WebDesigning },
  { name: 'Short Term Courses', icon: Short },
  { name: 'More Career Courses', icon: More },
];

const CareerSection = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 10,
        px: { xs: 2, md: 8 },
        // backgroundColor: '#f8f8f8',
      }}
    >
      {/* Heading Section */}
      <Typography
        variant='h1'
      
        sx={{
          fontWeight: 'bold',
          mb: 8,
          fontSize: '32px',
        }}
      >
        Transform Your Passion{' '}
        <Box component='span' sx={{ color: 'blue', fontWeight: 'bold' }}>
          into a{' '}
        </Box>
        <Box component='span' sx={{ color: 'orange', fontWeight: 'bold' }}>
          Creative{' '}
        </Box>
        <Box component='span' sx={{ color: 'pink', fontWeight: 'bold' }}>
          Career!
        </Box>
      </Typography>

      {/* Course Cards */}
      <Box sx={{ px: { xs: 2, md: 4 } }}>
        {' '}
        {/* Added padding to the Box */}
        <Grid container spacing={10} justifyContent='center'>
          {courses.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{     ":hover": {
                transform: "translateY(-10px)",
                transition: "0.5s ease-in-out"
        },}}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderRadius: 3,
                  height: '100%',
                  gap: '15px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                }}
              >
                {/* Image Section */}
                <Box
                  component='img'
                  src={course.icon}
                  alt={course.name}
                  sx={{
                    width: '80px',
                    height: '70px',
                      objectFit: 'contain',
                  }}
                />

                {/* Course Name */}
                <Typography
                  variant='h6'
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '18px',
                    textAlign: 'left',
                  }} 
                >
                  {course.name}
                </Typography>
              </Paper>
            </Grid>  
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CareerSection;
