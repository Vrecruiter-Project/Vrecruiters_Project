import { useState } from "react";
import { Box, Grid } from "@mui/material";
import ResumeBuilderForm from "./components/ResumeBuilderForm/ResumeBuilderForm";
import ResumeTemplate from "./components/templates/ResumeTemplate";
import ResumeTemplate2 from "./components/templates/ResumeTemplate2";
import ResumeTemplate3 from "./components/templates/ResumeTemplate3";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ResumeTemplate4 from "./components/templates/ResumeTemplate4";
import ResumeTemplate5 from "./components/templates/ResumeTemplate5";

function ResumeBuilder() {
  const [formData, setFormData] = useState({});
  const [sectionHeadings, setSectionHeadings] = useState({
    basicDetails: "Basic Details",
    education: "Education",
    workExperience: "Work Experience",
    projects: "Projects",
    skills: "Skills",
    customSections: "Custom Sections",
  });

  const handleHeadingChange = (section, value) => {
    setSectionHeadings((prev) => ({
      ...prev,
      [section]: value,
    }));
  };

  return (
    <Box sx={{ border: "2px solid black", height: "100vh" }}>
      <Grid container sx={{ height: "100%" }}>
        <Grid
          item
          xs={6}
          sx={{
            border: "2px solid black",
            height: "100%",
            paddingX: 8,
            paddingY: 1,
            overflow: "auto",
          }}
        >
          <ResumeBuilderForm sectionHeadings={sectionHeadings} handleHeadingChange={handleHeadingChange} />
        </Grid>

        <Grid
          item
          xs={6}
          sx={{
            border: "2px solid black",
            height: "100%",
            overflow: "hidden", // Ensure proper carousel display
          }}
        >
          <Swiper 
          spaceBetween={10} 
          slidesPerView={1} 
          loop={true}
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
            modules={[Navigation]}
          >
            <SwiperSlide>
              <ResumeTemplate sectionHeadings={sectionHeadings} />
            </SwiperSlide>
            <SwiperSlide>
              <ResumeTemplate2 sectionHeadings={sectionHeadings} />
            </SwiperSlide>
            <SwiperSlide>
              <ResumeTemplate3 sectionHeadings={sectionHeadings} />
            </SwiperSlide>
            <SwiperSlide>
              <ResumeTemplate4 sectionHeadings={sectionHeadings} />
            </SwiperSlide>
            <SwiperSlide>
              <ResumeTemplate5 sectionHeadings={sectionHeadings} />
            </SwiperSlide>
          </Swiper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ResumeBuilder;
