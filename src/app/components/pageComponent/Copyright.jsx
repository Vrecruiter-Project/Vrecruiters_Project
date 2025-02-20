import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Copy() {
  return (
    <Typography variant="body2" sx={{ color: "white", mt: 1 }}>
      {"Copyright © "}
      <Link
        sx={{ "&::before": { backgroundColor: "#b35600" } }}
        href="https://mui.com/"
      >
        V Recruiter&nbsp;
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

function Copyright() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        pt: { xs: 0, sm: 3 },
        pb: { xs: 0, sm: 3 },
        mb: { xs: 1 },
        width: "100%",
        backgroundColor: "#857e7e",
      }}
    >
      <div>
        <Link
          sx={{ "&::before": { backgroundColor: "#b35600" } }}
          color="white"
          className="hover:text-[#b35600] text-white"
          variant="body2"
          href="#"
        >
          Privacy Policy
        </Link>
        <Typography
          color="white"
          className="text-white"
          sx={{ display: "inline", mx: 0.5, opacity: 0.5 }}
        >
          &nbsp;•&nbsp;
        </Typography>
        <Link
          sx={{ "&::before": { backgroundColor: "#b35600" } }}
          color="white"
          className="hover:text-[#b35600] text-white"
          variant="body2"
          href="#"
        >
          Terms of Service
        </Link>
        <Copy />
      </div>
    </Box>
  );
}

export default Copyright;
