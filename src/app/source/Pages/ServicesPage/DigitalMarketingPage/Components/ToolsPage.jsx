import { Box, Container, Grid, Typography, CardMedia } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import amazonLogo from "../../../../../assests/images/SocialLogoTools/amazon.png";
import FbLogo from "../../../../../assests/images/SocialLogoTools/facebook.png";
import freepikLogo from "../../../../../assests/images/SocialLogoTools/freepik.png";
import gAdsLogo from "../../../../../assests/images/SocialLogoTools/googleAds.png";
import gAtsLogo from "../../../../../assests/images/SocialLogoTools/googleAts.png";
import gKeyLogo from "../../../../../assests/images/SocialLogoTools/googleKey.png";
import youtubeLogo from "../../../../../assests/images/SocialLogoTools/youtube.png";
import wordpressLogo from "../../../../../assests/images/SocialLogoTools/wordpressLogo.png";
import adobeLogo from "../../../../../assests/images/SocialLogoTools/adobePhotoshop.png";
import ldinLogo from "../../../../../assests/images/SocialLogoTools/linkedinAds.png";
import twAdsLogo from "../../../../../assests/images/SocialLogoTools/twitterAds.png";
import shopyLogo from "../../../../../assests/images/SocialLogoTools/shopifyLogo.png";
import wooComLogo from "../../../../../assests/images/SocialLogoTools/wooComLogo.png";

import React from 'react';

const ToolsPage = () => {
    const theme = useTheme();

    const logoTools = [
        { imgIcon: amazonLogo },
        { imgIcon: FbLogo },
        { imgIcon: freepikLogo },
        { imgIcon: gAdsLogo },
        { imgIcon: gAtsLogo },
        { imgIcon: gKeyLogo },
        { imgIcon: youtubeLogo },
        { imgIcon: wordpressLogo },
        { imgIcon: adobeLogo },
        { imgIcon: twAdsLogo },
        { imgIcon: shopyLogo },
        { imgIcon: ldinLogo },
        { imgIcon: wooComLogo },
    ];

    return (
        <>
            <Box
                sx={{
                    flexGrow: 1,
                    mt: { xs: 8, sm: 10 },
                    p: 4,
                    background: 'transparent',
                    borderRadius: '12px',
                    textAlign: 'center',
                }}
            >
                <Container>
                    <Typography
                        component="h2"
                        variant="h4"
                        sx={{
                            color: theme.palette.text.primary,
                            fontWeight: "700",
                            letterSpacing: "0.05em",
                            textTransform: "uppercase",
                            position: "relative",
                            mb: 4,
                            '&::after': {
                                content: '""',
                                width: "60px",
                                height: "4px",
                                background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                                position: "absolute",
                                bottom: "-10px",
                                left: "50%",
                                borderRadius: "2px",
                                transform: "translateX(-50%)",
                            },
                        }}
                    >
                        Digital Marketing Platforms and Tools
                    </Typography>
                    <Grid
                        container
                        spacing={4}
                        justifyContent="center"
                    >
                        {logoTools.map((tools, index) => (
                            <Grid
                                item
                                key={index}
                                xs={12} 
                                sm={6}
                                md={2}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    '&:hover img': {
                                        transform: 'scale(1.2)',
                                    }
                                }}
                            >
                                <Box
                                    sx={{
                                        transition: 'transform 0.3s ease-in-out',
                                        cursor: 'pointer',
                                        borderRadius: '8px',
                                        '& img': {
                                            width: { xs: 120, sm: 150, md: 160 }, 
                                            height: { xs: 100, sm: 150, md: 160 }, 
                                            objectFit: 'contain',
                                            transition: 'transform 0.3s ease-in-out',
                                        }
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={tools.imgIcon}
                                        sx={{
                                            background: "white",
                                            borderRadius: '8px',
                                        }}
                                        alt="Tool Logo"
                                    />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default ToolsPage;
