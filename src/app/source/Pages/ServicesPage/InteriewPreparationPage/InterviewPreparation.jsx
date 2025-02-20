import React from "react";
import PageComponent from "../../../../components/pageComponent/PageComponent";
import ServicesCount from "../../../../components/pageComponent/ServicesCount";
import GetInTouchService from "../../../../components/pageComponent/GetInTouchService";
import InterviewFrontPage from "./Components/InterviewFrontPage";
import InterviewPreparationService from "./Components/InterviewPreparationService";

const InterviewPreparation = () => {
  return (
    <>
      <PageComponent>
        <InterviewFrontPage />
        <InterviewPreparationService />
        <ServicesCount />
        <GetInTouchService />
      </PageComponent>
    </>
  );
};

export default InterviewPreparation;
