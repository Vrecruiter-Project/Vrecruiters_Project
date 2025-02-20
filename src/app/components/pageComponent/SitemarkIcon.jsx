import DarkLogo from "../../assests/images/logo_noBgWhite.png";
import lightLogo from "../../assests/images/logo_noBgBlack.png";
import { useAtom } from "jotai";
import { themeatom } from "../../assests/globalvars/themeatom";
import { useNavigate } from "react-router-dom";

export default function SitemarkIcon() {
  const [mode, setMode] = useAtom(themeatom);
  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="">
        <img
          onClick={() => {
            navigate("/");
            scrollToSection("hero");
          }}
          src={mode == "dark" ? DarkLogo : lightLogo}
          className=" mr-4"
          width={60}
          alt="V Recruiters"
        />
      </div>
    </>
  );
}
