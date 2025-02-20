import FrontPage from "../../../../../components/pageComponent/FrontPage";
import banner from "../../../../../assests/images/resumeBanner.png";
import bgImage from "../../../../../assests/images/bg.jpg";
import bgDark from "../../../../../assests/images/bgDark.png";
import { useNavigate } from "react-router-dom";

const ResumeFrontPage = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/resume/builder");
  };
  return (
    <>
      <FrontPage
        title="Resume Writing Services"
        description="Accelerate your career or hiring process with our advanced platform."
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

export default ResumeFrontPage;
