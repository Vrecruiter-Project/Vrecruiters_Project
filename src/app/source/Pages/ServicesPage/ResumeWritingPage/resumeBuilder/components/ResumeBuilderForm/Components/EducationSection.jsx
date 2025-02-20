import React from 'react';
import {
  Button,
  TextField,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import { Controller } from 'react-hook-form';

const EducationSection = ({ 
  control, 
  errors, 
  sectionHeadings, 
  handleHeadingChange, 
  handleOnChange, 
  educationFields, 
  removeEducation, 
  appendEducation 
}) => {
  return (
    <Box mb={3} className="space-y-4">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Education Heading"
            value={sectionHeadings.education}
            onChange={(e) => {
              handleHeadingChange("education", e.target.value);
            }}
          />
        </Grid>
      </Grid>
      <Typography variant="h5">{sectionHeadings.education}</Typography>
      {educationFields.map((item, index) => (
        <Box key={item.id} mb={2}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Controller
                name={`education.${index}.degree`}
                control={control}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label="Degree"
                    variant="filled"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      handleOnChange(`education[${index}].degree`, e.target.value);
                    }}
                    error={!!errors.education?.[index]?.degree}
                    helperText={errors.education?.[index]?.degree?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={4}>
              <Controller
                name={`education.${index}.institution`}
                control={control}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label="Institution"
                    variant="filled"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      handleOnChange(`education[${index}].institution`, e.target.value);
                    }}
                    error={!!errors.education?.[index]?.institution}
                    helperText={errors.education?.[index]?.institution?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={4}>
              <Controller
                name={`education.${index}.year`}
                control={control}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label="Year"
                    variant="filled"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      handleOnChange(`education[${index}].year`, e.target.value);
                    }}
                    error={!!errors.education?.[index]?.year}
                    helperText={errors.education?.[index]?.year?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => {
                  removeEducation(index);
                  handleOnChange(); // You can specify what to change here if needed
                }}
              >
                Delete Education
              </Button>
            </Grid>
          </Grid>
        </Box>
      ))}
      <Button
        variant="contained"
        color="primary"
        onClick={() =>
          appendEducation({ degree: "", institution: "", year: "" })
        }
      >
        Add Education
      </Button>
    </Box>
  );
};

export default EducationSection;
