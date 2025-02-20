import React, { useState } from 'react';
import GetInTouchService from '../../../../../../components/pageComponent/GetInTouchService';
import PageComponent from '../../../../../../components/pageComponent/PageComponent';
import GlobalContactForm from '../../../../../../components/contact/GlobalContactForm';
import GlobalFaq from '../../../../../../components/faq/GlobalFaq';
import ContactResources from '../../../../contactPage/Components/ContactResources';

const DesClientContactPage = () => {
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
        question: "How long does it take to design a website?",
        answer: "The timeline varies, typically taking 2-6 weeks depending on the project's complexity, revisions, and how quickly you provide necessary content.",
      },
      {
        id: 2,
        question: "What is the cost of designing a website?",
        answer: "Costs depend on your requirements, starting from a few hundred dollars for a basic site to more for custom features and functionality.",
      },
      {
        id: 3,
        question: "Will my website be mobile-friendly?",
        answer: "Yes, all our websites are fully responsive, meaning they will adjust and look great on mobile, tablet, and desktop devices.",
      },
      {
        id: 4,
        question: "Do you offer ongoing website maintenance?",
        answer: "Yes, we provide maintenance packages to ensure your website stays updated, secure, and running smoothly after launch.",
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
        title="Designer's Client Enrollment Form"
        description='Creative Brief: Share Your Vision for a Stunning Design'
        onInputChange={handleInputChange}
      />
      <GlobalFaq
        faqItems={faqItems}
        id='des-client-contact-page'
      />
      <ContactResources/>
    <GetInTouchService/>
    </PageComponent>
    </>
  )
}

export default DesClientContactPage;