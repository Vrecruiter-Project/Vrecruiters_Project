import ContentCard from "../../../components/pageComponent/ContentCard";
import PageComponent from "../../../components/pageComponent/PageComponent";
import ServicesCarousel from "./Components/ServicesCarousel";
import humanResources from "../../../assests/images/humanR.png";
import webDesigner from "../../../assests/images/webD.png";
import careerCouncelling from "../../../assests/images/careerC.jpg";
import webDeveloper from "../../../assests/images/webDev.png";
import interviewPreparation from "../../../assests/images/interviewService.png";
import resumeBuilder from "../../../assests/images/resumeService.png";
import digitalMarketing from "../../../assests/images/digitalMService.png";
import Features from "../home/components/Features";
import Highlights from "../home/components/Highlights";
import Community from "../home/components/Community";
import { useNavigate } from "react-router-dom";
import GetInTouchService from "../../../components/pageComponent/GetInTouchService";

export default function Services() {
  const navigate = useNavigate();

  const servicesData = [
    {
      title: "Human Resources",
      description:
        "A Human Resources (HR) department is the division within an organization responsible for managing all aspects of the employee life cycle. This includes recruiting, hiring, onboarding, training, performance management, compensation and benefits, employee relations, compliance with labor laws, and fostering a positive workplace culture.",
      button: "Read More",
      route: "/humanresources",
      imageSrc: humanResources,
      imagePosition: "left",
    },
    {
      title: "Web Designer",
      description:
        "A Web Designer is a creative professional responsible for designing the visual layout, user interface (UI), and overall aesthetic of websites. They combine artistic design skills with an understanding of user experience (UX) principles to create websites that are not only visually appealing but also functional and user-friendly.",
      button: "Read More",
      route: "/designers",
      imageSrc: webDesigner,
    },
    {
      title: "Web Developer",
      description:
        "A Web Developer is a skilled professional responsible for building and maintaining websites and web applications. They focus on the technical aspects of a website, including coding, creating databases, and implementing server-side functionality. They ensure that websites are functional, responsive, and optimized for performance across different devices and browsers.",
      button: "Read More",
      route: "/developers",
      imageSrc: webDeveloper,
      imagePosition: "left",
    },
    {
      title: "Career Counselling",
      description:
        "Elevate your career with VR Company’s personalized counselling services. Our expert advisors guide you in exploring new opportunities, honing essential skills, and finding the right path for success. Unlock your full potential and take the next step toward achieving your professional goals.",
      button: "Read More",
      route: "/career",
      imageSrc: careerCouncelling,
    },
    {
      title: "Interview Preparation",
      description:
        "Interview preparation involves researching the company, understanding the job role, and practicing common interview questions. Focus on highlighting your skills, experience, and relevant achievements. Be ready to discuss your technical expertise, problem-solving abilities, and how you can add value to the team. Confidence and clear communication are key to success.",
      button: "Read More",
      route: "/interview",
      imageSrc: interviewPreparation,
      imagePosition: "left",
    },
    {
      title: "Resume Builder",
      description:
        "A Resume Builder is a tool designed to help users create professional resumes quickly and easily. It simplifies the process by providing pre-designed templates, guiding users through adding personal details, work experience, skills, and education. The tool ensures that the resume is well-structured and visually appealing, saving time and effort.",
      button: "Read More",
      route: "/resume",
      imageSrc: resumeBuilder,
    },
    {
      title: "Digital Marketing",
      description:
        "Digital marketing is a strategy used to promote products or services through digital channels like websites, social media, email, and search engines. It involves creating content, running ads, and analyzing data to reach targeted audiences, increase visibility, and drive customer engagement, ultimately boosting sales and brand awareness online.",
      button: "Read More",
      route: "/digitalmarketing",
      imageSrc: digitalMarketing,
      imagePosition: "left",
    },
  ];

  return (
    <PageComponent useMatter={true}>
      <ServicesCarousel />
      <div id="all_services_section">
        {servicesData.map((service, index) => (
          <ContentCard
            key={index}
            title={service.title}
            onClick={() => navigate(service.route)}
            description={service.description}
            button={service.button}
            imageSrc={service.imageSrc}
            imagePosition={service.imagePosition || "right"}
          />
        ))}
      </div>

      <Features
        style={{
          background: "transparent",
        }}
      />
      <Highlights
        style={{
          background: "transparent",
        }}
      />
      <Community
        style={{
          background: "transparent",
        }}
      />
       <GetInTouchService/>
    </PageComponent>
  );
}
