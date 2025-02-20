import React, { useState } from 'react';
import GetInTouchService from '../../../../../../components/pageComponent/GetInTouchService';
import PageComponent from '../../../../../../components/pageComponent/PageComponent';
import GlobalContactForm from '../../../../../../components/contact/GlobalContactForm';
import GlobalFaq from '../../../../../../components/faq/GlobalFaq';
import ContactResources from '../../../../contactPage/Components/ContactResources';

const DevClientContactPage = () => {
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
        name: "serviceRequire",
        label: "Service Require",
        type: "text",
        required: true,
      },
      {
        name: "technology",
        label: "Technology",
        type: "text",
        required: true,
      },
      
      {
        name: "additional notes",
        label: "Additional notes",
        type: "text",
        required: true,
      },
      {
        name: "inspirationandreferences",
        label: "Inspiration and References",
        type: "url",
        required: true,
      },
      {
        name: "credentials",
        label: "credentials",
        type: "url",
        required: true,
    }
    ]);

    const faqItems = [
      {
        id: 1,
        question: "How long will it take to build my website?",
        answer: "The timeline depends on the complexity of the site. A simple website can take 2-3 weeks, while larger projects may take 4-6 weeks.",
      },
      {
        id: 2,
        question: "What do you need from me to get started?",
        answer: "We'll need your business goals, branding guidelines, content, and design preferences. These details ensure the website aligns with your vision.",
      },
      {
        id: 3,
        question: "Will my website be mobile-friendly and responsive?",
        answer: "Yes, all our websites are optimized for mobile devices and responsive to different screen sizes, providing a seamless user experience.",
      },
      {
        id: 4,
        question: "Do you offer ongoing maintenance after the website is live?",
        answer: "Yes, we offer flexible maintenance packages to ensure your website stays up-to-date, secure, and performs optimally over time.",
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
        title="Developer's Client Enrollment Form"
        description="Project Onboarding: Let's Build Your Digital Solution Together"
        onInputChange={handleInputChange}
      />
      <GlobalFaq
        faqItems={faqItems}
        id='dev-client-contact-page'
      />
      <ContactResources/>
    <GetInTouchService/>
    </PageComponent>
    </>
  )
}

export default DevClientContactPage;