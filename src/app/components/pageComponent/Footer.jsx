import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { visuallyHidden } from '@mui/utils';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import SitemarkIcon from './SitemarkIcon';
import { toast } from 'react-toastify';

export default function Footer({ style }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  // State to manage form errors
  const [formErrors, setFormErrors] = useState({});

  // Handler for input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form data
  const validateForm = () => {
    let errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const namePattern = /^[A-Za-z\s]+$/;
    if (!formData.name) {
      errors.name = 'name is required';
    } else if (!namePattern.test(formData.name)) {
      errors.name = 'Name can only contain letters and spaces';
    }
    if (!formData.phone) {
      errors.phone = 'Phone number is required';
    }
    if (!formData.email || !emailPattern.test(formData.email)) {
      errors.email = 'Valid email is required';
    }
    if (!formData.message) {
      errors.message = 'Message is required';
    }
    return errors;
  };

  // Submit handler for the form
  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});

    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send('service_tv20m3h', 'template_eccsi2r', templateParams, {
        publicKey: 'Zmj5fZSb1S1YffATj',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setFormData({ name: '', phone: '', email: '', message: '' });
          toast.success('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error);
          toast.error('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <Box
      id='footer'
      sx={(theme) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        pt: { xs: 2 },
        pb: { xs: 2, sm: 2 },
        px: { xs: 2, sm: 8 },
        textAlign: { sm: 'center', md: 'left' },
        color: 'white',
        background:
          'linear-gradient(0deg, rgba(240,239,243,1) 100%, rgba(252,237,226,1) 100%)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsla(210, 100%, 16%, 0), transparent)',
        }),
        ...style,
      })}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box id='contact' sx={{ width: { xs: '100%', sm: '60%' } }}>
            <SitemarkIcon />
            <Typography
              color='text.primary'
              variant='body2'
              gutterBottom
              sx={{ fontWeight: 600, mt: 2 }}
            >
              Contact us
            </Typography>

            <form onSubmit={handleSubmit}>
              <Stack direction='column' spacing={1} useFlexGap>
                <InputLabel htmlFor='name' sx={visuallyHidden}>
                  Name
                </InputLabel>

                <TextField
                  id='name'
                  hiddenLabel
                  size='small'
                  variant='outlined'
                  name='name'
                  required
                  fullWidth
                  aria-label='Enter your name'
                  placeholder='Your Name'
                  slotprops={{
                    htmlInput: {
                      autoComplete: 'off',
                      'aria-label': 'Enter your name',
                    },
                  }}
                  value={formData.name}
                  onChange={handleChange}
                  error={!formErrors.name}
                  helperText={formErrors.name}
                />

                <InputLabel htmlFor='phone' sx={visuallyHidden}>
                  Phone
                </InputLabel>

                <TextField
                  id='phone'
                  hiddenLabel
                  size='small'
                  variant='outlined'
                  type='number'
                  name='phone'
                  required
                  fullWidth
                  aria-label='Enter your phone number'
                  placeholder='Your Phone Number'
                  slotprops={{
                    htmlInput: {
                      autoComplete: 'off',
                      'aria-label': 'Enter your phone number',
                    },
                  }}
                  value={formData.phone}
                  onChange={handleChange}
                  error={!formErrors.phone}
                  helperText={formErrors.phone}
                />

                <InputLabel htmlFor='email-newsletter' sx={visuallyHidden}>
                  Email
                </InputLabel>

                <TextField
                  id='email-newsletter'
                  hiddenLabel
                  name='email'
                  required
                  size='small'
                  variant='outlined'
                  fullWidth
                  aria-label='Enter your email address'
                  placeholder='Your Email Address'
                  slotprops={{
                    htmlInput: {
                      autoComplete: 'off',
                      'aria-label': 'Enter your email address',
                    },
                  }}
                  value={formData.email}
                  onChange={handleChange}
                  error={!formErrors.email}
                  helperText={formErrors.email}
                />

                <TextField
                  id='filled-multiline-static'
                  label='Message'
                  multiline
                  rows={4}
                  variant='filled'
                  name='message'
                  required
                  fullWidth
                  value={formData.message}
                  onChange={handleChange}
                  error={!formErrors.message}
                  helperText={formErrors.message}
                  InputProps={{
                    style: {
                      color: 'black', // Text color
                      borderBottom: '2px solid black', // Bottom border color
                    },
                    disableUnderline: false, // Keep underline if required
                  }}
                  InputLabelProps={{
                    style: { color: 'black' }, // Label color
                  }}
                />

                <Button
                  type='submit'
                  variant='contained'
                  color='primary'
                  sx={{
                    background:
                      'linear-gradient(45deg, #D4A1FF 10%, #FF9E53 90%)',
                    border: 0,
                    borderRadius: 1,
                    boxShadow: '0 3px 5px 2px rgba(63,59,56 .3)',
                  }}
                >
                  Send
                </Button>
              </Stack>
            </form>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Stack
              direction='row'
              spacing={1}
              useFlexGap
              sx={{ justifyContent: 'left', color: 'text.secondary' }}
            >
              <IconButton
                color='inherit'
                href='https://www.facebook.com/profile.php?id=61562070471655&mibextid=ZbWKwL'
                aria-label='Facebook'
                sx={{ alignSelf: 'center' }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                color='inherit'
                href='https://www.instagram.com/vrecruiters12/'
                aria-label='X'
                sx={{ alignSelf: 'center' }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                color='inherit'
                href='https://www.linkedin.com/company/v-recruit-ers/'
                aria-label='LinkedIn'
                sx={{ alignSelf: 'center' }}
              >
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            pt: 4,
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography
            variant='body2'
            color='text.primary'
            sx={{ fontWeight: 'medium', fontSize: '20px' }}
          >
            Product
          </Typography>
          <Link
            sx={{ '&::before': { backgroundColor: '#b35600' } }}
            color='text.secondary'
            className='hover:text-[#b35600] text-underline text-underline-offset-none'
            variant='body2'
            href='#'
          >
            Features
          </Link>
          <Link
            sx={{ '&::before': { backgroundColor: '#b35600' } }}
            color='text.secondary'
            className='hover:text-[#b35600]'
            variant='body2'
            href='#'
          >
            Testimonials
          </Link>
          <Link
            sx={{ '&::before': { backgroundColor: '#b35600' } }}
            color='text.secondary'
            className='hover:text-[#b35600]'
            variant='body2'
            href='#'
          >
            Highlights
          </Link>
          <Link
            sx={{ '&::before': { backgroundColor: '#b35600' } }}
            color='text.secondary'
            className='hover:text-[#b35600]'
            variant='body2'
            href='#'
          >
            Pricing
          </Link>
          <Link
            sx={{ '&::before': { backgroundColor: '#b35600' } }}
            color='text.secondary'
            className='hover:text-[#b35600]'
            variant='body2'
            href='#'
          >
            FAQs
          </Link>
        </Box>
        <Box
          sx={{
            pt: 4,
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography
            color='text.primary'
            variant='body2'
            sx={{ fontWeight: 'medium', fontSize: '20px' }}
          >
            Company
          </Typography>
          <Link
            sx={{ '&::before': { backgroundColor: '#b35600' } }}
            color='text.secondary'
            className='hover:text-[#b35600]'
            variant='body2'
            href='#'
          >
            About us
          </Link>
          <Link
            sx={{ '&::before': { backgroundColor: '#b35600' } }}
            color='text.secondary'
            className='hover:text-[#b35600]'
            variant='body2'
            href='#'
          >
            Careers
          </Link>
          <Link
            sx={{ '&::before': { backgroundColor: '#b35600' } }}
            color='text.secondary'
            className='hover:text-[#b35600]'
            variant='body2'
            href='#'
          >
            Press
          </Link>
        </Box>
        <Box
          sx={{
            pt: 4,
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography
            color='text.primary'
            variant='body2'
            sx={{ fontWeight: 'medium', fontSize: '20px' }}
          >
            Legal
          </Typography>
          <Link
            sx={{ '&::before': { backgroundColor: '#b35600' } }}
            color='text.secondary'
            className='hover:text-[#b35600]'
            variant='body2'
            href='#'
          >
            Terms
          </Link>
          <Link
            sx={{ '&::before': { backgroundColor: '#b35600' } }}
            color='text.secondary'
            className='hover:text-[#b35600]'
            variant='body2'
            href='#'
          >
            Privacy
          </Link>
          <Link
            sx={{ '&::before': { backgroundColor: '#b35600' } }}
            color='text.secondary'
            className='hover:text-[#b35600]'
            variant='body2'
            href='#'
          >
            Contact
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
