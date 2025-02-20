import ContentCard from "../../../../../components/pageComponent/ContentCard";
import PageComponent from "../../../../../components/pageComponent/PageComponent";
import CompanyCarousel from "./Components/CompanyCarousel";
import CompanyFrontPage from "./Components/CompanyFrontPage";
import ProfileCards from "./Components/ProfileCards";

export default function CompaniesPage() {

  const companyContent = [
    {
      title: "Hire Top Talent Effortlessly",
      description:
        "Attract and hire top candidates easily through our recruiting platform. We connect you with talented job seekers across various industries, streamlining your hiring process and helping you find the perfect match for your job openings. Post jobs, manage applications, and hire the best talent effortlessly.",
    },
    {
      title: "Find the Perfect Candidate for Your Company",
      description:
        "Are you looking for the best opportunities for jobs in the greater Minneapolis or St. Paul area, or to discuss what career options are out there? Through our exclusive single-point-of-contact model we take the time to understand your goals and experience. For over 35 years, we have focused on placing employees for Office, Hybrid, Remote, Temporary/Contract, Contract-to-Hire, and Direct Hire. We have the resources and relationships to offer you greater exposure, competitive positioning, and a clear competitive advantage that will enhance your career and earning potential.",
    },
    {
      title: "Streamline Your Hiring Process",
      description:
        "Simplify your hiring process with our user-friendly recruiting tools. Post job openings, filter resumes, and quickly find qualified candidates for your company. Our platform helps you streamline your recruitment, reducing time-to-hire and ensuring you find the best candidates fast.",
    },
  ];

  return (
    <PageComponent>
      <CompanyFrontPage />
      {companyContent.map((content, index) => (
        <ContentCard
          key={index}
          title={content.title}
          description={content.description}
        />
      ))}
      <ProfileCards />
      <CompanyCarousel/>
    </PageComponent>
  );
}
