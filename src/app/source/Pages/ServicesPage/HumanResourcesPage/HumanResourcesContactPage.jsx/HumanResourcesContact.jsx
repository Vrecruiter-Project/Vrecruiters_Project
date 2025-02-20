import React from 'react'
import PageComponent from '../../../../../components/pageComponent/PageComponent'
import { useState } from 'react'
import GlobalContactForm from '../../../../../components/contact/GlobalContactForm'
import GetInTouchService from '../../../../../components/pageComponent/GetInTouchService'

const HumanResourcesContactPage = () => {
    const [formData, setFormData] = useState({});

    const [formFields, setFormFields] = useState([
      {
        name: "fullName",
        label: "Full Name",
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
                    title="Human Resources Enrollment form"
                    description="Connect with us! Your feedback is vital for shaping our workplace and enhancing employee experience."
                    onInputChange={handleInputChange}
                />
                 <GetInTouchService/>
            </PageComponent>
        </>
    )
}

export default HumanResourcesContactPage