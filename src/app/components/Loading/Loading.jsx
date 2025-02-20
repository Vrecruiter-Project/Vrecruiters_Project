import * as React from "react";
import { PacmanLoader } from "react-spinners";
import { Grid } from "@mui/material";

const Loading = () => {
  return (
    <>
      <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <PacmanLoader color="#e1a44d" loading={true} size={40} />
      </Grid>
    </>
  );
};

export default Loading;
