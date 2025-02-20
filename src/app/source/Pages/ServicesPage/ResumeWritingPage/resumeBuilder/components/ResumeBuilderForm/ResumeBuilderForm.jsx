import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Container,
} from "@mui/material";
import { useAtom } from "jotai";
import { resumedataatom } from "../../../../../../../assests/globalvars/resumebuildatom";
import BasicDetailsSection from "./Components/BasicDetailsSection";
import EducationSection from "./Components/EducationSection";
import WorkExperienceSection from "./Components/WorkExperienceSection";
import ProjectsSection from "./Components/ProjectsSection";
import SkillsSection from "./Components/SkillsSection";
import CustomSection from "./Components/CustomSection";

const formSchema = z.object({
  basicDetails: z.object({
    image: z.any(),
    name: z
      .string()
      .min(1, "Name is required")
      .max(15, "Name is required"),
    profession: z
      .string()
      .min(1, "Profession is required") // Added profession field
      .max(15, "Profession is required"), // Added profession field
    objective: z.string(),
    email: z.string().email("Invalid email format"),
    phone: z
      .string()
      .min(10, "Invalid Phone Number")
      .max(10, "Invalid Phone Number"),
    address: z
      .string()
      .min(1, "Address is required")
      .max(20, "Address is required"),
    website: z.string().url("Invalid URL format"), // Added website field
  }),
  education: z.array(
    z.object({
      degree: z.string().min(1, "Degree is required"),
      institution: z.string().min(1, "Institution is required"),
      year: z.string().min(4, "Year must be valid"),
    })
  ),
  workExperience: z.array(
    z.object({
      position: z.string().min(1, "Position is required"),
      company: z.string().min(1, "Company is required"),
      duration: z.string().min(1, "Duration is required"),
    })
  ),
  projects: z.array(
    z.object({
      title: z.string().min(1, "Project title is required"),
      description: z.string().min(1, "Project description is required"),
    })
  ),
  skills: z.array(
    z.object({
      skill: z.string().min(1, "Skill is required"),
    })
  ),
  customSections: z.array(
    z.object({
      sectionName: z.string().min(1, "Section name is required"),
      content: z.string().min(1, "Content is required"),
    })
  ),
});

function ResumeBuilderForm({ sectionHeadings, handleHeadingChange }) {
  const [resumeFormData, setResumeFormData] = useAtom(resumedataatom);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      basicDetails: {
        image: null,
        name: "",
        profession: "", // Added profession default value
        objective: "",
        email: "",
        phone: "",
        address: "",
        website: "", // Added website default value
      },
      education: [{ degree: "", institution: "", year: "" }],
      workExperience: [{ position: "", company: "", duration: "" }],
      projects: [{ title: "", description: "" }],
      skills: [{ skill: "" }],
      customSections: [{ sectionName: "", content: "" }],
    },
  });

  const {
    fields: educationFields,
    append: appendEducation,
    remove: removeEducation,
  } = useFieldArray({
    control,
    name: "education",
  });

  const {
    fields: workExperienceFields,
    append: appendWorkExperience,
    remove: removeWorkExperience,
  } = useFieldArray({ control, name: "workExperience" });

  const {
    fields: projectFields,
    append: appendProjects,
    remove: removeProjects,
  } = useFieldArray({
    control,
    name: "projects",
  });

  const {
    fields: skillFields,
    append: appendSkills,
    remove: removeSkills,
  } = useFieldArray({
    control,
    name: "skills",
  });

  const {
    fields: customSectionFields,
    append: appendCustomSections,
    remove: removeCustomSections,
  } = useFieldArray({ control, name: "customSections" });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  const handleOnChange = (name, value) => {
    setResumeFormData(watch());
  };

  return (
    <Container>
      <form
        className="flex flex-col space-y-20"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Basic Details */}
        <BasicDetailsSection
          control={control}
          errors={errors}
          sectionHeadings={sectionHeadings}
          handleHeadingChange={handleHeadingChange}
          handleOnChange={handleOnChange}
        />

        {/* Education Section */}
        <EducationSection
          control={control}
          errors={errors}
          sectionHeadings={sectionHeadings}
          handleHeadingChange={handleHeadingChange}
          handleOnChange={handleOnChange}
          educationFields={educationFields}
          removeEducation={removeEducation}
          appendEducation={appendEducation}
        />

        {/* Work Experience Section */}
        <WorkExperienceSection
          control={control}
          errors={errors}
          sectionHeadings={sectionHeadings}
          handleHeadingChange={handleHeadingChange}
          handleOnChange={handleOnChange}
          workExperienceFields={workExperienceFields}
          removeWorkExperience={removeWorkExperience}
          appendWorkExperience={appendWorkExperience}
        />

        {/* Projects Section */}
        <ProjectsSection
          control={control}
          errors={errors}
          sectionHeadings={sectionHeadings}
          handleHeadingChange={handleHeadingChange}
          handleOnChange={handleOnChange}
          projectFields={projectFields}
          removeProjects={removeProjects}
          appendProjects={appendProjects}
        />

        {/* Skills Section */}
       <SkillsSection
          control={control}
          errors={errors}
          sectionHeadings={sectionHeadings}
          handleHeadingChange={handleHeadingChange}
          handleOnChange={handleOnChange}
          skillFields={skillFields}
          removeSkills={removeSkills}
          appendSkills={appendSkills}
       />

        {/* Custom Sections */}
        <CustomSection
          control={control}
          errors={errors}
          sectionHeadings={sectionHeadings}
          handleHeadingChange={handleHeadingChange}
          handleOnChange={handleOnChange}
          customSectionFields={customSectionFields}
          removeCustomSections={removeCustomSections}
          appendCustomSections={appendCustomSections}
        />
      
      </form>
    </Container>
  );
}

export default ResumeBuilderForm;