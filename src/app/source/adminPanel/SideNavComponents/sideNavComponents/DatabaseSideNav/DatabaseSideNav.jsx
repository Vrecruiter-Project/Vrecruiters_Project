import { Box, Card, Grid, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cardBg from "../../../../../assests/images/cardBg.jpg";
import CandidateCorner from "../HomeSideNav/components/candidateCorner/CandidateCorner";
import DatabaseCandidateCorner from "./DatabaseCandidateCorner";
import { useAtom } from "jotai";
import { adminTitleAtom } from "../../../../../assests/globalvars/themeatom";
import { databasecardselectionatom } from "../../../../../assests/globalvars/cardatoms";

const DatabaseSideNav = () => {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useAtom(databasecardselectionatom);
  const [admintitle, setAdminTitle] = useAtom(adminTitleAtom);

  useEffect(() => {
    setAdminTitle("Database");
  }, []);

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

  const handleBackClick = () => {
    setSelectedCard(null);
    navigate("/admin/database");
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
        <>{selectedCard === "candidate" && <DatabaseCandidateCorner />}</>
      ) : (
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12}>
            <Box sx={{ p: 2, m: 4 }}>
              <Card
                sx={cardStyle}
                onClick={() => handleCardClick("/admin/database", "candidate")}
              >
                Candidate Corner
              </Card>
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default DatabaseSideNav;
