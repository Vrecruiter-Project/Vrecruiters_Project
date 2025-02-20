import { Box, Card, Grid, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import cardBg from "../../../../../assests/images/cardBg.jpg";
import EmployeeCorner from "../HomeSideNav/components/employeeCorner/EmployeeCorner";
import CandidateCorner from "../HomeSideNav/components/candidateCorner/CandidateCorner";
import CompanyCorner from "../HomeSideNav/components/companyCorner/CompanyCorner";
import { useAtom } from "jotai";
import { adminTitleAtom } from "../../../../../assests/globalvars/themeatom";

const DataAnalysisSideNav = () => {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null);
  const [admintitle, setAdminTitle] = useAtom(adminTitleAtom);

  useEffect(() => {
    setAdminTitle("Data Analysis");
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
    navigate("/admin");
  };

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      {selectedCard ? (
        <>
          <IconButton onClick={handleBackClick} sx={{ mb: 1 }}>
            <ArrowBackIcon />
          </IconButton>
          {selectedCard === "candidate" && <CandidateCorner />}
          {selectedCard === "company" && <CompanyCorner />}
          {selectedCard === "employee" && <EmployeeCorner />}
        </>
      ) : (
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ p: 2 }}>
              <Card
                sx={cardStyle}
                onClick={() => handleCardClick("/admin/candidate", "candidate")}
              >
                Candidate Corner
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ p: 2 }}>
              <Card
                sx={cardStyle}
                onClick={() => handleCardClick("/admin/company", "company")}
              >
                Company Corner
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Box sx={{ p: 2, m: 4 }}>
              <Card
                sx={cardStyle}
                onClick={() => handleCardClick("/admin/employee", "employee")}
              >
                Employee Corner
              </Card>
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default DataAnalysisSideNav;
