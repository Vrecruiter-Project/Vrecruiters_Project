import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Typography, CardContent, Grid } from '@mui/material';
import CareerCImage from "../../../../../assests/images/careerCImg.jpg";

export default function CareerCouncellingService() {
    const theme = useTheme();
    return (
        <Grid container spacing={3} sx={{ mt: { xs: 4, sm: 8, md: 8 } }}>
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
                                src={CareerCImage}
                                className="w-full h-[94%] block max-md:hidden max-sm:hidden animate-ping-slow rounded-md"
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
                                    textAlign: { xs: "center", sm: "center", md: "left" },
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
                                        left: { xs: "30%", sm: "45%", md: 0 },
                                        borderRadius: '2px',
                                    },
                                }}
                            >
                                Career Counseling Services For IT and Non-IT Jobs
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: theme.palette.text.secondary,
                                    mb: 3,
                                    fontSize: '14px',
                                    lineHeight: '1.75rem',
                                    textAlign: { xs: "center", sm: "center", md: "left" },
                                }}
                            >Unlock your career potential with our specialized Career Counseling Services for IT and Non-IT professionals. Whether you’re an aspiring tech enthusiast, a seasoned IT professional, or someone seeking opportunities in non-technical fields, our expert counselors provide personalized guidance to help you achieve your career goals.
                            </Typography>
                            <Typography
                                component="h2"
                                variant="h5"
                                sx={{
                                    textAlign: { xs: "center", sm: "center", md: "left" },
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
                                        left: { xs: "30%", sm: "45%", md: 0 },
                                        borderRadius: '2px',
                                    },
                                }}
                            >
                                Our Career Counseling Services for IT and Non-IT Jobs Include
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: theme.palette.text.secondary,
                                    mb: 3,
                                    fontSize: '14px',
                                    lineHeight: '1.75rem',
                                    textAlign: { xs: "center", sm: "center", md: "left" },
                                }}
                            >
                                <ul>
                                    <li><strong>IT Career Guidance :</strong> Explore roles in software development, data science, cybersecurity, cloud computing, and more. Get insights into the latest industry trends and the skills you need to succeed.</li>

                                    <li><strong>Non-IT Career Guidance :</strong>Discover diverse career paths in fields like marketing, finance, healthcare, education, and more. Our counselors help you identify roles that match your skills and interests.</li>

                                    <li><strong>Skill Assessment and Training : </strong>Understand your strengths and gaps with detailed assessments and get recommendations for upskilling or reskilling to stay competitive in your chosen field.</li>

                                    <li><strong>Resume LinkedIn Optimization :</strong> Craft a standout resume and LinkedIn profile tailored to your target industry, whether IT or non-IT, to attract potential employers.</li>

                                    <li><strong>Job Search Strategies and Interview Coaching :</strong> Learn effective job search techniques and receive personalized interview coaching to boost your confidence and chances of success.</li>
                                </ul>
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Grid>
        </Grid>
    );
}
