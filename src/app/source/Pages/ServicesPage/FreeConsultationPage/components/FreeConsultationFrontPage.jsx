import React from "react";
import FrontPage from "../../../../../components/pageComponent/FrontPage";
import banner from "../../../../../assests/images/FreeConsultationBannerImg.png";
import bgImage from "../../../../../assests/images/bg.jpg";
import bgDark from "../../../../../assests/images/bgDark.png";
import { useNavigate } from "react-router-dom";



const FreeConsultationFrontPage = () => {
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        navigate("/freeconsultation")
    };

    return (
        <>
            <FrontPage
                title="Free Consultation Page"
                description="We are dedicated to connecting top talent with career opportunities across industries."
                buttonText="Enroll Now"
                onButtonClick={handleClick}
                bgDark={bgDark}
                bgImage={bgImage}
                bannerImage={banner}
            />
        </>
    )
}

export default FreeConsultationFrontPage;