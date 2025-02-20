import banner from "../../../../assests/images/banner.png";
import FrontPage from "../../../../components/pageComponent/FrontPage";

export default function Hero() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(alert("worked"));
  };

  return (
    
    <FrontPage
      title="Can't Find The Right Job? We Can Help"
      description="Accelerate your career or talent search. Our innovative platform matches ideal candidates with perfect roles using advanced technology."
      buttonText="Apply Now"
      onButtonClick={handleClick}
      bannerImage={banner}
      showBanner={true} 
    />
  );
}
