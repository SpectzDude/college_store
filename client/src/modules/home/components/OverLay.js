import React from "react";
import PropTypes from "prop-types";
import "./overlay.css";
import { Grid, Typography } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const Overlay = ({ active = true }) => {
    return !active ? (
        <div className="overlay-container">
            <div className="overlay-content">
                <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>Your profile is not approved yet, Please contact administrator</Typography>
                <HelpOutlineIcon fontSize="large" sx={{ color: "#727681" }} />
                <Grid sx={{ textAlign: "left", display: "flex", flexDirection: "column", mt: 3, justifyContent: "flex-start" }}>
                    <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>For Tech Support</Typography>
                    <Typography> Email: example@email.com</Typography>
                    <Typography> Phone: 8891590046 </Typography>
                </Grid>
            </div>

        </div>
    ) : null;
};

Overlay.propTypes = {
    active: PropTypes.bool.isRequired
};

export default Overlay;
