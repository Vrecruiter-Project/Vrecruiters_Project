import React from 'react'
import PageComponent from '../../../../../components/pageComponent/PageComponent'
import GlobalFaq from '../../../../../components/faq/GlobalFaq'
import { useState } from 'react'
import GlobalContactForm from '../../../../../components/contact/GlobalContactForm'
import ContactResources from '../../../contactPage/Components/ContactResources'
import GetInTouchService from '../../../../../components/pageComponent/GetInTouchService'

const InterviewContactPage = () => {
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
          question: "How can I prepare for a technical interview?",
          answer: "Focus on coding problems, algorithms, and system design. Practice with mock interviews and review past interview questions for your target company.",
        },
        {
          id: 2,
          question: "What information should I include in my resume?",
          answer: "Highlight relevant skills, experience, and projects. Use clear formatting and tailor it to the specific job you're applying for.",
        },
        {
          id: 3,
          question: "How can I improve my interview skills?",
          answer: "Practice common questions, research the company, and use mock interviews to build confidence and refine your answers.",
        },
        {
            id: 4,
            question: "How should I handle behavioral interview questions?",
            answer: "Use the STAR method (Situation, Task, Action, Result) to structure your responses and provide specific examples from your past experiences.",
          },
          {
            id: 5,
            question: "What questions should I ask the interviewer?",
            answer: "Inquire about team dynamics, company culture, and growth opportunities to show your interest and assess if the role fits your goals.",
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
                    title="Interview Preparation Enrollment form"
                    description="Join our interview prep program to boost confidence and skills"
                    onInputChange={handleInputChange}
                />
                <GlobalFaq
                    faqItems={faqItems}
                    id="interview-page-items"
                />
                 <ContactResources/>
                 <GetInTouchService/>
            </PageComponent>
        </>
    )
}

export default InterviewContactPage