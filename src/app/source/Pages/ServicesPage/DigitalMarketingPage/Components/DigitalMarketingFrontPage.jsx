import React from 'react';
import FrontPage from "../../../../../components/pageComponent/FrontPage";
import banner from "../../../../../assests/images/digitalMBanner.png";
import bgImage from "../../../../../assests/images/bg.jpg";
import bgDark from "../../../../../assests/images/bgDark.png";
import { useNavigate } from 'react-router-dom';

const DigitalMarketingFrontPage = () => {
  const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        navigate("/digitalmarketing")
      };
  return (
    <>
        <FrontPage
        title="Digital Marketing Services"
        description="Boost your business growth with expert digital marketing services. We specialize in SEO, social media marketing, and content creation to drive traffic, and enhance brand visibility. Achieve measurable results with our tailored strategies."
        buttonText="Apply Now"
        onButtonClick={handleClick}
        bgImage={bgImage}
        bgDark={bgDark}
        bannerImage={banner}
        sx={{ height: "700px" }}
        showBanner={true}
      />
    </>
  )
}

export default DigitalMarketingFrontPage