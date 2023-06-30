import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Grid from "@mui/material/Grid";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";

function Loading() {
  const [loadingProgress, setloadingProgress] = useState(0);
  const [visibleLoading, setVisibleLoading] = useState(false);
  const [visibleError, setVisibleError] = useState(true);

  const navigateToNextPage = useNavigate();

  // this will navigate loadingPage to HomePage after delay automaticly
  useEffect(() => {
    const delay = 8000;

    const timeoutNavigation = setTimeout(() => {
      navigateToNextPage("/");
    }, delay);

    return () => clearTimeout(timeoutNavigation);
  }, [navigateToNextPage]);

  //this will make our LodingBar visible after delay
  useEffect(() => {
    const visibleLoadingTime = setTimeout(() => {
      setVisibleLoading(true);
    }, 1000);

    return () => clearTimeout(visibleLoadingTime);
  }, []);

  //this makes loadingBar line start from zero to end
  useEffect(() => {
    const timer = setInterval(() => {
      setloadingProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Grid
      container
      sx={(t) => ({
        backgroundColor: t.palette.primary.main,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 6,
        px: 4,
      })}>
      <Grid
        item
        xs={12}
        sx={(t) => ({
          backgroundColor: t.palette.primary.light,
          borderRadius: "13px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          py: 23,
          px: 13,
          position: "relative",
        })}>
        <QrCode2Icon sx={{ width: "80px", height: "80px", pb: 2 }} />
        <Typography
          sx={(t) => ({
            color: t.palette.primary.main,
            fontSize: "18px",
            fontWeight: "700",
            pb: 2,
          })}>
          Binfluence
        </Typography>
        <Box sx={{ width: "100%" }}>
          {visibleLoading && (
            <LinearProgress variant="determinate" value={loadingProgress} />
          )}
        </Box>

        {visibleError && (
          <Snackbar
            open
            autoHideDuration={6000}
            message="An Error happend ! please wait."
            sx={{ bottom: { xs: 90, sm: 10 }, position: "absolute" }}
            action={
              <Button color="inherit" size="small">
                Undo
              </Button>
            }
          />
        )}
      </Grid>
    </Grid>
  );
}

export default Loading;
