import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  Box,
  Modal,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  InputLabel,
  MenuItem,
  Select,
  Divider,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { useAtom } from "jotai";
import { themeatom } from "../../assests/globalvars/themeatom";
import { createInitialFormData } from "./intialformdata";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const GlobalContactForm = ({
  fields,
  onSubmit,
  title = "",
  onInputChange,
  buttontext,
  buttonRequired = true,
  setFormDataValues = (val) => {},
}) => {
  const [formData, setFormData] = useState(createInitialFormData(fields) || {});
  const [errors, setErrors] = useState({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [resumeName, setResumeName] = useState("");
  const [mode, setMode] = useAtom(themeatom);

  const validate = () => {
    let tempErrors = {};
    fields.forEach((field) => {
      if (field.required && !formData[field.name]) {
        tempErrors[field.name] = `${field.label} is required.`;
      }
      if (
        field.validation &&
        !field.validation.regex.test(formData[field.name])
      ) {
        tempErrors[field.name] = field.validation.message;
      }
    });
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      onSubmit(formData);
      setShowSuccessPopup(true);
    }
  };

  useEffect(() => {
    setFormDataValues(formData);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (onInputChange) {
      onInputChange(name, value);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, resume: file });
    setResumeName(file ? file.name : "");
  };

  const handleModalClose = () => {
    setShowSuccessPopup(false);
    setFormData(createInitialFormData(fields));
    setErrors({});
    setResumeName("");
  };

  return (
    <>
      <Container
        style={
          mode === "dark"
            ? { boxShadow: "2px 7px 24px 0px #e7e4e4", borderRadius: "5px" }
            : {
                boxShadow: "4px 14px 48px 0px rgba(0, 0, 0, 0.5)",
                borderRadius: "5px",
              }
        }
      >
        {title.length > 0 && (
          <Box mt={12} mb={5} textAlign="center">
            <Typography className="pt-4" variant="h4" component="div">
              {title}
            </Typography>
          </Box>
        )}
        <form
          style={{
            borderRadius: "15px",
          }}
          onSubmit={handleSubmit}
        >
          <Grid container marginTop={1} spacing={3}>
            {fields.map((field, index) => (
              <>
                {field.type === "divider" ? (
                  <Grid item xs={12}>
                    <Grid
                      fullWidth
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography className="pt-4" variant="h4" component="div">
                        {field.label}
                      </Typography>
                      <Button sx={{ height: 40 }} variant="contained">
                        Add Section
                      </Button>
                    </Grid>
                    <Divider
                      orientation="horizontal"
                      variant="middle"
                      sx={{ my: 2 }}
                    />
                  </Grid>
                ) : (
                  <Grid key={index} item xs={12} sm={field.fullWidth ? 12 : 6}>
                    {field.type === "radio" ? (
                      <FormControl fullWidth>
                        <FormLabel id={`${field.name}-label`}>
                          {field.label}
                        </FormLabel>
                        <RadioGroup
                          aria-labelledby={`${field.name}-label`}
                          value={formData[field.name] || ""}
                          onChange={handleInputChange}
                          name={field.name}
                        >
                          {field.options.map((option) => (
                            <FormControlLabel
                              key={option.value}
                              value={option.value}
                              control={<Radio />}
                              label={option.label}
                            />
                          ))}
                        </RadioGroup>
                      </FormControl>
                    ) : field.type === "select" ? (
                      <FormControl fullWidth>
                        <InputLabel id={`${field.name}-label`}>
                          {field.label}
                        </InputLabel>
                        <Select
                          variant="filled"
                          labelId={`${field.name}-label`}
                          id={`${field.name}`}
                          value={formData[field.name] || ""}
                          label={field.label}
                          onChange={handleInputChange}
                          name={field.name}
                        >
                          {field.options.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Select>
                        {errors[field.name] && (
                          <Typography variant="body2" color="error">
                            {errors[field.name]}
                          </Typography>
                        )}
                      </FormControl>
                    ) : field.type === "file" ? (
                      <FormControl fullWidth>
                        <Button
                          sx={{
                            color: "white",
                            backgroundColor: "purple",
                            "&:hover": {
                              backgroundColor: "purple",
                            },
                          }}
                          component="label"
                          variant="contained"
                          startIcon={<CloudUploadIcon />}
                        >
                          {resumeName
                            ? `Uploaded: ${resumeName}`
                            : "Upload Resume"}
                          <VisuallyHiddenInput
                            type="file"
                            name={field.name}
                            onChange={handleFileChange}
                          />
                        </Button>
                        {errors[field.name] && (
                          <Typography variant="body2" color="error">
                            {errors[field.name]}
                          </Typography>
                        )}
                      </FormControl>
                    ) : (
                      <FormControl fullWidth>
                        <TextField
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          label={field.label}
                          variant="filled"
                          required={field.required}
                          value={formData[field.name] || ""}
                          onChange={handleInputChange}
                          error={!!errors[field.name]}
                          helperText={errors[field.name]}
                          disabled={field.disabled || false}
                          inputProps={field.inputProps || {}}
                        />
                      </FormControl>
                    )}
                  </Grid>
                )}
              </>
            ))}
            {buttonRequired && (
              <Grid className="pb-5" item xs={12}>
                <FormControl fullWidth>
                  <Button
                    sx={{
                      color: "white",
                      backgroundColor: "purple",
                      "&:hover": {
                        backgroundColor: "purple",
                      },
                    }}
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    {buttontext ? buttontext : "Apply Now"}
                  </Button>
                </FormControl>
              </Grid>
            )}
          </Grid>
        </form>
      </Container>

      <Modal open={showSuccessPopup} onClose={handleModalClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2" align="center">
            Application Submitted
          </Typography>
          <CheckCircleOutlineIcon
            color="success"
            sx={{ fontSize: 60, display: "block", mx: "auto", my: 2 }}
          />
          <Typography align="center">
            Your application has been submitted successfully!
          </Typography>
          <Typography variant="body2" mt={2}>
            Here's a short overview of your submission:
          </Typography>
          {fields.map((field, index) => {
            console.log(formData[field.name], typeof formData[field.name]);
            return (
              <Typography key={index} variant="body2">
                <strong>{field.label}:</strong>
                {typeof formData[field.name] === "object"
                  ? formData[field.name]?.name
                  : formData[field.name]}
              </Typography>
            );
          })}
        </Box>
      </Modal>
    </>
  );
};

GlobalContactForm.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["text", "number", "radio", "file", "select"]),
      required: PropTypes.bool,
      options: PropTypes.array,
      inputProps: PropTypes.object,
      validation: PropTypes.shape({
        regex: PropTypes.instanceOf(RegExp),
        message: PropTypes.string,
      }),
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialFormData: PropTypes.object,
  title: PropTypes.string,
  buttontext: PropTypes.string,
  buttonRequired: PropTypes.bool,
  setFormDataValues: PropTypes.func,
  onInputChange: PropTypes.func,
};

export default GlobalContactForm;
