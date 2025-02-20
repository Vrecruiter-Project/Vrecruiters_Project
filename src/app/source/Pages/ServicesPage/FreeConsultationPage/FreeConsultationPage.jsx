import { useState } from 'react';
import GlobalFaq from '../../../../components/faq/GlobalFaq';
import PageComponent from '../../../../components/pageComponent/PageComponent';
import ServicesCount from '../../../../components/pageComponent/ServicesCount';
import CompanyCarousel from '../recruitment/companies/Components/CompanyCarousel';
import CareerCard from './components/CareerCard';
import CareerSection from './components/CareerSection';
import CertificateReward from './components/CertificateReward';
import FreeConsultationFrontPage from './components/FreeConsultationFrontPage';
import DemoForm from './FreeConsultationContactPage/DemoForm';
import { Modal, Box, Typography } from '@mui/material';

const FreeConsultation = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setIsFormSubmitted(true);
  };

  const faqItems = [
    {
      id: 1,
      question: 'How can I reach customer support?',
      answer:
        'You can email us at vrecruitersofficial@gmail.com or call 9518035030 for assistance.',
    },
    {
      id: 2,
      question: 'What are your business hours?',
      answer:
        'We’re available Monday to Sunday, 9 AM – 6 PM (EST), excluding public holidays.',
    },
    {
      id: 3,
      question: 'How quickly do you respond to inquiries?',
      answer: 'We typically respond within 24 hours during business days.',
    },
    {
      id: 4,
      question: 'Can I schedule a consultation?',
      answer:
        'Yes, please use our scheduling tool or contact us to book a consultation.',
    },
    {
      id: 5,
      question: 'Do you offer support in multiple languages?',
      answer:
        'Absolutely! Our team speaks several languages to help you in the one you’re most comfortable with.',
    },
  ];

  return (
    <>
      {/* Modal for form */}
      <Modal
        open={!isFormSubmitted}
        aria-labelledby='form-popup'
        closeAfterTransition
        disableEscapeKeyDown
      >
        <Box
          // sx={{
          //   position: 'absolute',
          //   top: '50%',
          //   left: '50%',
          //   transform: 'translate(-50%, -50%)',
          //   width: { xs: '90%', sm: 600, md: 900 },
          //   bgcolor: 'background.paper',
          //   boxShadow: 24,
          //   p: 4,
          //   overflowY: 'auto', // Adds scroll if content overflows
          //   maxHeight: '80vh', // Limit height for better responsiveness
          //   borderRadius: 2,
          // }}
        >
          <Typography
            id='form-popup'
            variant='h6'
            component='h2'
            sx={{ mb: 2 }}
          >
            Please fill out the form
          </Typography>
          {/* Pass the submission handler to DemoForm */}
          <DemoForm onSubmit={handleFormSubmit} />
        </Box>
      </Modal>

      {/* Main Page Content */}
      {isFormSubmitted && (
        <PageComponent>
          <FreeConsultationFrontPage />
          <CareerSection />
          <CareerCard />
          <CertificateReward />
          <CompanyCarousel />
          <GlobalFaq faqItems={faqItems} id='Free Demo' />
          <ServicesCount />
        </PageComponent>
      )}
    </>
  );
};

export default FreeConsultation;
