import React from 'react';
import GetInTouchService from '../../../../components/pageComponent/GetInTouchService';
import PageComponent from '../../../../components/pageComponent/PageComponent';
import HumanResourcesFrontPage from './Components/HumanResourcesFrontPage';
import GrowthImg from "../../../../assests/images/humanRGrowth.png";
import TimeAttendanceImage from "../../../../assests/images/timeAttendance.png";
import CompensationImage from "../../../../assests/images/compensation.png";
import PerformanceImage from "../../../../assests/images/performance.png";
import GlobalHrSection from '../../../../components/pageComponent/GlobalHrSection';
import { Box } from '@mui/material';
import OpportunitySection from './Components/OpportunitySection';
import ServicesCount from '../../../../components/pageComponent/ServicesCount';
import GlobalFaq from '../../../../components/faq/GlobalFaq';
import CompanyCarousel from '../recruitment/companies/Components/CompanyCarousel';


const HumanResources = () => {

  const hrListItems = [
    {
      title: "People Analytics",
      description: "  V Recruiter excellence with bob's in-depth people analytics. Vrecruiters gives you access to insightful data, helping HR facilitate data-driven decision-making.",
      content: [
        "Drive HR excellence with Vrecruiters in-depth people analytics. Vrecruiters gives you access to insightful data, helping HR facilitate data-driven decision-making.",
        "View Your KPIs with streamlined dashboards for essential metrics like headcount, growth, and retention.",
        "Discover compelling information about your workforce trends using calculated averages.",
        "Use key indicators to identify and retain employees at risk of attrition.",
      ],
      image: GrowthImg,
      reverse: false,
    },
    {
      title: "Time And Attendance",
      description: "V Recruiter time and attendance features helps to streamline tracking and managing your employees’ work hours, providing a user-friendly interface for employees, managers, and hr leaders.",
      content: [
        "Empower your people to log their hours, manually edit enteries, and view comprehensive summaries of their monhly activites",
        "Allow your managers to easily review and approve team hours, identify any missing information, and create detaild attendance reports that seamlessly integrate with payroll.",
        "Enable flexible tracking options, support multiple clock-ins/- outs per day, make retroactive edits, and directly integrate with tools such as salack and microsoft teams.",
        "View Insights into your team’s attendance patterns through customizable repots, allowing you to note clock -in/out times, average daily such as slack and microsoft teams.",
      ],
      image: TimeAttendanceImage,
      reverse: true,
    },
    {
      title: "Compensation",
      description: "V Recruiter HR Compensation simplifies managing employee salaries, bonuses, and benefits with an intuitive platform, empowering HR teams to ensure fair and accurate compensation.",
      content: [
        "Sllie provides a comprehensive and intuitive compensation solution, helping hr leaders to simplify their global compensation management, centralize their essential data.......",
        "Allow your stakeholders immediate access to the most up-to-date data on salaries, tenure, and performance, eliminating the need for endless spreadsheets.",
        "Support multi-currency management, localized views, and local salary benchmarks - ideal for fast-growing, international companies.",
        "Empower managers to make data-driven decisions with vital data, helping them to identify high performers, flight risks, and pay parity issues.",
      ],
      image: CompensationImage,
      reverse: false,
    },
    {
      title: "Performance",
      description: "Drive your team's performance with a comprehensive solution that facilitates employee growth and success. bob offers a holistic, 360-degree view of performance, streamlining the review process and promoting team development.",
      content: [
        "Centralize and simplify your performance review process, incorporating comprehensive employee data for unbiased, data-driven evaluations.",
        "Stay in control with customizable settings, progress tracking, and the ability to determine which stakeholders participate in each review cycle. set clear, attainable goals to support company-wide strategies as part of a team, department, or as an individual, helping to promote alignment and progress.",
        "Use sllie's 1-on-1s to facilitate ongoing feedback and dialogue with your team, helping to boost employee retention.",
      ],
      image: PerformanceImage,
      reverse: true,
    },
  ];

  const faqItems = [
    {
      id: 1,
      question: "What is the role of Human Resources ?",
      answer: "Human Resources manages employee recruitment, benefits, performance, and workplace policies, ensuring a productive and supportive work environment.",
    },
    {
      id: 2,
      question: "How can I apply for a job at your company?",
      answer: "You can apply by visiting our contact page, selecting a Human Resources position, and submitting your resume and application online.",
    },
    {
      id: 3,
      question: "What should I include in my resume ?",
      answer: "Your resume should highlight your skills, relevant experience, education, and any accomplishments that align with the job you're applying for.",
    },
    {
        id: 4,
        question: "Is there an opportunity for professional development ?",
        answer: "Yes, our company offers various training programs and development opportunities to help employees grow in their careers.",
      },
  ];


  return (
    <>
      <PageComponent>
        <HumanResourcesFrontPage />
        {
          hrListItems.map((item, index) => (
            <Box key={index}>
              <GlobalHrSection
                title={item.title}
                description={item.description}
                content={item.content}
                image={item.image}
                reverse={item.reverse}
              />
            </Box>
          ))
        }
        <OpportunitySection />
        <GlobalFaq
          faqItems={faqItems}
          id="digital-marketing-page-items"
        />
        <CompanyCarousel/>
        <ServicesCount />
        <GetInTouchService />
      </PageComponent>
    </>
  )
}

export default HumanResources;