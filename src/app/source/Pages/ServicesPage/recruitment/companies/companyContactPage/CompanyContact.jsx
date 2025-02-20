import React from 'react'
import GlobalContactForm from '../../../../../../components/contact/GlobalContactForm'
import PageComponent from '../../../../../../components/pageComponent/PageComponent'
import GlobalFaq from '../../../../../../components/faq/GlobalFaq'
import { useState } from 'react'
import ContactResources from '../../../../contactPage/Components/ContactResources'
import GetInTouchService from '../../../../../../components/pageComponent/GetInTouchService'

const CompanyContact = () => {
    const [formData, setFormData] = useState({});

    const [formFields, setFormFields] = useState([
        {
            name: "companyName",
            label: "Company Name",
            type: "text",
            required: true,
        },
        {
            name: "mobile",
            label: "Mobile",
            type: "number",
            required: true,
        },
        {
            name: "email",
            label: "Email",
            type: "email",
            required: true,
        },
        {
            name: "yourProfile",
            label: "Your Profile",
            type: "text",
            required: true,
        },
        {
            name: "requirements",
            label: "Requirements",
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
            name: "jobProfile",
            label: "Job Profile",
            type: "radio",
            options: [
              { value: "freshers", label: "Freshers" },
              { value: "experienced", label: "Experienced" },
            ],
            required: true,
          },

          {
            name: "modeOfInterview",
            label: "Mode  of Interview",

            type: "select",
            required: true,
            options: [
              { value: "online", label: "Online" },
              { value: "offline", label: "Offline" },
            ],
          },
          
        {
            name: "whatsappNumber",
            label: "WhatsApp Number",
            type: "text",
            validation: {
                regex: /^\d{10}$/,
                message: "Invalid WhatsApp Number",
            },
        },
        {
            name: "jobLocation",
            label: "Job Location",
            type: "text",
        },
        {
            name: "remarks",
            label: "Remarks",
            type: "text",
        }
    ]);

    const faqItems = [
        {
          id: 1,
          question: "How can I post a job for my company?",
          answer: "You can easily post a job by creating an employer account, navigating to the 'Post a Job' section, and filling in the required details.",
        },
        {
          id: 2,
          question: "What services do you offer to help with recruitment?",
          answer: "We offer end-to-end recruitment services, including candidate sourcing, screening, interviewing, and onboarding support to streamline your hiring process.",
        },
        {
          id: 3,
          question: "How long does it take to find a candidate?",
          answer: "The timeline varies based on job complexity, but we typically present qualified candidates within 1-2 weeks of starting the recruitment process.",
        },
        {
            id: 4,
            question: "What are the costs for your recruitment services?",
            answer: "Our pricing depends on the recruitment package you select. Contact us for a custom quote based on your specific hiring needs.",
          },
          {
            id: 5,
            question: "How do you ensure candidate quality and fit?",
            answer: "We thoroughly screen candidates through background checks, skill assessments, and interviews to ensure they meet your company's job requirements and culture.",
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
                    title="Employer Registraion form"
                    description="Kindly complete the registration form to find talented candidate"
                    onInputChange={handleInputChange}
                />
                <GlobalFaq
                    faqItems={faqItems}
                    id="company-page-items"
                />
                  <ContactResources/>
                  <GetInTouchService/>
            </PageComponent>
        </>
    )
}

export default CompanyContact