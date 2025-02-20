import { Box, Typography, Grid, Link, Stack } from '@mui/material'
import React from 'react';
import { IoCallSharp } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import GoogleMap from './GoogleMap';

const GetInTouchService = ({ theme, style }) => {
  return (
    <>
      <Box
        sx={(theme) => ({
          width: "100%",
          my: { xs: 8, sm: 10 },
          background:
            "linear-gradient(0deg, rgba(240,239,243,1) 100%, rgba(252,237,226,1) transparent)",
          ...theme.applyStyles("dark", {
            backgroundImage:
              "radial-gradient(ellipse 80% 50% at 50% -20%, hsla(210, 100%, 16%, 0), transparent)",
          }),
          ...style,
        })}
      >
        <Grid container className='align-middle text-center mt-[20px]'>
          <Grid item xs={12}>
            <Typography variant='h5'>GET IN TOUCH</Typography>
            <Link href="#">V Recruiter</Link> <br />
            <Box mt={1}>
              <Typography variant="body1" fontWeight={600}>
                V Recruiter, 12th Unit, 12th Floor, Zirakpur, Punjab 140603
              </Typography>
             <Typography variant="body1" fontWeight={600}   >Or</Typography>
              <Typography variant="body1" fontWeight={600} mt={1}>
                25th Unit, 3rd Floor, Zirakpur, Punjab 140603
              </Typography>
            </Box>
            <Grid container className=" mt-[15px]">
              <Grid item xs={12} sm={6} md={6} sx={{
                display: "flex",
                justifyContent: { xs: 'center', sm: 'flex-end', md: 'flex-end', }
              }}>
                <Stack direction="row" spacing={2} alignItems="center" className="text-center mx-[8%]">
                  <IoCallSharp color="#ffff" style={{
                    border: "1px solid transparent",
                    borderRadius: "2px",
                    height: "25px",
                    width: "25px",
                    background: "linear-gradient(45deg, #D4A1FF 10%, #FF9E53 90%)",
                  }} />
                  <Link href="tel:+919518035030">+91 95180 35030</Link>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6} md={6} sx={{
                display: "flex",
                justifyContent: { xs: 'center', sm: 'flex-start', md: 'flex-start' }
              }}>
                <Stack direction="row" spacing={2} alignItems="center" className="text-center">
                  <IoMail color="#ffff" style={{
                    border: "1px solid transparent",
                    borderRadius: "2px",
                    height: "25px",
                    width: "25px",
                    background: "linear-gradient(45deg, #D4A1FF 10%, #FF9E53 90%)",
                  }} />
                  <Link href="mailto:vrecruitersofficial@gmail.com?subject=Inquiry&body=Hello%20V%20Recruiter%20Team," target="_blank">vrecruitersofficial@gmail.com</Link>
                </Stack>
              </Grid>
            </Grid>
            <Box className="mt-[20px]"
              display="flex" flexDirection="column" justifyContent="center" alignItems="center"
              sx={{
                mx: "auto",
                width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
                height: '400px',
                borderRadius: '20px',
                overflow: 'hidden',
              }}
            >
              <GoogleMap />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default GetInTouchService