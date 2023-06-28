import React from "react";
import Grid from '@mui/material/Grid';

function LoadingPage() {
    return (
        <Grid sx={{
            backgroundColor: "GrayText",
            maxWidth: "500px",
            height: "700px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

        }}>
            <Grid sx={{
                backgroundColor: "white",
                width: "400px",
                height: "600px",
                borderRadius: "13px",
            }}>

            </Grid>
       </Grid>
    )
}

export default LoadingPage;