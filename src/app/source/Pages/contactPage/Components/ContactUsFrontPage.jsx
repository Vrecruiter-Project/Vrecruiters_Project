import banner from "../../../../assests/images/contactBanner2.png";
import bgImage from "../../../../assests/images/bg.jpg";
import FrontPage from "../../../../components/pageComponent/FrontPage";
import bgDark from "../../../../assests/images/bgDark.png";

const ContactUsFrontPage = () => {
  const handleClick = (e) => {
   
  };
  return (
    <>
      <FrontPage
        title="Contact Us Page"
        description="Let’s Get in Touch – We’re Committed to Providing You with the Best Support Possible."
         buttonText="Scroll Down"
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

export default ContactUsFrontPage;
