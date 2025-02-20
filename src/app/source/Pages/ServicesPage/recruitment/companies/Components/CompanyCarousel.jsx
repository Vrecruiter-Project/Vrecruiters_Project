import { Swiper, SwiperSlide } from "swiper/react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Grid, Typography, Box } from "@mui/material";
import aeroPlazaLogo from "../../../../../../assests/images/companies-list/aeroPlazaLogo.png";
import floranceLogo from "../../../../../../assests/images/companies-list/floranceEstateLogo.png";
import rajputLogo from "../../../../../../assests/images/companies-list/rajputGroupLogo.png";
import westHighLogo from "../../../../../../assests/images/companies-list/westHighlanderLogo.png";
import whiteRayLogo from "../../../../../../assests/images/companies-list/whiterayLogo.png";
import aadiSoftLogo from "../../../../../../assests/images/companies-list/AadiSoftLogo.jpg";
import aboardLogo from "../../../../../../assests/images/companies-list/AbroadFliersLogo.png";
import aeboLogo from "../../../../../../assests/images/companies-list/AebocodeLogo.png";
import AmCareLogo from "../../../../../../assests/images/companies-list/AmCareLogo.jpeg";
import farlexLogo from "../../../../../../assests/images/companies-list/FarlexLogo.jpg";
import IvsLogo from "../../../../../../assests/images/companies-list/IvsLogo.jpg";
import JDevelopersLogo from "../../../../../../assests/images/companies-list/JDevelopers.png";
import eventLogo from "../../../../../../assests/images/companies-list/eventHolidaysLogo.png";
import futureITLogo from "../../../../../../assests/images/companies-list/FutureITLogo.png";
import jungleWorksLogo from "../../../../../../assests/images/companies-list/JungleworksLogo.png";
import RBLLogo from "../../../../../../assests/images/companies-list/RBLLogo.png";
import RGLogo from "../../../../../../assests/images/companies-list/RGGroupsLogo.png";

const companyData = [
  { image: aeroPlazaLogo },
  { image: floranceLogo },
  { image: rajputLogo },
  { image: westHighLogo },
  { image: whiteRayLogo },
  { image: aadiSoftLogo },
  { image: aboardLogo },
  { image: aeboLogo },
  { image: AmCareLogo },
  { image: farlexLogo },
  { image: IvsLogo },
  { image: JDevelopersLogo },
  { image: eventLogo },
  { image: futureITLogo },
  { image: jungleWorksLogo },
  { image: RBLLogo },
  { image: RGLogo },
];

export default function CompanyCarousel({ theme, style }) {
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        my: { xs: 8, md: 10 },
        background:
          "linear-gradient(0deg, rgba(240,239,243,1) 100%, rgba(252,237,226,1) transparent)",
        ...theme.applyStyles("dark", {
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, hsla(210, 100%, 16%, 0), transparent)",
        }),
        ...style,
      })}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h2" fontWeight="bold">
            Our Partners
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={12}
          sx={{
            mt: 4,
            display: "flex",         // Flex to center the swiper
            justifyContent: "center", // Center swiper horizontally
          }}
        >
          <Swiper
            slidesPerView={6}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={1000}
            spaceBetween={10}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 8,
                spaceBetween: 30,
              },
            }}
            sx={{
              width: "80%",
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="company-swiper"
          >
            {companyData.map((company, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <Box
                  component="img"
                  src={company.image}
                  alt="Company Logo"
                  sx={{
                    width: "200px",
                    height: "auto",
                    objectFit: "contain",
                    bgcolor: "white",
                    borderRadius: "30px",
                    border: "2px solid transparent"
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </Box>
  );
}
