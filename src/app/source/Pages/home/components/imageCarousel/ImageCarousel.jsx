import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box, Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";

export default function ImageCarousel({ items, logoStyle, className}) {
  return (
    <>
     <Grid
        container 
      >
        <Grid item xs={12} md={12}>
      <Swiper
        className="mt-10 w-full"
        loop={true}
        autoplay={{
          delay: 800,
          pauseOnMouseEnter: true,
        }}
        speed={800}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        style={{
           mx: 12,
            }}
      >
        {items.map((testimonial, index) => (
            <SwiperSlide className="flex items-center justify-center text-lg text-black" >
              <Card
              style={{background: 'linear-gradient(0deg, #FF9E53 10%, #D4A1FF 90%)', border:"none" , boxShadow: "0 3px 5px 2px rgba(63,59,56 .3)",}}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  flexGrow: 1,
                  py: { xs: 4, sm: 4 },
                }}
              >
               <img src={testimonial.image} className="h-[90%] w-[90%] flex mx-auto rounded-full mb-10 " alt={testimonial.alt} />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    color: 'text.primary',
                    pr: 2,
                  }}
                >
                  <CardHeader
                    title={testimonial.name}
                  />
                 <CardContent >
                  <Typography variant="body2" sx={{
                    color: 'text.primary',
                  }} >
                    {testimonial.company}
                  </Typography>
                </CardContent>
                </Box>
              </Card>
            </SwiperSlide>
        ))}
      </Swiper>
      </Grid>
      </Grid>
    </>
  );
}
