import React from 'react'
import PageComponent from '../../../../../components/pageComponent/PageComponent'
import GlobalFaq from '../../../../../components/faq/GlobalFaq'
import { useState } from 'react'
import GlobalContactForm from '../../../../../components/contact/GlobalContactForm'
import ContactResources from '../../../contactPage/Components/ContactResources'
import GetInTouchService from '../../../../../components/pageComponent/GetInTouchService'

const CareerCouncellingContact = () => {
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
          question: "How do I schedule a career counseling session?",
          answer: "You can schedule a session by filling out our contact form or calling us directly. We'll confirm your appointment shortly.",
        },
        {
          id: 2,
          question: "What services do you offer in career counseling?",
          answer: "We provide guidance on career paths, resume building, interview preparation, and skill development to help you achieve your professional goals.",
        },
        {
          id: 3,
          question: "Is there a fee for career counseling services?",
          answer: "Yes, our career counseling services have a fee. However, we offer affordable packages tailored to meet individual needs. Contact us for more details.",
        },
        {
            id: 4,
            question: "How can career counseling help me find the right job?",
            answer: "Our counseling identifies your strengths, interests, and career goals, offering personalized advice to help you align with the right job opportunities.",
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
                    title="Career Councelling Enrollment form"
                    description="Register for career counseling to explore and enhance your career."
                    onInputChange={handleInputChange}
                />
                <GlobalFaq
                    faqItems={faqItems}
                    id="career-page-items"
                />
                 <ContactResources/>
                 <GetInTouchService/>
            </PageComponent>
        </>
    )
}

export default CareerCouncellingContact