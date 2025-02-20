import { useNavigate } from "react-router-dom";
import banner from "../../../../../../assests/images/WebDesignBanner.png";
import bgImage from "../../../../../../assests/images/bg.jpg";
import bgDark from "../../../../../../assests/images/bgDark.png";
import FrontPage from "../../../../../../components/pageComponent/FrontPage";

const WebDesignFrontPage = () => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        navigate("/designers")
    };
    return (
        <>
            <FrontPage
                title=" Web Designing Services"
                description="Transform your web presence with our cutting-edge design solutions—craft visually stunning, user-friendly websites that engage your audience and drive lasting success!"
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

export default WebDesignFrontPage;
