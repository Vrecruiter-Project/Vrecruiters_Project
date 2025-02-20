import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Typography, CardContent, Grid } from '@mui/material';
import interviewPServiceImage from "../../../../../assests/images/interviewPS.png";

export default function InterviewPreparationService() {
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
                                src={interviewPServiceImage}
                                className="w-full h-[94%] block max-md:hidden max-sm:hidden animate-ping-slow"
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
                                    
                                }}
                            >
                                Interview Preparation Services
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
                            >Nail your next job interview with confidence through VR recruiter expert interview preparation services. Our tailored approach is designed to equip you with the skills, knowledge, and confidence needed to succeed in any interview, whether you're entering a new field, advancing your career, or returning to the workforce.
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
                            {/* <Typography
                                variant="body1"
                                sx={{
                                    color: theme.palette.text.secondary,
                                    mb: 3,
                                    fontSize: '14px',
                                    lineHeight: '1.75rem',
                                    textAlign: {xs: "center", sm : "center", md:"left"},
                                }}
                            > */}
                                <ul  style={{
                                    color: theme.palette.text.secondary,
                                    mb: 3,
                                    fontSize: '14px',
                                    lineHeight: '1.75rem',
                                    textAlign: {xs: "center", sm : "center", md:"left"},
                                }}>
                                    <li><strong>Personalized Coaching :</strong>  We provide one-on-one coaching sessions to address your unique strengths and areas for improvement, ensuring you're fully prepared for any interview scenario.</li>

                                    <li><strong>Industry-Specific Guidance :</strong>  Our experts offer targeted advice and mock interviews tailored to your specific industry, helping you understand what employers are looking for.</li>

                                    <li><strong>Resume and Cover Letter Review :</strong> Ensure your application materials align with your interview strategy for a cohesive and compelling presentation.</li>

                                    <li><strong>Interview Question Preparation :</strong> Get ready for common and industry-specific questions, along with strategies to handle unexpected queries.</li>

                                    <li><strong>Confidence Building :</strong> Through constructive feedback and practice, we'll help you build the confidence to present yourself as the ideal candidate.</li>
                                </ul>
                            {/* </Typography> */}
                        </Grid>
                    </Grid>
                </CardContent>
            </Grid>
        </Grid>
    );
}
