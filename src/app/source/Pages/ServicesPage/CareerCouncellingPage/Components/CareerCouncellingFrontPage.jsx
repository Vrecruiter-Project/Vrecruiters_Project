import FrontPage from "../../../../../components/pageComponent/FrontPage";
import banner from "../../../../../assests/images/careerBanner.png";
import bgImage from "../../../../../assests/images/bg.jpg";
import bgDark from "../../../../../assests/images/bgDark.png";
import { useNavigate } from "react-router-dom";

const CareerCouncellingFrontPage = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/career");
  };
  return (
    <>
      <FrontPage
        title="Career Councelling Services"
        description="Discover your passions, explore careers, and achieve your dreams"
        buttonText="Apply Now"
        onButtonClick={handleClick}
        bgImage={bgImage}
        bgDark={bgDark}
        bannerImage={banner}
        sx={{ height: "700px" }}
        showBanner={true}
      />
    </>
  );
};

export default CareerCouncellingFrontPage;
