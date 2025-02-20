import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box, Card, Grid, Typography, useTheme, CardContent} from "@mui/material";
export default function ProfileCarousel({items}) {

  const theme = useTheme();

  return (
    <>
        <Box
      sx={{
        width: "100%",
        py: { xs: 8, sm: 14 },
        backgroundColor: theme.palette.background.default,
        overflow: "hidden",
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
          borderRadius: "20px",
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
      <CardContent sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                p: { xs: 3, sm: 5 },
              }}>
                              <Typography
                component="h2"
                variant="h4"
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: "700",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    width: "60px",
                    height: "4px",
                    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                    position: "absolute",
                    bottom: "-10px",
                    left: "45%",
                    borderRadius: "2px",
                  },
                }}
              >
              Job Profiles
              </Typography>
              </CardContent>
      <Grid
        container 
        className="my-10 px-[10%]"
      >
        <Grid item xs={12} md={12}>
          <Swiper
            className=" w-full scale-[95%] relative overflow-hidden"
            loop={true}
            autoplay={{
              delay: 800,
              pauseOnMouseEnter: true,
            }}
            speed={800}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {items.map((item, index) => (
              <SwiperSlide
                className="rounded-xl scale-[.8] hover:scale-[.9] transition duration-200"
                key={index}
              >
                <Card
                  className="w-full h-[65%] relative text-gray-200"
                  style={{
                    background: item.bgColor,
                    boxShadow: "0 3px 5px 2px rgba(63,59,56 .3)",
                  }}
                >
                  <div className="w-[80%] px-3 py-1">
                    <span className="text-[22px] text-gray-300 font-bold">
                      {item.title}
                    </span>
                  </div>
                  <div className="w-full  flex justify-center items-center">
                    <span className="px-3 text-justify">
                      <img
                        className="rounded-xl mb-3 w-full h-full brightness-100"
                        src={item.image}
                        alt="field-images"
                      />
                    </span>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
          <style>{`
            .swiper-button-next,
            .swiper-button-prev {
              top: 60%; /* Adjust the value as needed */
              transform: translateY(-45%);
              color: white; /* Example styling */
              font-size: none;
            }
          `}</style>
        </Grid>
      </Grid>
      </Card>
      </Box>
    </>
  );
}
