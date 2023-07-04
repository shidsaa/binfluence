import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import { Grid } from "@mui/material";

function Header() {
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
            justifyContent: "center",
            alignItems: "center",
          }}>
          <IconButton sx={{ color: "white" }}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton sx={(t) => ({ color: t.palette.primary.dark })}>
            <QrCode2Icon />
          </IconButton>
          <IconButton sx={(t) => ({ color: t.palette.primary.dark })}>
            <Typography variant="h5" component="div" sx={{ fontWeight: "600" }}>
              Binfluence
            </Typography>
          </IconButton>
          <IconButton
            disabled
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ color: "white" }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

export default Header;
