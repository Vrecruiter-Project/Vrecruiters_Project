import ContentCard from "../../../../../components/pageComponent/ContentCard";
import PageComponent from "../../../../../components/pageComponent/PageComponent";
import CandidateFrontPage from "./Components/CandidateFrontPage";
import ProfileCarousel from "../../../../../components/pageComponent/ProfileCarousel";
import Designer from "../../../../../assests/images/jobroles/designer.jpg";
import Developer from "../../../../../assests/images/jobroles/developer.jpg";
import DataEntry from "../../../../../assests/images/jobroles/dataEntry.jpg";
import BDA from "../../../../../assests/images/jobroles/business.jpg";
import HumanResources from "../../../../../assests/images/jobroles/humanResources.jpg";
import GraphicDesigner from "../../../../../assests/images/jobroles/graphic.jpg";
import Reactjsdev from "../../../../../assests/images/jobroles/reactjsdev.jpg";
// import UserTestimonial from "../../../home/components/UserTestimonial";
export default function CandidatesPage() {

  const candidateContent = [
    {
      title: "Find Your Dream Job Today",
      description:
        "Discover thousands of job opportunities tailored to your skills and career goals. Our job search platform connects you with top employers in various industries, helping you find the perfect job that fits your experience and aspirations. Start your job search today and take the next step in your career.",
    },
    {
      title: "Unlock New Career Opportunities",
      description:
        "Whether you're looking for entry-level positions or advanced career opportunities, our job portal offers a diverse range of jobs. Easily search for jobs in your field, apply online, and connect with companies that value your unique skills. Unlock your potential and take charge of your professional growth with our career portal.",
    },
    {
      title: "Discover Jobs That Fit Your Skills",
      description:
        "Our job search engine connects you with positions that match your skills and experience. Find job opportunities that align with your qualifications and interests, and easily apply for the positions that best suit your career path. Discover your next job today and elevate your professional journey.",
    },
  ];

  const items = [
    {
      bgColor: "#00732E",
      image: Designer,
      title: "Web Designer",
      description:
        "Looking for a talented web designer to create engaging and user-friendly websites, ensuring optimal performance, responsiveness, and aesthetics. Must have strong skills in HTML, CSS, JavaScript, and design software.",
    },
    {
      bgColor: "#FF7640",
      image: GraphicDesigner,
      title: "Graphic Designer",
      description:
        "Seeking a creative Graphic Designer with expertise in digital and print media, responsible for producing visually compelling designs to enhance our brand and marketing efforts.",
    },
    {
      bgColor: "#003912",
      image: Reactjsdev,
      title: "React.js Developer",
      description:
        "Seeking a skilled React.js developer to join our team, responsible for building and optimizing dynamic web applications. Must have experience in JavaScript, front-end development, and responsive design.",
    },
    {
      bgColor: "#4D1727",
      image: BDA,
      title: "BDA",
      description:
        "Our company provides Business Data Analytics services, offering actionable insights through advanced data analysis, helping clients make informed decisions, optimize operations, and drive growth.",
    },
    {
      bgColor: "#687200",
      image: DataEntry,
      title: "Data Entry",
      description:
        "Efficiently input and manage data, ensuring accuracy and confidentiality. Handle various data entry tasks, update records, and support administrative functions for seamless company operations.",
    },
    {
      bgColor: "#421300",
      image: Developer,
      title: "Web Developer",
      description:
        "Seeking a skilled web developer to create, optimize, and maintain responsive websites. Must be proficient in HTML, CSS, JavaScript, and frameworks. Strong problem-solving skills and teamwork required.",
    },
    {
      bgColor: "#8F2900",
      image: HumanResources,
      title: "Human Resources",
      description:
        "Seeking an HR Specialist to manage recruitment, employee relations, and compliance. Must have strong communication skills and experience in talent acquisition. Join us to shape our company's culture and growth.",
    },
  ];

  return (
    <PageComponent>
      <CandidateFrontPage />
      {candidateContent.map((content, index) => (
        <ContentCard
          key={index}
          title={content.title}
          description={content.description}
        />
      ))}
      <ProfileCarousel items={items} />
     {/* <UserTestimonial/> */}
    </PageComponent>
  );
}
