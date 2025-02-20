import React from 'react'
import {
    Button,
    TextField,
    Grid,
    Typography,
    Box,
  } from "@mui/material";
import { Controller } from 'react-hook-form';

const WorkExperienceSection = ({control, errors, sectionHeadings, handleHeadingChange, handleOnChange, workExperienceFields, removeWorkExperience, appendWorkExperience}) => {
  return (
    <>
     <Box mb={3} className="space-y-4">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Work Experience Heading"
                value={sectionHeadings.workExperience}
                onChange={(e) =>
                  handleHeadingChange("workExperience", e.target.value)
                }
              />
            </Grid>
          </Grid>
          <Typography variant="h5">{sectionHeadings.workExperience}</Typography>
          {workExperienceFields.map((item, index) => (
            <Box key={item.id} mb={2}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Controller
                    name={`workExperience.${index}.position`}
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        label="Position"
                        variant="filled"
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          handleOnChange(
                            `workExperience[${index}].position`,
                            e.target.value
                          );
                        }}
                        error={!!errors.workExperience?.[index]?.position}
                        helperText={
                          errors.workExperience?.[index]?.position?.message
                        }
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Controller
                    name={`workExperience.${index}.company`}
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        label="Company"
                        variant="filled"
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          handleOnChange(
                            `workExperience[${index}].company`,
                            e.target.value
                          );
                        }}
                        error={!!errors.workExperience?.[index]?.company}
                        helperText={
                          errors.workExperience?.[index]?.company?.message
                        }
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Controller
                    name={`workExperience.${index}.duration`}
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        label="Duration"
                        variant="filled"
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          handleOnChange(
                            `workExperience[${index}].duration`,
                            e.target.value
                          );
                        }}
                        error={!!errors.workExperience?.[index]?.duration}
                        helperText={
                          errors.workExperience?.[index]?.duration?.message
                        }
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => {
                      removeWorkExperience(index)
                      handleOnChange(); 
                    }}
                  >
                    Delete Experience
                  </Button>
                </Grid>
              </Grid>
            </Box>
          ))}
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              appendWorkExperience({ position: "", company: "", duration: "" })
            }
          >
            Add Work Experience
          </Button>
        </Box>
    </>
  )
}

export default WorkExperienceSection