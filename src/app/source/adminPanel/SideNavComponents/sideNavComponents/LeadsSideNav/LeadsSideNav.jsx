import { Box, Card, Grid, IconButton } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cardBg from "../../../../../assests/images/cardBg.jpg";
import PortalCorner from "./RegistrationCandidateCorner/PortalCorner";
import { useAtom } from "jotai";
import { leadscardselectionatom } from "../../../../../assests/globalvars/cardatoms";

const LeadsSideNav = () => {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useAtom(leadscardselectionatom);

  const cardStyle = {
    backgroundImage: `url(${cardBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "18rem",
    color: "black",
    fontSize: "1.5rem",
    fontWeight: "bold",
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
    cursor: "pointer",
  };

  const handleCardClick = (path, card) => {
    setSelectedCard(card);
    navigate(path);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 2,
        height: "90vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      {selectedCard ? (
        <>{selectedCard === "candidate" && <PortalCorner />}</>
      ) : (
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12}>
            <Box sx={{ p: 2, m: 4 }}>
              <Card
                sx={cardStyle}
                onClick={() => handleCardClick("/admin/leads", "candidate")}
              >
                Online Candidate Registration Portal
              </Card>
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default LeadsSideNav;
