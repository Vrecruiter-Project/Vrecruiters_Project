import banner2 from "../../../../../../assests/images/banner2.png";
import FrontPage from "../../../../../../components/pageComponent/FrontPage";
import bgImage from "../../../../../../assests/images/bg.jpg";
import bgDark from "../../../../../../assests/images/bgDark.png";
import { useNavigate } from "react-router-dom";
const CompanyFrontPage = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/recruitment/employers");
  };
  return (
    <>
      <FrontPage
        title="Find your desired Candidates"
        description="Finding the right candidates involves clear job descriptions, targeted recruitment, and thorough interviews, ensuring you hire employees whose skills and values align with your company's goals for both immediate and long-term success."
        buttonText="Apply Now"
        onButtonClick={handleClick}
        bannerImage={banner2}
        bgImage={bgImage}
        bgDark={bgDark}
        sx={{ height: "700px" }}
        showBanner={true}
      />
    </>
  );
};

export default CompanyFrontPage;
