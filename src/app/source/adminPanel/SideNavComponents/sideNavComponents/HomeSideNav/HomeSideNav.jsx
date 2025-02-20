import { Box, Card, Grid, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import cardBg from "../../../../../assests/images/cardBg.jpg";
import EmployeeCorner from "./components/employeeCorner/EmployeeCorner";
import CompanyCorner from "./components/companyCorner/CompanyCorner";
import CandidateCorner from "./components/candidateCorner/CandidateCorner";
import { useAtom } from "jotai";
import { adminTitleAtom } from "../../../../../assests/globalvars/themeatom";
import { cardselectatom } from "../../../../../assests/globalvars/cardatoms";
import { getAuth } from "firebase/auth";

const HomeSideNav = () => {
  const navigate = useNavigate();
  const user = getAuth().currentUser;
  const [selectedCard, setSelectedCard] = useAtom(cardselectatom);
  const [admintitle, setAdminTitle] = useAtom(adminTitleAtom);

  useEffect(() => {
    setAdminTitle("Home Page");
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
    // navigate(path);
  };

  const handleBackClick = () => {
    setSelectedCard(null);
    navigate("/admin/home");
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        height: "80vh",
        width: "100vw",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        // overflow: "hidden",
        // border: "3px solid black",
      }}
    >
      {selectedCard ? (
        <>
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
                onClick={() =>
                  handleCardClick("/admin/home/candidate", "candidate")
                }
              >
                Candidate Corner
              </Card>
            </Box>
          </Grid>
          {user.email === "kim@ck.com" && (
            <>
              <Grid item xs={12} sm={6}>
                <Box sx={{ p: 2 }}>
                  <Card
                    sx={cardStyle}
                    onClick={() =>
                      handleCardClick("/admin/home/company", "company")
                    }
                  >
                    Company Corner
                  </Card>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Box sx={{ p: 2, m: 4 }}>
                  <Card
                    sx={cardStyle}
                    onClick={() =>
                      handleCardClick("/admin/home/employee", "employee")
                    }
                  >
                    Employee Corner
                  </Card>
                </Box>
              </Grid>
            </>
          )}
        </Grid>
      )}
    </Box>
  );
};

export default HomeSideNav;
