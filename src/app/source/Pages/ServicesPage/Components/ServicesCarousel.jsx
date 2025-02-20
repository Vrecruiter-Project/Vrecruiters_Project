import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Grid } from "@mui/material";
import CandidateFrontPage from "../../ServicesPage/recruitment/candidates/Components/CandidateFrontPage";
import CompanyFrontPage from "../../ServicesPage/recruitment/companies/Components/CompanyFrontPage";
import ServicesFrontPage from "./ServicesFrontPage";
import RecruitmentFrontPage from "../recruitment/Components/RecruitmentFrontPage";
import WebFrontPage from "../development/WebDevelopmentPage/Components/WebFrontPage";
import WebDesignFrontPage from "../development/WebDesigningPage/Components/WebDesignFrontPage";
import CareerCouncellingFrontPage from "../CareerCouncellingPage/Components/CareerCouncellingFrontPage";
import InterviewFrontPage from "../InteriewPreparationPage/Components/InterviewFrontPage";
import ResumeFrontPage from "../ResumeWritingPage/Components/ResumeFrontPage";
import DigitalMarketingFrontPage from "../DigitalMarketingPage/Components/DigitalMarketingFrontPage";
import HumanResourcesFrontPage from "../HumanResourcesPage/Components/HumanResourcesFrontPage";

const ServicesCarousel = () => {
  return (
    <>
      <Grid
        container
        sx={(theme) => ({
          width: "100%",
          background:
            "linear-gradient(0deg, rgba(226,225,233,1) 100%, rgba(252,237,226,1) 100%)",
          ...theme.applyStyles("dark", {
            backgroundImage:
              "radial-gradient(ellipse 80% 50% at 50% -20%, hsla(210, 100%, 16%, 0), rgba(201,130,58,0.7) 10%, rgba(0,0,0,0.4))",
          }),
        })}
      >
        <Grid item xs={12} md={12}>
          <Swiper
            className="w-full relative overflow-hidden"
            loop={true}
            autoplay={{
              delay: 2000,
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
                slidesPerView: 1,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
          >
            <SwiperSlide>
              <ServicesFrontPage />
            </SwiperSlide>
            <SwiperSlide>
              <RecruitmentFrontPage />
            </SwiperSlide>
            <SwiperSlide>
              <CandidateFrontPage />
            </SwiperSlide>
            <SwiperSlide>
              <CompanyFrontPage />
            </SwiperSlide>
            <SwiperSlide>
              <WebFrontPage />
            </SwiperSlide>
            <SwiperSlide>
              <WebDesignFrontPage />
            </SwiperSlide>
            <SwiperSlide>
              <HumanResourcesFrontPage />
            </SwiperSlide>
            <SwiperSlide>
              <CareerCouncellingFrontPage />
            </SwiperSlide>
            <SwiperSlide>
              <InterviewFrontPage />
            </SwiperSlide>
            <SwiperSlide>
              <ResumeFrontPage />
            </SwiperSlide>
            <SwiperSlide>
              <DigitalMarketingFrontPage />
            </SwiperSlide>
          </Swiper>
          <style>{`
            .swiper-button-next,
            .swiper-button-prev {
              color: white;
            }
          `}</style>
        </Grid>
      </Grid>
    </>
  );
};

export default ServicesCarousel;
