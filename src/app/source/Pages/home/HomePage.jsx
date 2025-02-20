import Hero from "./components/Hero";
import Features from "./components/Features";
import Highlights from "./components/Highlights";
import Community from "./components/Community";
import Divider from "@mui/material/Divider";
import PageComponent from "../../../components/pageComponent/PageComponent";
// import ImageCarousel0 from "./components/imageCarousel/ImageCarousel0";

export default function HomePage() {

  return (
    <PageComponent>
      <Hero />
      {/* <ImageCarousel0 items={items} type={"jobprofiles"} /> */}

      <Features />
      <Divider />
      <Highlights />
      <Divider />
      <Community />
    </PageComponent>
  );
}
