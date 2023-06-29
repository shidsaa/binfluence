import React from "react";
import { Grid } from "@mui/material";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';



function Home() {

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
                
            </Grid>
       </Grid>
    )
}

export default Home;