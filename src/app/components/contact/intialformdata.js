export const createInitialFormData = (formFields) => {
  return formFields.reduce((acc, field) => {
    if (field.type === "radio") {
      acc[field.name] = field.options.length > 0 ? field.options[0].value : "";
    } else if (field.type === "file") {
      acc[field.name] = null;
    } else {
      acc[field.name] = "";
    }
    return acc;
  }, {});
};
