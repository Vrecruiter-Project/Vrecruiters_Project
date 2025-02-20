import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import WebD1 from '../../../../../../assests/images/WebDesignImages/webDCard.png';
import WebD2 from '../../../../../../assests/images/WebDesignImages/webDCard2.png';
import WebD3 from '../../../../../../assests/images/WebDesignImages/webDCard3.png';
import WebD4 from '../../../../../../assests/images/WebDesignImages/webDCard4.png';
import WebServiceCard from '../../../../../../components/pageComponent/WebServiceCard';

const services = [               
    {
        title: 'Professional Web Design',
        description: `Partnering with us means unlocking unrivalled industry expertise. Our professional designs are created to drive authority and credibility for your business.`,
        image: WebD1,
    },
    {
        title: 'Custom Web Design',
        description: `Each of our website designs are tailored to create a 100% unique experience. This way, we deliver a site that connects with your audience.`,
        image: WebD2,
    },
    {
        title: 'Responsive Web Design',
        description: `We create seamless user experiences for all. Whether screen size alterations or device optimizations, our responsive designs exceed expectations for every user.`,
        image: WebD3,
    },
    {
        title: 'UI/UX Web Design',
        description: `With trusted methods and innovative approaches, our team of award-winning designers provide engaging visual experiences and user journeys.`,
        image: WebD4,
    },
];

const DesignServices = () => {
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
                        Explore Our Web Desigining Services
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
                        Our Web Designing Services are dedicated to creating visually stunning, user-friendly, and high-performing websites that perfectly reflect your brand’s identity. A well-designed website is more than just aesthetics; it’s about creating a seamless user experience that keeps visitors engaged, encourages interaction, and drives conversions. Whether you’re a startup, small business, or large enterprise, our tailored web design solutions will help you stand out in the crowded digital landscape.
                    </Typography>
                </Grid>
            </Grid>
            <WebServiceCard services={services} />
        </Box>
    );
};

export default DesignServices;
