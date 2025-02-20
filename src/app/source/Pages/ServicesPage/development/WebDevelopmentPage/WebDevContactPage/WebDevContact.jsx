import React, { useState } from 'react';
import GetInTouchService from '../../../../../../components/pageComponent/GetInTouchService';
import PageComponent from '../../../../../../components/pageComponent/PageComponent';
import GlobalContactForm from '../../../../../../components/contact/GlobalContactForm';
import GlobalFaq from '../../../../../../components/faq/GlobalFaq';
import ContactResources from '../../../../contactPage/Components/ContactResources';

const WebDevContact = () => {
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
        name: "technologies",
        label: "Technologies",
        type: "text",
      },
      {
        name: "experience",
        label: "Experience",
        type: "text",
      },
      {
        name: "yourDesignLink",
        label: "Your Design Link",
        type: "url",
        required: true,
      },
      {
        name: "linkedIn",
        label: "LinkedIn",
        type: "url",
        required: true,
      },
      {
        name: "github",
        label: "Github",
        type: "url",
        required: true,
      },
      {
        name: "yourPortfolio",
        label: "Your Portfolio",
        type: "url",
        required: true,
      },
      {
        name: "address",
        label: "Address",
        type: "text",
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
        question: "What skills do I need to become a web developer?",
        answer: "You need HTML, CSS, JavaScript, and knowledge of frameworks like React. Experience in backend technologies like Node.js is also beneficial.",
      },
      {
        id: 2,
        question: "How long does it take to learn web development?",
        answer: "It depends on your dedication. Typically, with consistent learning, you can grasp fundamental concepts within 6 to 12 months",
      },
      {
        id: 3,
        question: "What career opportunities are available for web developers?",
        answer: "Web developers can work in areas like frontend, backend, full-stack development, or specialize in frameworks and technologies.",
      },
      {
        id: 4,
        question: "Do I need a degree to become a web developer?",
        answer: "No, a degree isn’t necessary. Many web developers are self-taught through online courses, bootcamps, or by building projects to showcase their skills.",
      },
    ];
  
    const handleInputChange = (name, value) => {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
  
      if (name === "profile" && value === "freshers") {
        setFormFields((prevFields) =>
          prevFields.map((field) =>
            field.name === "experience"
              ? { ...field, disabled: true, required: false }
              : field
          )
        );
      } else if (name === "profile" && value === "experienced") {
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
        title="Web Developer Enrollment Page"
        description='Reach out for queries, assistance, or collaboration opportunities'
        onInputChange={handleInputChange}
      />
      <GlobalFaq
        faqItems={faqItems}
        id='webDev-contact-page'
      />
      <ContactResources/>
    <GetInTouchService/>
    </PageComponent>
    </>
  )
}

export default WebDevContact;