import { useEffect, useRef } from "react";
import video from "../../../assests/videos/cop_bgg.mp4";
import { themeatom } from "../../../assests/globalvars/themeatom";
import { useAtom } from "jotai";

const HomePageBackground = () => {
  const [mode, setMode] = useAtom(themeatom);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.3;
    }
  }, []);

  return (
    <video
      ref={videoRef}
      src={video}
      muted
      autoPlay
      loop
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        objectFit: "cover",
        zIndex: -1,

        filter: mode == "light" ? "brightness(100%)" : "brightness(40%)",
        opacity: mode == "light" ? "1" : ".5",
      }}
      type="video/mp4"
    />
  );
};

export default HomePageBackground;
