import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import GlobalMultiCards from '../../../../../../components/pageComponent/GlobalMultiCards';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.primary,
    backgroundColor: '#fff',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0px 6px 25px rgba(0, 0, 0, 0.15)',
    },
}));

export default function ProfileCards() {
    const theme = useTheme();

    const cardData = [
        { title: 'React.js Developer', description: 'Seeking a skilled React.js developer to join our team, responsible for building and optimizing dynamic web applications. Must have experience in JavaScript, front-end development, and responsive design.' },
        { title: 'BDA', description: 'As a Business Development Associate, you will drive growth by identifying new opportunities, building client relationships, and developing strategic partnerships to fuel business success.' },
        { title: 'Data Entry', description: 'Efficiently input and manage data, ensuring accuracy and confidentiality. Handle various data entry tasks, update records, and support administrative functions for seamless company operations.' },
        { title: 'Web Designer', description: 'Looking for a talented web designer to create engaging and user-friendly websites, ensuring optimal performance, responsiveness, and aesthetics. Must have strong skills in HTML, CSS, JavaScript, and design software.' },
        { title: 'Web Developer', description: 'Seeking a skilled web developer to create, optimize, and maintain responsive websites. Must be proficient in HTML, CSS, JavaScript, and frameworks. Strong problem-solving skills and teamwork required.' },
        { title: 'Graphic Designer', description: "Seeking a creative Graphic Designer with expertise in digital and print media, responsible for producing visually compelling designs to enhance our brand and marketing efforts." },
    ];

    return (
        <GlobalMultiCards 
        cardData={cardData}
         MainTitle= "Job Profile"   
        />
    );
}
