import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';


function Loading() {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
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
            px:4
        })}>
            <Grid
                item
                xs={12}
                sx={(t) => ({
                backgroundColor: t.palette.primary.light,
                borderRadius: "13px",
                display: "flex",
                flexDirection:"column",
                justifyContent: "center",
                alignItems: "center",
                py: 23,
                px: 13,
                
            })}>
                <QrCode2Icon sx={{width:"80px",height:"80px",pb:2}} />
                <Typography sx={(t) => ({
                    color: t.palette.primary.main,
                    fontSize: "18px",
                    fontWeight: "700",
                    pb:2
                })}>
                    Binfluence
                </Typography>
                <Box  sx={{ width: '100%',gap:2 }}>
                    <LinearProgress variant="determinate" value={progress} />
                    <Snackbar
                        open
                        autoHideDuration={6000}
                        message="An Error happend ! please wait."
                        sx={{ bottom: { xs: 90, sm: 0 } }}
                        action={
                            <Button color="inherit" size="small">
                            Undo
                            </Button>
                        }
                    />
                </Box>
            </Grid>
       </Grid>
    )
}

export default Loading;