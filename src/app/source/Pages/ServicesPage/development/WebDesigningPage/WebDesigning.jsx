import PageComponent from "../../../../../components/pageComponent/PageComponent";
import GetInTouchService from "../../../../../components/pageComponent/GetInTouchService";
import WebDesignFrontPage from "./Components/WebDesignFrontPage";
import DesignServices from "./Components/DesignServices";
import CompanyCarousel from '../../recruitment/companies/Components/CompanyCarousel';

const WebDesigning = () => {
  return (
    <>
      <PageComponent>
        <WebDesignFrontPage />
        <DesignServices />
      <CompanyCarousel/>
        <GetInTouchService />
      </PageComponent>
    </>
  );
};

export default WebDesigning;
