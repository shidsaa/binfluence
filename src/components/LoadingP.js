import React from "react";
import Grid from '@mui/material/Grid';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import { Typography } from "@mui/material";

function LoadingP() {
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
                    fontWeight: "700"
                })}>
                    Binfluence
                </Typography>
            </Grid>
       </Grid>
    )
}

export default LoadingP;