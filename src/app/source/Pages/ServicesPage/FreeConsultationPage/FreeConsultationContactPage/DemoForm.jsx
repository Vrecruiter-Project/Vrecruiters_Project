import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import {
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  TextareaAutosize,
  Box,
  Typography,
} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DemoForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    location: '',
    message: '',
  });

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem('formData'));
    if (savedFormData) {
      setFormData(savedFormData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateDigi = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      course: formData.course,
      location: formData.location,
      message: formData.message,
    };

    emailjs
      .send('service_701pjcp', 'template_o1n2or9', templateDigi, {
        publicKey: 'sa9ZcIN8CanXeAIe2',
      })
      .then(
        () => {
          toast.success('Message sent successfully!');
          localStorage.removeItem('formData');
          setFormData({
            name: '',
            phone: '',
            email: '',
            course: '',
            location: '',
            message: '',
          });
          if (onSubmit) onSubmit();
        },
        (error) => {
          toast.error('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        px: 2,
      }}
    >
      <Box
        component='form'
        onSubmit={handleSubmit}
        sx={{
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: 3,
          width: { xs: '90%', sm: '70%', md: '50%' },
          maxWidth: '450px',
          p: { xs: 2, sm: 3 },
          overflow: 'hidden',
          maxHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant='h5'
          fontWeight='700'
          mb={2}
          sx={{ textAlign: 'center', fontSize: { xs: '1rem', sm: '1.5rem' } }}
        >
          Book a Free Demo Class
        </Typography>
        <Box
          sx={{
            overflowY: 'auto',
            flex: 1,
            pr: 1,
            '&::-webkit-scrollbar': {
              width: '5px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#c1c1c1',
              borderRadius: '5px',
            },
          }}
        >
          <TextField
            label='Name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            variant='outlined'
            fullWidth
            required
            margin='normal'
            placeholder='Enter Your Name'
          />
          <TextField
            label='Email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            type='email'
            variant='outlined'
            fullWidth
            required
            margin='normal'
            placeholder='Enter Your Email'
          />
          <TextField
            label='Mobile'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            type='number'
            variant='outlined'
            fullWidth
            required
            margin='normal'
            placeholder='Enter Mobile Number'
          />
          <FormControl fullWidth required margin='normal'>
            <InputLabel id='course-label'>Select Course</InputLabel>
            <Select
              labelId='course-label'
              id='course'
              name='course'
              value={formData.course}
              onChange={handleChange}
            >
              <MenuItem value='Web Development'>Web Development</MenuItem>
              <MenuItem value='Video Editing'>Video Editing</MenuItem>
              <MenuItem value='Graphic Designing'>Graphic Designing</MenuItem>
              <MenuItem value='UI/UX Designing'>UI/UX Designing</MenuItem>
              <MenuItem value='Digital Marketing'>Digital Marketing</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth required margin='normal'>
            <InputLabel id='location-label'>Select Location</InputLabel>
            <Select
              labelId='location-label'
              id='location'
              name='location'
              value={formData.location}
              onChange={handleChange}
            >
              <MenuItem value='Zirakpur'>Zirakpur</MenuItem>
              <MenuItem value='Chandigarh'>Chandigarh</MenuItem>
              <MenuItem value='Ludhiana'>Ludhiana</MenuItem>
              <MenuItem value='Mohali'>Mohali</MenuItem>
              <MenuItem value='Panchkula'>Panchkula</MenuItem>
              <MenuItem value='Ambala'>Ambala</MenuItem>
            </Select>
          </FormControl>
          <TextareaAutosize
            name='message'
            value={formData.message}
            onChange={handleChange}
            minRows={4}
            placeholder='Enter your message'
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #dadada',
              marginTop: '10px',
            }}
          />
        </Box>
        <Button
          type='submit'
          variant='contained'
          sx={{
            mt: 2,
            fontSize: '1rem',
            background:
              'linear-gradient(45deg, rgb(212, 161, 255) 10%, rgb(255, 158, 83) 90%)',
            borderRadius: '20px',
            width: '100%',
            '&:hover': {
              background:
                'linear-gradient(45deg, rgb(255, 158, 83) 10%, rgb(212, 161, 255) 90%)',
            },
          }}
        >
          Book Free Demo Class
        </Button>
        <ToastContainer />
      </Box>
    </Box>
  );
};

export default DemoForm;
