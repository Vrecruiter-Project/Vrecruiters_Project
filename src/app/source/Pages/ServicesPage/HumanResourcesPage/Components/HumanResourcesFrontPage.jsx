import React from 'react';
import FrontPage from "../../../../../components/pageComponent/FrontPage";
import banner from "../../../../../assests/images/humanRBanner.png";
import bgImage from "../../../../../assests/images/bg.jpg";
import bgDark from "../../../../../assests/images/bgDark.png";
import { useNavigate } from 'react-router-dom';

const HumanResourcesFrontPage = () => {
  const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        navigate("/humanresources");
      };
  return (
    <>
        <FrontPage
        title="Human Resources"
        description="Join us in bridging talent and opportunity! We match skilled professionals with rewarding careers across various industries, creating a pathway to your success."
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

export default HumanResourcesFrontPage