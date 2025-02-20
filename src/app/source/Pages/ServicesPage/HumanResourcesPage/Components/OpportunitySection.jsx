import React from 'react';
import GlobalMultiCards from '../../../../../components/pageComponent/GlobalMultiCards';

export default function OpportunitySection() {

    const cardData = [
        { title: 'FRONTEND DEVELOPER', description: 'Seeking a skilled React.js developer to join our team, responsible for building and optimizing dynamic web applications. Must have experience in JavaScript, front-end development, and responsive design.' },
        { title: 'BACKEND DEVEOPER', description: 'A Backend Developer is responsible for server-side development, focusing on the logic, database interactions, and application functionality that users don’t see. They work with server technologies, APIs, and databases to manage data exchange between the server and clients.' },
        { title: 'WEB DEVELOPER', description: 'A Web Developer designs, builds, and maintains websites and web applications, working across both frontend and backend development. They utilize technologies like HTML, CSS, JavaScript, and various backend languages to create responsive, user-friendly interfaces and robust server-side functionality.' },
        { title: 'WEB DESIGNER', description: 'A Web Designer focuses on the visual aesthetics and usability of websites, creating engaging layouts and user interfaces. They use design tools like Figma, Adobe XD, or Sketch to develop wireframes and prototypes that align with user experience principles.' },
        { title: 'GRAPHIC DESIGNER', description: 'A Graphic Designer creates visual content to communicate messages and ideas effectively. They use design software like Adobe Creative Suite to produce graphics, illustrations, logos, and layouts for print and digital media' },
        { title: 'DATA ENTRY', description: "A Data Entry Specialist is responsible for accurately inputting and managing data into databases, spreadsheets, or other digital systems. They ensure data is organized, up-to-date, and error-free by maintaining attention to detail and following company protocols." },
        { title: 'DOCUMENT VERIFICATION', description: 'Document Verification involves the process of assessing and validating the authenticity of various documents to ensure they meet legal and organizational standards. This includes checking for accuracy, completeness, and compliance with regulations.' },
        { title: 'TELECALLER', description: "A Telecaller is a professional who makes outbound calls to potential customers or clients to promote products, services, or campaigns. They engage prospects through effective communication, provide information, and address inquiries or concerns." },
        { title: 'HUMAN RESOURCES', description: 'Human Resources (HR) is a department that manages an organization’s workforce, focusing on recruitment, employee relations, training, benefits, and compliance with labor laws. HR professionals develop policies to enhance workplace culture, support employee development' },
    ];


    return (
        <>
        <GlobalMultiCards 
        cardData={cardData} 
        MainTitle = "Career Opportunities"
         />
        </>
    );
}
