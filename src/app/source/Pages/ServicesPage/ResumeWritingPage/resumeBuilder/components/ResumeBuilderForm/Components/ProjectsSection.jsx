import React from 'react'
import {
    Button,
    TextField,
    Grid,
    Typography,
    Box,
  } from "@mui/material";
import { Controller } from 'react-hook-form';

const ProjectsSection = ({control, errors, sectionHeadings, handleHeadingChange, handleOnChange, projectFields, removeProjects, appendProjects}) => {
  return (
    <>
        <Box mb={3} className="space-y-4">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Projects Heading"
                value={sectionHeadings.projects}
                onChange={(e) =>
                  handleHeadingChange("projects", e.target.value)
                }
              />
            </Grid>
          </Grid>
          <Typography variant="h5">{sectionHeadings.projects}</Typography>
          {projectFields.map((item, index) => (
            <Box key={item.id} mb={2}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Controller
                    name={`projects.${index}.title`}
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        label="Title"
                        variant="filled"
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          handleOnChange(
                            `projects[${index}].title`,
                            e.target.value
                          );
                        }}
                        error={!!errors.projects?.[index]?.title}
                        helperText={errors.projects?.[index]?.title?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name={`projects.${index}.description`}
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        label="Description"
                        variant="filled"
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          handleOnChange(
                            `projects[${index}].description`,
                            e.target.value
                          );
                        }}
                        error={!!errors.projects?.[index]?.description}
                        helperText={
                          errors.projects?.[index]?.description?.message
                        }
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="outlined"
                    color="secondary"
                  onClick={() =>{ removeProjects(index)
                    handleOnChange(); }}
                  >
                    Delete Project
                  </Button>
                </Grid>
              </Grid>
            </Box>
          ))}
          <Button
            variant="contained"
            color="primary"
            onClick={() => appendProjects({ title: "", description: "" })}
          >
            Add Project
          </Button>
        </Box>
    </>
  )
}

export default ProjectsSection