import React from 'react'
import { Box, Grid, Card, Typography } from '@mui/material';

const WebServiceCard = ({services}) => {

  return (
    <>
          <Grid container spacing={4} 
            sx={{ width: "85%" ,display:"flex", alignItems:"center" ,justifyContent:"center"}}>
                {services.map((service, index) => (
                    <Grid item xs={12} md={3} key={index} sx={{
                        display:"flex", alignItems:"center" ,justifyContent:"center"
                        
                    }}>
                        <Box sx={{
                            mt: 5,
                            width: "300px",
                            height: "400px",
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: '10px',
                        }}>
                            <Card sx={{
                                backgroundImage: `url(${service.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: "100%",
                                width: "100%",
                                transition: "transform 0.3s ease",
                                transform: "scale(1.3)",
                                "&:hover": {
                                    transform: "scale(1)",
                                }
                            }}></Card>
                            <Box sx={{
                                position: "absolute",
                                bottom: "0",
                                left: "0",
                                width: "100%",
                                height: {xs: "100%", sm: "20%", md: "20%"},
                                background: {xs: "linear-gradient(to bottom, rgba(128, 0, 128, 0.7), rgba(255, 165, 0, 0.7))", sm:"rgba(173, 63, 142, 0.3)" ,md: "rgba(173, 63, 142, 0.3)"},
                                transition: "height 0.4s ease, background-color 0.4s ease",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-end",
                                alignItems: "center",
                                p: 2,
                                "&:hover": {xs: "none", sm: {
                                    height: "100%",
                                    background: "linear-gradient(to bottom, rgba(128, 0, 128, 0.7), rgba(255, 165, 0, 0.7))",
                                }, md : {
                                    height: "100%",
                                    background: "linear-gradient(to bottom, rgba(128, 0, 128, 0.7), rgba(255, 165, 0, 0.7))",
                                } } 
                            }}>
                                <Typography variant="h5" component="p"
                                    sx={{
                                        py: 3,
                                        color: "white",
                                        fontSize: "15px",
                                        fontFamily: "Roboto, sans-serif",
                                        textAlign: "center",
                                        opacity: {xs: 1, sm: 0, md: 0},
                                        transition: {xs: "none", sm: "opacity 0.4s ease", md: "opacity 0.4s ease"},
                                        "&:hover":  {xs: "none", sm: {opacity: 1}, md: {opacity: 1}}
                                    }}>
                                    <span style={{
                                        color: "white",
                                        fontSize: "20px",
                                        fontFamily: "Roboto, sans-serif",
                                        fontWeight: "bold",
                                    }}>{service.title}</span><br/><br/>
                                    {service.description}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
    </>
  )
}

export default WebServiceCard