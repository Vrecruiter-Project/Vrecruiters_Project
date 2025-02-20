import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import phoneIcon from "../../../../assests/images/contactIcons/phoneIcon.png";
import locationIcon from "../../../../assests/images/contactIcons/locationIcon.png";
import emailIcon from "../../../../assests/images/contactIcons/emailIcon.png";

const ContactResources = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          my: { xs: 5, sm: 5 }, 
        }}
      >
        <Grid container spacing={2} sx={{ py: { xs: 5} }}>
          <Grid item xs={12} md={4} sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
            <Box sx={{
              height: "200px",
              width: "200px",
            }}>
              <img src={phoneIcon} height={200} width={200}
                alt="customer-services" className='mx-auto' />
            </Box>
            <Typography variant="h5" className="text-center pt-2 ">PHONE</Typography>
            <Typography variant="p" className="text-center flex-col justify-center  pt-2">+91 95180-35030</Typography>
            <Typography variant="p" className="text-center flex-col justify-center  pt-2">+91 89084-67890</Typography>
          </Grid>

          <Grid item xs={12} md={4} sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Box sx={{
              height: "200px",
              width: "200px",
            }}>

            <img src={locationIcon} height={200} width={200} alt="interview-scheduled" className='mx-auto' />
            </Box>
            <Typography variant="h5" className="text-center pt-2">ADDRESS</Typography>
            <Typography variant="p" className="text-center pt-2"> V  Recruiter, SUSHMA Infinium</Typography>
            <Typography variant="p" className="text-center pt-2">Delhi NH - 22, Zirakpur, Chandigarh, India</Typography>
          </Grid>

          <Grid item xs={12} md={4} sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Box sx={{
              borderRadius: "50%",
              height: "200px",
              width: "200px",
            }}>

            <img src={emailIcon} height={200} width={200} alt="recruitment-processed" className='mx-auto' />
            </Box>
            <Typography variant="h5" className="text-center pt-2">EMAIL</Typography>
            <Typography variant="p" className="text-center pt-2">Request for Proposal</Typography>
            <Typography variant="p" className="text-center pt-2">vrecruitersofficial@gmail.com</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default ContactResources;

