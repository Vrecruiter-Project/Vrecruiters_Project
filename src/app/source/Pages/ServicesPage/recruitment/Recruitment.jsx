import React from "react";
import RecruitmentFrontPage from "./Components/RecruitmentFrontPage";
import PageComponent from "../../../../components/pageComponent/PageComponent";
import ServicesSection from "../../../../components/pageComponent/ServicesSection";
import ServicesCount from "../../../../components/pageComponent/ServicesCount";
import GetInTouchService from "../../../../components/pageComponent/GetInTouchService";

const Recruitment = () => {
  return (
    <>
      <PageComponent>
        <RecruitmentFrontPage />
        <ServicesSection />
        <ServicesCount />
        <GetInTouchService />
      </PageComponent>
    </>
  );
};

export default Recruitment;
