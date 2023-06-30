import React from "react";
import { Grid, Typography } from "@mui/material";
import Header from "./Header";


function Home() {
    return (
        <Grid
            xs={12}
            container 
            sx={(t) => ({
            backgroundColor: t.palette.primary.main,
            display: "flex",
            position:"absolute",
        })}
        >
            <Header />
            <Grid
                xs={12}
                container 
                sx={(t) => ({
                backgroundColor: t.palette.primary.main,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                py: 6,
                px: 4
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
                        <Typography sx={(t) => ({
                            color: t.palette.primary.main,
                            fontSize: "18px",
                            fontWeight: "700",
                        })}>
                            HOME
                    </Typography>
                </Grid>
            </Grid> 
        </Grid>
    )
}

export default Home;