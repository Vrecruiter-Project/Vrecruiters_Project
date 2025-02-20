import { Box, Card, Grid, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cardBg from "../../../../../assests/images/cardBg.jpg";
import CandidateCorner from '../HomeSideNav/components/candidateCorner/CandidateCorner';

const PlacementRecordsSideNav = () => {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null);

  const cardStyle = {
    backgroundImage: `url(${cardBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '18rem', 
    color: 'black',
    fontSize: '1.5rem', 
    fontWeight: 'bold',
    boxShadow: '0 10px 20px rgba(0,0,0,0.2)', 
    cursor: 'pointer'
  };

  const handleCardClick = (path, card) => {
    setSelectedCard(card);
    navigate(path);
  };

  const handleBackClick = () => {
    setSelectedCard(null);
    navigate('/admin');
  };

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      {selectedCard ? (
        <>
          <IconButton onClick={handleBackClick} sx={{ mb: 1 }}>
            <ArrowBackIcon />
          </IconButton>
          {selectedCard === 'candidate' && <CandidateCorner />}

        </>
      ) : (
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12}>
            <Box sx={{ p:2, m:4 }}>
            <Card
                sx={cardStyle}
                onClick={() => handleCardClick('/admin/placementrecords', 'candidate')}
              >
               Placement Records
              </Card>
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default PlacementRecordsSideNav;