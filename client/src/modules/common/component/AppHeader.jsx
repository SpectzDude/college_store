
import React from "react";
import { Box, Grid, IconButton } from "@mui/material";
import { LogoutOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { logout } from "../actions";
import { useNavigate } from "react-router-dom";
import { STORAGE_KEYS } from "../constants";
import { ACTION_TYPES } from "../../common/actionTypes";

const AppHeader = () => {
    //, "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" }
    // const drawerToggle = useSelector(state => state[STATE_REDUCER_KEY]).drawerToggle;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch({ type: ACTION_TYPES.LOG_OUT });
        localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
        dispatch(logout(true));
        navigate("/login");
    };
    return (
        <Grid
            component="header"
            sx={{ backgroundColor: "secondary.main", pb: 0.4, width: "100%", height: "83px", position: "sticky", top: 0, zIndex: 100, display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
            <Box
                sx={{
                    display: "flex", justifyContent: "space-between", alignItems: "center", mr: 1, borderRadius: "10px", p: 1, position: "relative"
                }}
            >
                <Box sx={{ minWidth: "140px" }}>
                    <Box sx={{ m: 1, mr: 1, p: 2 }}>
                        Logo here
                        {/* <img width={58} height={55} src={companyLogo} alt="logo" /> */}
                    </Box>
                </Box>
            </Box>
            <Box sx={{ position: "relative", left: "-15px" }}>
                <IconButton sx={{
                    fontSize: "14px", color: "white", bgcolor: "#ff4747", borderRadius: "5px", "&:hover": {
                        bgcolor: "#ff1414"
                    }
                }} onClick={handleLogout}>
                    <LogoutOutlined />
                    Logout
                </IconButton>
            </Box>
        </Grid >
    );
};

export default AppHeader;
