import React from 'react'
import GlobalContactForm from '../../../../../../components/contact/GlobalContactForm'
import PageComponent from '../../../../../../components/pageComponent/PageComponent'
import GlobalFaq from '../../../../../../components/faq/GlobalFaq'
import { useState } from 'react'
import ContactResources from '../../../../contactPage/Components/ContactResources'
import GetInTouchService from '../../../../../../components/pageComponent/GetInTouchService'

const CandidateContact = () => {
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
          question: "How do I submit my application for enrollment?",
          answer: "You can submit your application by filling out the enrollment form and clicking the Submit button after entering all required information.",
        },
        {
          id: 2,
          question: "What documents do I need for enrollment?",
          answer: "You will need a valid ID, updated resume, and any supporting certificates to complete your enrollment application successfully.",
        },
        {
          id: 3,
          question: "Can I update my information after submitting the form?",
          answer: "No, you can't update your details.",
        },
        {
            id: 4,
            question: "How long does the enrollment process take?",
            answer: "The process usually takes 1 to 3 days, depending on how quickly you provide the necessary documents and complete the form.",
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
                    title="Candidate Enrollment form"
                    description="Efficiently register as a candidate by providing your essential details to gain access to potential job opportunities."
                    onInputChange={handleInputChange}
                />
                <GlobalFaq
                    faqItems={faqItems}
                    id="candidate-page-items"
                />
                   <ContactResources/>
                   <GetInTouchService/>
            </PageComponent>
        </>
    )
}

export default CandidateContact