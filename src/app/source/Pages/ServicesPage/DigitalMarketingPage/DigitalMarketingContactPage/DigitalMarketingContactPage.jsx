import React from 'react'
import PageComponent from '../../../../../components/pageComponent/PageComponent'
import GlobalFaq from '../../../../../components/faq/GlobalFaq'
import { useState } from 'react'
import GlobalContactForm from '../../../../../components/contact/GlobalContactForm'
import ContactResources from '../../../contactPage/Components/ContactResources'
import GetInTouchService from '../../../../../components/pageComponent/GetInTouchService'

const DigitalMarketingContactPage = () => {
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
          question: "How can I start a digital marketing campaign?",
          answer: "To start, define your goals, target audience, and budget. Contact us for a customized strategy tailored to your business needs.",
        },
        {
          id: 2,
          question: "What services do you offer in digital marketing?",
          answer: "We offer SEO, PPC, content marketing, social media management, and email marketing to boost your online presence and drive results.",
        },
        {
          id: 3,
          question: "How do you measure the success of digital marketing efforts?",
          answer: "Success is measured through metrics like website traffic, conversion rates, and ROI. We provide detailed reports to track your campaign’s performance.",
        },
        {
            id: 4,
            question: "What is the typical timeline for seeing results?",
            answer: "Results vary by strategy, but generally, you can expect to see noticeable improvements within 3 to 6 months with consistent effort.",
          },
          {
            id: 5,
            question: "How much does digital marketing cost?",
            answer: "Costs depend on your goals and chosen services. We offer flexible pricing options to fit various budgets. Contact us for a detailed quote.",
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
                    title="Digital Marketing Enrollment form"
                    description="Join our digital marketing course: Transform skills into impactful strategies!"
                    onInputChange={handleInputChange}
                />
                <GlobalFaq
                    faqItems={faqItems}
                    id="digital-marketing-page-items"
                />
                 <ContactResources/>
                 <GetInTouchService/>
            </PageComponent>
        </>
    )
}

export default DigitalMarketingContactPage