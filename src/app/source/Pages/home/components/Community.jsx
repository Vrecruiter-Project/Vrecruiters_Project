import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import communitypic1 from "../../../../assests/images/community.jpg";
import communitypic2 from "../../../../assests/images/community2.jpg";
import communitypic3 from "../../../../assests/images/community3.jpg";
import { Grid } from "@mui/material";

const Community = () => {
  return (
    <>
      <Box
        id="community"
        sx={(theme) => ({
          maxWidth: "100%",
          textAlign: { sm: "left", md: "center" },
          pt: { xs: 4, sm: 12 },
          pb: { xs: 8, sm: 14 },
          color: "white",
          bgcolor: "hsl(220, 30%, 2%,.6)",
          background:
            "transparent",
          ...theme.applyStyles("dark", {
            backgroundImage:
              "radial-gradient(ellipse 80% 50% at 50% -20%, hsla(210, 100%, 16%, 0), transparent)",
          }),
        })}
      >
        <Grid container>
          <Grid item xs={12} md={12}>
            <div className="max-md:px-7 text-center">
              <Typography
                component="h2"
                variant="h3"
                sx={{ color: "text.primary", fontWeight: "bold" }}
              >
                Life @ V Recruiters
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={12}>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1}
              loop={true}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={true}
              modules={[Autoplay, EffectCoverflow, Pagination]}
              className="w-[85%]  my-10 "
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide className="bg-center bg-cover w-[360px] h-[360px]">
                <img
                  className="block w-full h-full rounded-md"
                  src={communitypic1}
                  alt="Community 1"
                />
              </SwiperSlide>
              <SwiperSlide className="bg-center bg-cover w-[360px] h-[360px]">
                <img
                  className="block w-full h-full rounded-md"
                  src={communitypic2}
                  alt="Community 2"
                />
              </SwiperSlide>
              <SwiperSlide className="bg-center bg-cover w-[360px] h-[360px]">
                <img
                  className="block w-full h-full rounded-md"
                  src={communitypic3}
                  alt="Community 3"
                />
              </SwiperSlide>
              <SwiperSlide className="bg-center bg-cover w-[360px] h-[360px]">
                <img
                  className="block w-full h-full rounded-md"
                  src={communitypic2}
                  alt="Community 2"
                />
              </SwiperSlide>
              <SwiperSlide className="bg-center bg-cover w-[360px] h-[360px]">
                <img
                  className="block w-full h-full rounded-md"
                  src={communitypic1}
                  alt="Community 1"
                />
              </SwiperSlide>
              <SwiperSlide className="bg-center bg-cover w-[360px] h-[360px]">
                <img
                  className="block w-full h-full rounded-md"
                  src={communitypic3}
                  alt="Community 3"
                />
              </SwiperSlide>
              <SwiperSlide className="bg-center bg-cover w-[360px] h-[360px]">
                <img
                  className="block w-full h-full rounded-md"
                  src={communitypic2}
                  alt="Community 2"
                />
              </SwiperSlide>
              <SwiperSlide className="bg-center bg-cover w-[360px] h-[360px]">
                <img
                  className="block w-full h-full rounded-md"
                  src={communitypic3}
                  alt="Community 3"
                />
              </SwiperSlide>
              <SwiperSlide className="bg-center bg-cover w-[360px] h-[360px]">
                <img
                  className="block w-full h-full rounded-md"
                  src={communitypic1}
                  alt="Community 1"
                />
              </SwiperSlide>
            </Swiper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Community;
