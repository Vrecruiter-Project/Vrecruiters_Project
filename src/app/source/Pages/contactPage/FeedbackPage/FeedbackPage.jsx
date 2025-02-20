import React from 'react'
import PageComponent from '../../../../components/pageComponent/PageComponent'
import { useState } from 'react'
import ContactResources from '../Components/ContactResources'
import GetInTouchService from '../../../../components/pageComponent/GetInTouchService'
import GlobalContactForm from '../../../../components/contact/GlobalContactForm'

const FeedbackPage = () => {
    const [formData, setFormData] = useState({});

    const [formFields, setFormFields] = useState([
        {
            name: "name",
            label: "Name",
            type: "text",
            required: true,
        },
        {
            name: "hiringStatus",
            label: "Hiring Status",
            type: "text",
            required: true,
        },
        {
            name: "yourProfile",
            label: "Your Profile",
            type: "text",
            required: true,
        },
        {
          name: "linkedinProfile",
          label: "LinkedIn Profile",
          type: "url",
          required: true,
        },
        {
          name: "yourValuableFeedback",
          label: "Your Valuable Feedback",
          type: "text",
          required: true,
        },
    ]);

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
                    title="Feedback form"
                    description="Provide your valuable feedback to help us improve our services."
                    onInputChange={handleInputChange}
                />
                <ContactResources/>
                <GetInTouchService/>
            </PageComponent>
        </>
    )
}

export default FeedbackPage;