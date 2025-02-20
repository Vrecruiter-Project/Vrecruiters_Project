import React from "react";
import PageComponent from "../../../../components/pageComponent/PageComponent";
import ServicesCount from "../../../../components/pageComponent/ServicesCount";
import GetInTouchService from "../../../../components/pageComponent/GetInTouchService";
import CareerCouncellingFrontPage from "./Components/CareerCouncellingFrontPage";
import CareerCouncellingService from "./Components/CareerCouncellingService";

const CareerCouncelling = () => {
  return (
    <>
      <PageComponent>
        <CareerCouncellingFrontPage />
        <CareerCouncellingService />
        <ServicesCount />
        <GetInTouchService />
      </PageComponent>
    </>
  );
};

export default CareerCouncelling;
