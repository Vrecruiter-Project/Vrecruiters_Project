import { atom } from "jotai";
import { useState } from "react";

export const ResumeformDataAtom = atom({
  basicDetails: {},
  experience: [],
  education: [],
  project: [],
  skills: [],
});

const [formFields, setFormFields] = useState({
  basicDetails: [],
});
