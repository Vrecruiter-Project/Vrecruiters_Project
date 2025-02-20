import React from 'react'
import {
    Button,
    TextField,
    Grid,
    Typography,
    Box,
  } from "@mui/material";
import { Controller } from 'react-hook-form';

const BasicDetailsSection = ({control, errors, sectionHeadings, handleHeadingChange, handleOnChange,}) => {
  return (
    <>
     <Box mb={3} className="space-y-4">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Basic Details Heading"
                value={sectionHeadings.basicDetails}
                onChange={(e) =>
                  handleHeadingChange("basicDetails", e.target.value)
                }
              />
            </Grid>
          </Grid>
          <Typography variant="h5">{sectionHeadings.basicDetails}</Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Controller
                name="basicDetails.image"
                control={control}
                render={({ field }) => (
                  <>
                    <input
                      accept="image/*"
                      type="file"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        field.onChange(file);  // Pass the file to react-hook-form
                        handleOnChange("image", file); // Optional: for custom state handling
                      }}
                      style={{ display: 'none' }} // Hide the default input
                      id="upload-button-file"
                    />
                    <label htmlFor="upload-button-file">
                      <Button variant="contained" component="span">
                        Upload Profile Image
                      </Button>
                    </label>
                    {errors.basicDetails?.image && (
                      <p style={{ color: 'red' }}>{errors.basicDetails.image.message}</p>
                    )}
                  </>
                )}
              />

            </Grid>
            <Grid item xs={6}>
              <Controller
                name="basicDetails.name"
                control={control}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label="Name"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      handleOnChange("name", e.target.value);
                    }}
                    error={!!errors.basicDetails?.name}
                    helperText={errors.basicDetails?.name?.message}
                  />
                )}
              />
            </Grid>

            {/* Profession Field */}
            <Grid item xs={6}>
              <Controller
                name="basicDetails.profession"
                control={control}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label="Profession"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      handleOnChange("profession", e.target.value);
                    }}
                    error={!!errors.basicDetails?.profession}
                    helperText={errors.basicDetails?.profession?.message}
                  />
                )}
              />
            </Grid>

            <Grid item xs={6}>
              <Controller
                name="basicDetails.objective"
                control={control}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label="Objective"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      handleOnChange("objective", e.target.value);
                    }}
                    error={!!errors.basicDetails?.objective}
                    helperText={errors.basicDetails?.objective?.message}
                  />
                )}
              />
            </Grid>

            <Grid item xs={6}>
              <Controller
                name="basicDetails.email"
                control={control}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label="Email"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      handleOnChange("email", e.target.value);
                    }}
                    error={!!errors.basicDetails?.email}
                    helperText={errors.basicDetails?.email?.message}
                  />
                )}
              />
            </Grid>

            <Grid item xs={6}>
              <Controller
                name="basicDetails.phone"
                control={control}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label="Phone"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      handleOnChange("phone", e.target.value);
                    }}
                    error={!!errors.basicDetails?.phone}
                    helperText={errors.basicDetails?.phone?.message}
                  />
                )}
              />
            </Grid>

            <Grid item xs={6}>
              <Controller
                name="basicDetails.address"
                control={control}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label="Address"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      handleOnChange("address", e.target.value);
                    }}
                    error={!!errors.basicDetails?.address}
                    helperText={errors.basicDetails?.address?.message}
                  />
                )}
              />
            </Grid>

            {/* Website Field
            <Grid item xs={6}>
              <Controller
                name="basicDetails.website"
                control={control}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label="Website"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      handleOnChange("website", e.target.value);
                    }}
                    error={!!errors.basicDetails?.website}
                    helperText={errors.basicDetails?.website?.message}
                  />
                )}
              />
            </Grid> */}
          </Grid>
        </Box>
    </>
  )
}

export default BasicDetailsSection