import React from 'react'
import {
    Button,
    TextField,
    Grid,
    Typography,
    Box,
  } from "@mui/material";
import { Controller } from 'react-hook-form';

const CustomSection = ({control, errors, sectionHeadings, handleHeadingChange, handleOnChange, customSectionFields, removeCustomSections, appendCustomSections}) => {
  return (
    <>
          <Box mb={3} className="space-y-4">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Custom Sections Heading"
                value={sectionHeadings.customSections}
                onChange={(e) =>
                  handleHeadingChange("customSections", e.target.value)
                }
              />
            </Grid>
          </Grid>
          <Typography variant="h5">{sectionHeadings.customSections}</Typography>
          {customSectionFields.map((item, index) => (
            <Box key={item.id} mb={2}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Controller
                    name={`customSections.${index}.sectionName`}
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        label="Section Name"
                        variant="filled"
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          handleOnChange(
                            `customSections[${index}].sectionName`,
                            e.target.value
                          );
                        }}
                        error={!!errors.customSections?.[index]?.sectionName}
                        helperText={
                          errors.customSections?.[index]?.sectionName?.message
                        }
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name={`customSections.${index}.content`}
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        label="Content"
                        variant="filled"
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          handleOnChange(
                            `customSections[${index}].content`,
                            e.target.value
                          );
                        }}
                        error={!!errors.customSections?.[index]?.content}
                        helperText={
                          errors.customSections?.[index]?.content?.message
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
                      removeCustomSections(index)
                      handleOnChange(); 
                      }}
                  >
                    Delete Section
                  </Button>
                </Grid>
              </Grid>
            </Box>
          ))}
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              appendCustomSections({ sectionName: "", content: "" })
            }
          >
            Add Custom Section
          </Button>
        </Box>
    </>
  )
}

export default CustomSection