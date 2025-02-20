import React, { Suspense } from "react";
import { RouteMaker } from "../../components/routes/routes";
import Loading from "../../components/Loading/Loading";
import Services from "../Pages/ServicesPage/Services";
import CandidatesPage from "../Pages/ServicesPage/recruitment/candidates/CandiatesPage";
import CompaniesPage from "../Pages/ServicesPage/recruitment/companies/CompaniesPage";
import Recruitment from "../Pages/ServicesPage/recruitment/Recruitment";
import DigitalMarketing from "../Pages/ServicesPage/DigitalMarketingPage/DigitalMarketing";
import ResumeWriting from "../Pages/ServicesPage/ResumeWritingPage/ResumeWriting";
import InterviewPreparation from "../Pages/ServicesPage/InteriewPreparationPage/InterviewPreparation";
import CareerCouncelling from "../Pages/ServicesPage/CareerCouncellingPage/CareerCouncelling";
import WebDevelopment from "../Pages/ServicesPage/development/WebDevelopmentPage/WebDevelopment";
import WebDesigning from "../Pages/ServicesPage/development/WebDesigningPage/WebDesigning";
import CompanyContact from "../Pages/ServicesPage/recruitment/companies/companyContactPage/CompanyContact";
import ContactUs from "../Pages/contactPage/ContactUs";
import WebDevContact from "../Pages/ServicesPage/development/WebDevelopmentPage/WebDevContactPage/WebDevContact";
import CandidateContact from "../Pages/ServicesPage/recruitment/candidates/candidateContactPage/CandidateContact";
import WebDesignContact from "../Pages/ServicesPage/development/WebDesigningPage/WebDesignContactPage/WebDesignContact";
import DevClientContactPage from "../Pages/ServicesPage/development/WebDevelopmentPage/WebDevContactPage/DevClientContactPage";
import DesClientContactPage from "../Pages/ServicesPage/development/WebDesigningPage/WebDesignContactPage/DesClientContactPage";
import FeedbackPage from "../Pages/contactPage/FeedbackPage/FeedbackPage";
import CareerCouncellingContact from "../Pages/ServicesPage/CareerCouncellingPage/CareerCouncellingContactPage/CareerCouncellingContact";
import ResumeContactPage from "../Pages/ServicesPage/ResumeWritingPage/ResumeContactPage/ResumeContactPage";
import InterviewContactPage from "../Pages/ServicesPage/InteriewPreparationPage/InterviewContactPage/InterviewContactPage";
import DigitalMarketingContactPage from "../Pages/ServicesPage/DigitalMarketingPage/DigitalMarketingContactPage/DigitalMarketingContactPage";
import ResumeBuilder from "../Pages/ServicesPage/ResumeWritingPage/resumeBuilder/ResumeBuilder";
import BlogPostCards from "../landingPage/BlogPostCards";
import HumanResources from "../Pages/ServicesPage/HumanResourcesPage/HumanResources";
import HumanResourcesContactPage from "../Pages/ServicesPage/HumanResourcesPage/HumanResourcesContactPage.jsx/HumanResourcesContact";
import FreeConsultation from "../Pages/ServicesPage/FreeConsultationPage/FreeConsultationPage";
const AdminPanelRoutes = React.lazy(() =>
  import("../adminPanel/adminRoutes/AdminPanelRoutes")
);
const LandingPage = React.lazy(() => import("../landingPage/LandingPage"));
const SignInPage = React.lazy(() => import("../signInUp/signIn/SignInPage"));
const SignUpPage = React.lazy(() => import("../signInUp/signUp/SignUpPage"));

function AppRouter() {
  return (
    <Suspense fallback={<Loading />}>
      <RouteMaker
        routes={{
          "/": <Services />,
          recruitment: <Recruitment />,
          "/recruitment/candidates": <CandidatesPage />,
          "/recruitment/employers": <CompaniesPage />,
          "/developers": <WebDevelopment />,
          "/designers": <WebDesigning />,
          "/digitalmarketing": <DigitalMarketing />,
          "freeconsultation": <FreeConsultation/>,
          "/resume": <ResumeWriting />,
          "/humanresources": <HumanResources/>,
          "/humanresourcescontact": <HumanResourcesContactPage/>,
          "resume/builder/": <ResumeBuilder />,
          "/interview": <InterviewPreparation />,
          "/career": <CareerCouncelling />,
          "/companycontact": <CompanyContact />,
          "/candidatecontact": <CandidateContact />,
          "/contact": <ContactUs />,
          "/designingcontact": <WebDesignContact />,
          "/developmentcontact": <WebDevContact />,
          "/devclientcontact": <DevClientContactPage />,
          "/desclientcontact": <DesClientContactPage />,
          "/careercontact": <CareerCouncellingContact />,
          "/resumecontact": <ResumeContactPage />,
          "/interviewcontact": <InterviewContactPage />,
          digitalmarketingcontact: <DigitalMarketingContactPage />,
          "/feedback": <FeedbackPage />,
          "/signin": <SignInPage />,
          "/signup": <SignUpPage />,
          "/apply": <LandingPage />,
          "/admin/*": <AdminPanelRoutes />,
          "/blog" : <BlogPostCards/>
        }}
      />
    </Suspense>
  );
}

export default AppRouter;
