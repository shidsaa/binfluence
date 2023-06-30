import React from "react";
import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Grid } from "@mui/material";

function Header() {
  const backNavigate = useNavigate();

  const handelBack = () => {
    backNavigate(-1);
  };

  return (
    <Grid
      xs={12}
      position="relative"
      sx={{
        top: 0,
        left: 0,
        right: 0,
        pb: 5,
      }}>
      <AppBar>
        <Toolbar
          position="static"
          sx={{
            gap: 3,
            justifyContent: "flex-start",
            alignItems: "center",
          }}>
          <IconButton sx={{ color: "white" }} onClick={() => handelBack()}>
            <ArrowBackIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

export default Header;
