import { useNavigate } from "react-router-dom";
import banner from "../../../../../../assests/images/WebDevBanner.png";
import bgImage from "../../../../../../assests/images/bg.jpg";
import bgDark from "../../../../../../assests/images/bgDark.png";
import FrontPage from "../../../../../../components/pageComponent/FrontPage";

const WebFrontPage = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate("/developers")
  };
  return (
    <>
      <FrontPage
        title=" Web Development Services"
        description="Elevate your development projects with our innovative platform—efficiently build seamless solutions using advanced technology for unparalleled success!"
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

export default WebFrontPage;
