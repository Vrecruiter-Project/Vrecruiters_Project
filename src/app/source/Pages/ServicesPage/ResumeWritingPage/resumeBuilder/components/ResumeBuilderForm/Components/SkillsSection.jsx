import React from 'react'
import {
    Button,
    TextField,
    Grid,
    Typography,
    Box,
  } from "@mui/material";
import { Controller } from 'react-hook-form';

const SkillsSection = ({control, errors, sectionHeadings, handleHeadingChange, handleOnChange, skillFields, removeSkills, appendSkills}) => {
  return (
    <>
         <Box mb={3} className="space-y-4">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Skills Heading"
                value={sectionHeadings.skills}
                onChange={(e) => handleHeadingChange("skills", e.target.value)}
              />
            </Grid>
          </Grid>
          <Typography variant="h5">{sectionHeadings.skills}</Typography>
          {skillFields.map((item, index) => (
            <Box key={item.id} mb={2}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Controller
                    name={`skills.${index}.skill`}
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        label="Skill"
                        variant="filled"
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          handleOnChange(
                            `skills[${index}].skill`,
                            e.target.value
                          );
                        }}
                        error={!!errors.skills?.[index]?.skill}
                        helperText={errors.skills?.[index]?.skill?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => {
                      removeSkills(index)
                      handleOnChange(); 
                      }}
                  >
                    Delete Skill
                  </Button>
                </Grid>
              </Grid>
            </Box>
          ))}
          <Button
            variant="contained"
            color="primary"
            onClick={() => appendSkills({ skill: "" })}
          >
            Add Skill
          </Button>
        </Box>
    </>
  )
}

export default SkillsSection