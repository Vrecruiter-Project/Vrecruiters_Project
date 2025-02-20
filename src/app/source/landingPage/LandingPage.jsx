import React, { useState } from "react";
import GlobalContactForm from "../../components/contact/GlobalContactForm";
import GlobalFaq from "../../components/faq/GlobalFaq";
import PageComponent from "../../components/pageComponent/PageComponent";
import ContactResources from "../Pages/contactPage/Components/ContactResources";
import GetInTouchService from "../../components/pageComponent/GetInTouchService";

const LandingPage = () => {
  const [formData, setFormData] = useState({});

  const [formFields, setFormFields] = useState([
    {
      name: "fullName",
      label: "Full Name",
      type: "text",
      required: true,
    },
    {
      name: "age",
      label: "Age",
      type: "number",
      required: true,
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
      name: "experience",
      label: "Experience",
      type: "text",
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
      name: "jobRole",
      label: "Job Role",
      type: "text",
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
      question: "How do I register for an account?",
      answer: "Click 'Apply Now,' fill in your details, and follow the instructions to complete your registration process.",
    },
    {
      id: 2,
      question: "What documents are needed for registration?",
      answer: "You may need only your resume. The specific documents required will be listed during the registration process.",
    },
    {
      id: 3,
      question: "How long does the registration process take?",
      answer: "Registration typically takes 10–15 minutes, depending on the information and documents you need to provide.",
    },
    {
      id: 4,
      question: "What happens after I submit my registration?",
      answer: "After submitting, you’ll receive a confirmation email, and our team will review your application within 1-2 business days.",
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
          title="Registration form"
          onInputChange={handleInputChange}
        />
        <GlobalFaq faqItems={faqItems} id="landing-page-items" />
        <ContactResources/>
        <GetInTouchService/>
      </PageComponent>
    </>
  );
};

export default LandingPage;
