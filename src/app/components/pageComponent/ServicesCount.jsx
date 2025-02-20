import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import customerServices from "../../assests/images/customerService.png";
import interviewScheduled from "../../assests/images/interviewScheduled.png";
import recruitmentProcessed from "../../assests/images/recruitmentProcessed.png";

const ServicesCount = ({ theme, style }) => {
  return (
    <>
      <Box 
        sx={(theme) => ({
          width: "100%",
          my: { xs: 8, sm: 20 },
          background:
            "linear-gradient(0deg, rgba(240,239,243,1) 100%, rgba(252,237,226,1) 100%)",
          ...theme.applyStyles("dark", {
            backgroundImage:
              "linear-gradient(0deg, rgba(63,59,56,1) 16%, rgba(168,126,68,1) 100%)",
          }),
          ...style,
        })}
      >
        <Grid container spacing={2} sx={{ py: { xs: 8, sm: 10 } }}>
          <Grid item xs={12} md={4}
sx={{
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                width: "20px",
                height: "20px",
                background: "linear-gradient(45deg, #D4A1FF 10%, #FF9E53 90%)",
                borderRadius: "50%",
                top: "-200px",
                left: "150%",
                transform: "translateX(-50%)",
                display: {xs: 'none', sm: 'none', md:'none', lg: 'block', xl: 'block'}
              },
              "&::after": {
                content: '""',
                position: "absolute",
                width: "20px",
                height: "20px",
                background: "linear-gradient(45deg, #D4A1FF 10%, #FF9E53 90%)",
                borderRadius: "50%",
                bottom: "-200px",
                left: "150%",
                display: {xs: 'none', sm: 'none', md:'none', lg: 'block', xl: 'block'},
                transform: "translateX(-50%)",
              },
              width: "100%",
              my: {xs: 4}
            }}
          >
            <img src={customerServices} alt="customer-services" className='mx-auto' />
            <Typography variant="h5" className="text-center pt-2">500+</Typography>
            <Typography variant="h5" className="text-center pt-2">SATISFIED CUSTOMER</Typography>
          </Grid>

          <Grid item xs={12} md={4}
            sx={{
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                width: '4px', 
                height: '50%', 
                background: "linear-gradient(45deg, #D4A1FF 10%, #FF9E53 90%)",
                top: "-180px",
                left: '50%',
                transform: 'translateX(-50%)',
                display: {xs: 'none', sm: 'none', md:'none', lg: 'block', xl: 'block'}
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '4px', 
                height: '50%', 
                background: "linear-gradient(45deg, #D4A1FF 10%, #FF9E53 90%)",
                bottom: "-180px",
                left: '50%',
                transform: 'translateX(-50%)',
                display: {xs: 'none', sm: 'none', md:'none', lg: 'block', xl: 'block'}
              },
              my: {xs: 4}
            }}
          >  
            <img src={interviewScheduled} alt="interview-scheduled" className='mx-auto' />
            <Typography variant="h5" className="text-center pt-2">1000+</Typography>
            <Typography variant="h5" className="text-center pt-2">INTERVIEW SCHEDULED</Typography>
          </Grid>

          <Grid item xs={12} md={4} 
          sx={{
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                width: "20px",
                height: "20px",
                background: "linear-gradient(45deg, #D4A1FF 10%, #FF9E53 90%)",
                borderRadius: "50%",
                top: "-54px",
                right: "145.8%",
                transform: "translateX(-50%)",
                display: {xs: 'none', sm: 'none', md:'none', lg: 'block', xl: 'block'}
              },
              "&::after": {
                content: '""',
                position: "absolute",
                width: "20px",
                height: "20px",
                background: "linear-gradient(45deg, #D4A1FF 10%, #FF9E53 90%)",
                borderRadius: "50%",
                bottom: "-54px",
                right: "145.8%",
                transform: "translateX(-50%)",
                display: {xs: 'none', sm: 'none', md:'none', lg: 'block', xl: 'block'}
              },
              width: "100%",
              my: {xs: 4}
            }}
          >
            <img src={recruitmentProcessed} alt="recruitment-processed" className='mx-auto' />
            <Typography variant="h5" className="text-center pt-2">500+</Typography>
            <Typography variant="h5" className="text-center pt-2">SUCCESSFULLY JOINED</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default ServicesCount;

