import React from 'react'
import PageComponent from '../../../../../components/pageComponent/PageComponent'
import GlobalFaq from '../../../../../components/faq/GlobalFaq'
import { useState } from 'react'
import GlobalContactForm from '../../../../../components/contact/GlobalContactForm'
import ContactResources from '../../../contactPage/Components/ContactResources'
import GetInTouchService from '../../../../../components/pageComponent/GetInTouchService'

const ResumeContactPage = () => {
    const [formData, setFormData] = useState({});

    const [formFields, setFormFields] = useState([
      {
        name: "firstName",
        label: "First Name",
        type: "text",
        required: true,
      },
      {
        name: "lastName",
        label: "Last Name",
        type: "text",
        required: true,
      },
      {
        name: "phone",
        label: "Phone",
        type: "number",
        required: true,
      },
      {
        name: "email",
        label: "Email Address",
        type: "email",
        required: true,
      },
      {
        name: "dateOfBirth",
        label: "D.O.B",
        type: "number",
        required: true,
      },
      {
        name: "higherQualification",
        label: "Higher Qualification",
        type: "text",
        required: true,
      },
      {
        name: "gender",
        label: "Gender",
        type: "select",
        required: true,
        options: [
          { value: "female", label: "Female" },
          { value: "male", label: "Male" },
        ],
      },
      {
        name: "profile",
        label: "Profile",
        type: "radio",
        options: [
          { value: "freshers", label: "Freshers" },
          { value: "experienced", label: "Experienced" },
        ],
        required: true,
      },
      {
        name: "address",
        label: "Address",
        type: "text",
      },
      {
        name: "experience",
        label: "Experience",
        type: "text",
      },
      {
        name: "socialLink",
        label: "Social Link",
        type: "url",
        required: true,
      },
      {
        name: "resume",
        label: "Resume",
        type: "file",
      },
    ]);

    const faqItems = [
        {
          id: 1,
          question: "How long should my resume be?",
          answer: "Ideally, a resume should be one to two pages long. Keep it concise by focusing on relevant experience and key achievements.",
        },
        {
          id: 2,
          question: "What information should I include in my resume?",
          answer: "Include your contact details, professional summary, work experience, education, and relevant skills. Customize each section based on the job you're applying for.",
        },
        {
          id: 3,
          question: "How do I tailor my resume to a specific job?",
          answer: "Highlight the most relevant experience and skills for the job. Use keywords from the job description to show you're a good fit.",
        },
        {
            id: 4,
            question: "How often should I update my resume?",
            answer: "Update your resume whenever you gain new skills or experience. It's a good practice to review it before applying for a new job opportunity.",
          },
      ];

      const handleInputChange = (name, value) => {
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
    
        if (name === "jobProfile" && value === "freshers") {
          setFormFields((prevFields) =>
            prevFields.map((field) =>
              field.name === "experience"
                ? { ...field, disabled: true, required: false }
                : field
            )
          );
        } else if (name === "jobProfile" && value === "experienced") {
          setFormFields((prevFields) =>
            prevFields.map((field) =>
              field.name === "experience"
                ? { ...field, disabled: false, required: true }
                : field
            )
          );
        }
      };
    
      const handleSubmit = (formData) => {
        console.log("Form submitted:", formData);
      };
    
    return (
        <>
            <PageComponent>
                <GlobalContactForm
                    fields={formFields}
                    onSubmit={handleSubmit}
                    initialFormData={formData}
                    title="Resume Writing Enrollment form"
                    description="Expert resume writing services to help you land your dream job."
                    onInputChange={handleInputChange}
                />
                <GlobalFaq
                    faqItems={faqItems}
                    id="resume-page-items"
                />
                 <ContactResources/>
                 <GetInTouchService/>
            </PageComponent>
        </>
    )
}

export default ResumeContactPage