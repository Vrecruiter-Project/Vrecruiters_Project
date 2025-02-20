import bgImage from "../../../../assests/images/bg.jpg";
import bgDark from "../../../../assests/images/bgDark.png";
import FrontPage from "../../../../components/pageComponent/FrontPage";
import scrollToSection from "../../../../components/scrollFunctions/ScrollToSection";
const ServicesFrontPage = () => {
  const handleClick = (e) => {
    e.preventDefault();
    scrollToSection("all_services_section");
  };
  return (
    <>
      <FrontPage
        title="Welcome To VR Services"
        description="Accelerate your career or talent search. Our innovative platform matches ideal candidates with perfect roles using advanced technology."
        buttonText="Learn More..."
        onButtonClick={handleClick}
        sx={{ height: "700px" }}
        bgImage={bgImage}
        bgDark={bgDark}
        showBanner={false}
      />
    </>
  );
};

export default ServicesFrontPage;
