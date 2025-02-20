import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.primary,
    backgroundColor: '#fff',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0px 6px 25px rgba(0, 0, 0, 0.15)',
    },
}));

function GlobalMultiCards({ cardData, MainTitle }) {
    const theme = useTheme();

    return (
        <Box
            sx={{
                flexGrow: 1,
                my: { xs: 8, sm: 10 },
                p: 4,
                background: 'linear-gradient(0deg, #FF9E53 10%, #D4A1FF 90%)',
                borderRadius: '12px',
            }}
        >
            <Container sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                pb: { xs: 3, sm: 5 },
            }}>
                <Typography
                    component="h2"
                    variant="h4"
                    sx={{
                        color: "black",
                        fontWeight: "700",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        position: "relative",
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
                    {MainTitle}
                </Typography>
            </Container>
            <Grid container spacing={3} sx={{ px: { sm: 14 } }}>
                {cardData.map((card, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Item>
                            <Typography
                                component="h2"
                                variant="h5"
                                sx={{
                                    color: "black",
                                    mb: 3,
                                    fontWeight: "700",
                                    letterSpacing: "0.05em",
                                    textTransform: "uppercase",
                                    position: "relative",
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
                                        display: { xs: "none", sm: "none", md: "block", lg: "block" },
                                    },
                                }}
                            >
                                {card.title}
                            </Typography>
                            <Typography variant="body1" color="black">{card.description}</Typography>
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default GlobalMultiCards