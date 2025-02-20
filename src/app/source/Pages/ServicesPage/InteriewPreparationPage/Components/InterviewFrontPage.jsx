import FrontPage from "../../../../../components/pageComponent/FrontPage";
import banner from "../../../../../assests/images/InterviewBanner1.png";
import bgImage from "../../../../../assests/images/bg.jpg";
import bgDark from "../../../../../assests/images/bgDark.png";
import { useNavigate } from "react-router-dom";

const InterviewFrontPage = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/interview");
  };
  return (
    <>
      <FrontPage
        title="Ace Your Interview with Us!"
        description="Prepare for your interview and land your dream job effortlessly."
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

export default InterviewFrontPage;
