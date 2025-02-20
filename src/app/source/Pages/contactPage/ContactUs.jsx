import React from 'react'
import PageComponent from '../../../components/pageComponent/PageComponent'
import ContactUsFrontPage from './Components/ContactUsFrontPage'
import GlobalContactForm from '../../../components/contact/GlobalContactForm'
import GlobalFaq from '../../../components/faq/GlobalFaq'
import GetInTouchService from '../../../components/pageComponent/GetInTouchService'
import { useState } from 'react'
import ContactResources from './Components/ContactResources';

const ContactUs = () => {
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
            name: "email",
            label: "Email Address",
            type: "email",
            required: true,
          },
          {
            name: "phone",
            label: "Phone",
            type: "number",
            required: true,
          },
        {
          name: "message",
          label: "Message",
          type: "text",
        },
      ]);
    
      const faqItems = [
        {
          id: 1,
          question: "How can I reach customer support?",
          answer: "You can email us at vrecruitersofficial@gmail.com or call 9518035030 for assistance.",
        },
        {
          id: 2,
          question: "What are your business hours?",
          answer: "We’re available Monday to Sunday, 9 AM – 6 PM (EST), excluding public holidays.",
        },
        {
          id: 3,
          question: "How quickly do you respond to inquiries?",
          answer: "We typically respond within 24 hours during business days",
        },
        {
            id: 4,
            question: "Can I schedule a consultation?",
            answer: "Yes, please use our scheduling tool or contact us to book a consultation.",
          },
          {
            id: 5,
            question: "Do you offer support in multiple languages?",
            answer: "Absolutely! Our team speaks several languages to help you in the one you’re most comfortable with.",
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
        <ContactUsFrontPage/>
        <GlobalContactForm
            fields={formFields}
            onSubmit={handleSubmit}
            initialFormData={FormData}
            title= "GET IN TOUCH"
            description= "How can we help? Send us a message" 
            onInputChange={handleInputChange}
        />
        <GlobalFaq
            faqItems={faqItems}
            id= "contact-page"
        />
        <ContactResources/>
        <GetInTouchService/>

        </PageComponent>
    </>
  )
}

export default ContactUs