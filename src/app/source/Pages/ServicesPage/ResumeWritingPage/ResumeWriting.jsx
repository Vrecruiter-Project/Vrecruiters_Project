import PageComponent from "../../../../components/pageComponent/PageComponent";
import ServicesCount from "../../../../components/pageComponent/ServicesCount";
import GetInTouchService from "../../../../components/pageComponent/GetInTouchService";
import ResumeFrontPage from "./Components/ResumeFrontPage";
import ResumeBuildService from "./Components/ResumeBuildService";

const ResumeWriting = () => {
  return (
    <>
      <PageComponent>
        <ResumeFrontPage />
        <ResumeBuildService />
        <ServicesCount />
        <GetInTouchService />
      </PageComponent>
    </>
  );
};

export default ResumeWriting;
