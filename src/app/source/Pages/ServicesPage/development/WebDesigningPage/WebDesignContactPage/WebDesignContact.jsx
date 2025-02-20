import React, { useState } from 'react';
import GetInTouchService from '../../../../../../components/pageComponent/GetInTouchService';
import PageComponent from '../../../../../../components/pageComponent/PageComponent';
import GlobalContactForm from '../../../../../../components/contact/GlobalContactForm';
import GlobalFaq from '../../../../../../components/faq/GlobalFaq';
import ContactResources from '../../../../contactPage/Components/ContactResources';

const WebDesignContact = () => {
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
        question: "What qualifications are needed to enroll as a web designer?",
        answer: "You should have experience in HTML, CSS, and JavaScript, and a good understanding of design principles and responsive web development.",
      },
      {
        id: 2,
        question: "How long does the web designer training program take?",
        answer: "The program typically lasts 3 to 6 months, depending on your pace and prior experience in web design and development.",
      },
      {
        id: 3,
        question: "Is prior coding experience required to enroll in the course?",
        answer: "Basic knowledge of coding is helpful, but not mandatory. We provide training on the essential coding languages used in web design.",
      },
      {
        id: 4,
        question: "Will I get a certificate upon completing the web design course?",
        answer: "Yes, upon successful completion, you'll receive a recognized certification, which can boost your job prospects in the web design industry.",
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
        title="Web Designer Enrollment Page"
        description='Reach out for queries, assistance, or collaboration opportunities'
        onInputChange={handleInputChange}
      />
      <GlobalFaq
        faqItems={faqItems}
        id='designers-contact-page'
      />
      <ContactResources/>
    <GetInTouchService/>
    </PageComponent>
    </>
  )
}

export default WebDesignContact;