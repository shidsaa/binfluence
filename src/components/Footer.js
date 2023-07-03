import React, { useState } from "react";
import { Grid } from "@mui/material";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import DeleteIcon from '@mui/icons-material/Delete';
import RecyclingIcon from '@mui/icons-material/Recycling';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from "react-router-dom";


function Footer() {
    const [value, setValue] = useState(0);

    return (
        <Grid
            xs={12}
            sx={(t) => ({
            backgroundColor: t.palette.primary.light,
            bottom: 0,
            left: 0,
            right: 0,
            position:"relative"
            })}
            elevation={3}
        >
                <nav>
                    <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                    >
                        
                        <BottomNavigationAction
                        label="Home"
                        icon={<HomeIcon />}
                        component={Link}
                        to="/"
                        />
                        
                        <BottomNavigationAction
                        label="My Bins"
                        icon={<DeleteIcon />}
                        component={Link}
                        to="/MyBins"
                        />

                        <BottomNavigationAction
                        label="Recycling A to Z"
                        icon={<RecyclingIcon />}
                        component={Link}
                        to="/Recycling"
                        />

                        <BottomNavigationAction
                        label="Scan QR"
                        icon={<CameraAltIcon />}
                        component={Link}
                        to="/Scan"
                        />
            
                        <BottomNavigationAction  disabled  label="Other" icon={<MoreHorizIcon />} />
                    </BottomNavigation>
                </nav>
            </Grid>
    )
}

export default Footer;
