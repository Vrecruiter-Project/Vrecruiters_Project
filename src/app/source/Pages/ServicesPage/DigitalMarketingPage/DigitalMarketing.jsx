import React from "react";
import PageComponent from "../../../../components/pageComponent/PageComponent";
import ServicesCount from "../../../../components/pageComponent/ServicesCount";
import GetInTouchService from "../../../../components/pageComponent/GetInTouchService";
import DigitalMarketingFrontPage from "./Components/DigitalMarketingFrontPage";
import GrowthPage from "./Components/GrowthPage";
import SolutionsPage from "./Components/SolutionsPage";
import ToolsPage from "./Components/ToolsPage";
import DigitalMFaq from "./Components/DigitalMFaq";

const DigitalMarketing = () => {
  return (
    <>
      <PageComponent>
        <DigitalMarketingFrontPage />
        <GrowthPage />
        <SolutionsPage />
        <ToolsPage />
        <DigitalMFaq />
        <ServicesCount />
        <GetInTouchService />
      </PageComponent>
    </>
  );
};

export default DigitalMarketing;
