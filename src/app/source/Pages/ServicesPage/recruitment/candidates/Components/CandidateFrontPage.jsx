import React from "react";
import banner from "../../../../../../assests/images/banner.png";
import FrontPage from "../../../../../../components/pageComponent/FrontPage";
import bgImage from "../../../../../../assests/images/bg.jpg";
import bgDark from "../../../../../../assests/images/bgDark.png";
import { useNavigate } from "react-router-dom";
const CandidateFrontPage = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/recruitment/candidates");
  };
  return (
    <>
      <FrontPage
        title="Can't Find The Right Job? We Can Help"
        description="Accelerate your career or talent search. Our innovative platform matches ideal candidates with perfect roles using advanced technology."
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

export default CandidateFrontPage;
