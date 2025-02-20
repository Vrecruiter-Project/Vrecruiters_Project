import FrontPage from "../../../../../components/pageComponent/FrontPage";
import banner from "../../../../../assests/images/recruitment.png";
import bgImage from "../../../../../assests/images/bg.jpg";
import bgDark from "../../../../../assests/images/bgDark.png";
import { useNavigate } from "react-router-dom";

const RecruitmentFrontPage = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate("/recruitment");
  };
  return (
    <>
      <FrontPage
        title="Job Placement Services"
        description="Ready to fast-track your career or talent search? Our cutting-edge platform connects you with your dream role, leveraging advanced technology to find the perfect match!"
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

export default RecruitmentFrontPage;
