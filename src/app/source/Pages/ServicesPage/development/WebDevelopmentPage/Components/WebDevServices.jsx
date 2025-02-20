import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import frontend from '../../../../../../assests/images/frontendCard.jpg';
import backend from '../../../../../../assests/images/backendCard.jpg';
import ecom from '../../../../../../assests/images/ecomCard.jpg';
import Cms from '../../../../../../assests/images/cmsCard.png';
import WebServiceCard from '../../../../../../components/pageComponent/WebServiceCard';

const services = [
    {
        title: 'Front-End Development',
        description: `Focuses on building the user interface (UI) with HTML, CSS, and JavaScript.
                      Ensures a responsive and interactive experience across all devices and browsers.`,
        image: frontend,
    },
    {
        title: 'Backend Development',
        description: `Development of server-side logic, databases, and APIs that power the functionality of the website or web application.
                      Technologies often used include Node.js, Python, PHP, Ruby on Rails, and more.`,
        image: backend,
    },
    {
        title: 'E-Commerce Development',
        description: `Development of online stores with custom shopping carts, payment gateways, inventory management, and order processing systems.
                      Platforms include Shopify, WooCommerce, Magento, and custom-built e-commerce solutions.`,
        image: ecom,
    },
    {
        title: 'CMS Development',
        description: `Development on popular Content Management Systems like WordPress, Joomla, and Drupal.
                      Allows easy content management, publishing, and updates without deep technical skills.`,
        image: Cms,
    },
];

const WebDevServices = () => {
    const theme = useTheme();
    return (
        <Box sx={{
            my: { xs: 8, sm: 10, md: 15 },
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            p: 2,
            bgcolor: theme.palette.background.default,
        }}>
            <Grid container spacing={4} alignItems="center" justifyContent="center">
                <Grid item xs={12} md={8}>
                    <Typography variant='h1' component="h3" sx={{
                        fontWeight: 'bold',
                        fontFamily: "Roboto, sans-serif",
                        color: theme.palette.primary.main,
                        fontSize: { xs: "22px", sm: "30px", md: "40px" },
                        background:
                            "linear-gradient(to right, #7A297B 0%, #602C85 30%, #4A2A95 60%, #341C98 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        textAlign: "center",
                        position: "relative",
                        mb: 2,
                        '&::after': {
                            content: '""',
                            width: "80px",
                            height: "4px",
                            background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                            position: "absolute",
                            bottom: "0",
                            left: "50%",
                            borderRadius: "2px",
                            transform: "translateX(-50%)",
                            transition: "width 0.3s ease",
                        },
                        '&:hover::after': {
                            width: "150px",
                        },
                    }}>
                        Explore Our Web Development Services
                    </Typography>
                    <Typography variant='h2' component="p" sx={{
                        my: 4,
                        fontSize: { xs: "14px", sm: "15px", md: "15px" },
                        px: 2,
                        fontFamily: "Roboto, sans-serif",
                        color: theme.palette.text.primary,
                        textAlign: "center",
                        lineHeight: 1.6,
                    }}>
                        We offer a wide range of web development services to help you achieve your online goals. Our Web Development Services offer comprehensive solutions for building, enhancing, and maintaining dynamic websites and web applications tailored to your business needs. Whether you’re looking to establish a new online presence, revamp an existing site, or develop a complex web application, our expert team delivers robust, scalable, and secure solutions that drive results.
                    </Typography>
                </Grid>
            </Grid>
            <WebServiceCard services={services} />
        </Box>
    );
};

export default WebDevServices;
