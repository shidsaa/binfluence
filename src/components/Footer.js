import React, { useState } from "react";
import { Grid } from "@mui/material";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import DeleteIcon from '@mui/icons-material/Delete';
import RecyclingIcon from '@mui/icons-material/Recycling';
// import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


function Home() {
    const [value, setValue] = useState(0);

    return (
        <Grid
            xs={12}
            container 
            sx={(t) => ({
            backgroundColor: t.palette.primary.light,
            })}>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                    <BottomNavigationAction label="My Bins" icon={<DeleteIcon />}  />
                    <BottomNavigationAction label="Recycling A to Z" icon={<RecyclingIcon />} />
                    <BottomNavigationAction label="Scan QR" icon={<CameraAltIcon />} />
                    <BottomNavigationAction  disabled  label="Other" icon={<MoreHorizIcon />} />
                </BottomNavigation>
            </Paper>
        </Grid>
    )
}

export default Home;