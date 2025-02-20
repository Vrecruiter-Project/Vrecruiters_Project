import React from 'react';
import { Card, CardContent, Typography, Button, Grid, CardMedia } from '@mui/material';
import DigitalMarketing from '../../../../../assests/images/FreeConsultation/DigitalMarketing.png'
import Graphic from '../../../../../assests/images/FreeConsultation/Graphic.png'
import uIUx from '../../../../../assests/images/FreeConsultation/uIUx.png'
import VideoEditing from '../../../../../assests/images/FreeConsultation/VideoEditing.png'
import WebDesigning from '../../../../../assests/images/FreeConsultation/WebDesigning.png'
import WebDevelopment from '../../../../../assests/images/FreeConsultation/WebDevelopment.png'
import { useNavigate } from 'react-router-dom';




const courses = [
    {
        title: 'Digital Marketing',
        image: DigitalMarketing,
        description: 'Digital marketing targets consumers over the internet by promoting products, services, and brands over the internet.',
        path: '/digitalmarketing',
    },
    {
        title: 'Graphic Design',
        image: Graphic,
        description: 'Graphic design uses pictures, words, and colors to present messages and develop company images or logos.',
        path: '/designers'
    },
    {
        title: 'Web Development',
        image: WebDevelopment,
        description: 'Web development is the process of building and maintaining websites, focusing on visuals, functionality, and databases.',
        path: '/developers'
    },
    {
        title: 'Web Designing',
        image: WebDesigning,
        description: 'Web designing deals with the layout and general graphic interface used in websites and applications.',
        path: '/designers'
    },
    {
        title: 'UI/UX',
        image: uIUx,
        description: 'UI/UX design specialization deals with the effective and efficient presentation of digital products to the targeted clients.',
        path: '/designers'
    },
    {
        title: 'Video Editing',
        image: VideoEditing,
        description: 'Video editing refers to the process of editing and rearrangement of shooting and recorded materials followed by improving their look and audio.',
        path: 'digitalmarketing'
    },
];

const CareerCard = () => {

    const navigate = useNavigate();


    return (
        <div style={{ margin: '100px 0' }}>
            <Typography variant="h3" align="center" gutterBottom style={{ fontWeight: 'bold', marginBottom: '50px' }}>
                OUR COURSES
            </Typography>
            <Grid container spacing={8} justifyContent="center">
                {courses.map((course, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card style={{ borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' }}>
                            <CardMedia
                                component="img"
                                width="100px"
                                height="auto"
                                image={course.image}
                                alt={course.title}
                                style={{ justifyContent: 'center', height: '200px', width: '100%' }}
                            />
                            <CardContent>
                                <Typography variant="h6" style={{ fontWeight: 'bold' }} gutterBottom>
                                    {course.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {course.description}
                                </Typography>
                            </CardContent>
                            <Button
                                variant="contained"
                                color='error'
                                sx={{
                                    margin: '20px',
                                    borderRadius: '20px',
                                    background:
                                        "linear-gradient(45deg, rgb(212, 161, 255) 10%, rgb(255, 158, 83) 90%)",
                                     "&:hover": {
                                      background:
                                     "linear-gradient(45deg, rgb(255, 158, 83) 10%, rgb(212, 161, 255) 90%)",
                                    },    
                                    color: '#fff',
                                    fontWeight: 'bold',
                                }}
                                onClick={() => navigate(course.path)}
                            >
                             Read More
                            </Button>
                            
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default CareerCard;
