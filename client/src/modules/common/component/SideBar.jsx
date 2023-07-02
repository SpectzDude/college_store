import { List, ListItemButton, ListItemText } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { Home, ListAltOutlined } from "@mui/icons-material";

export let active = {
    display: "flex",
    justifyContent: "space-evenly",
    color: "white.main",
    bgcolor: "primary.main",
    "&:hover": {
        color: "secondary.main",
        bgcolor: "primary.dark"
    },
    fontWeight: "700 !important"
};
export let inActive = {
    display: "flex",
    justifyContent: "space-evenly",
    color: "grey.main",
    bgcolor: "secondary.main",
    "&:hover": {
        color: "secondary.main",
        bgcolor: "primary.dark"
    }
};
const SideBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let dashStyle = { ...inActive };
    let analyticsStyle = { ...inActive };

    if (location.pathname === "/Home") {
        dashStyle = { ...active };
    }
    if (location.pathname === "/items") {
        analyticsStyle = { ...active };
    }

    const mainStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        backgroundColor: "blue",
        fontSize: "14px",
        transition: "width ease-in-out 300ms",
        py: 0
    };

    return (

        <List sx={mainStyle}>
            <List sx={{ px: 1.5, height: "calc(100vh - 240px) !important", overflowX: "hidden", overflowY: "auto" }}>
                <List sx={{ px: 0.5, py: 0 }}>
                    <ListItemButton className="button-sidebar" sx={{ ...dashStyle, px: 1, py: 0, height: "47px", fontSize: "14px", my: 0.4 }} onClick={() => navigate("../home")}>
                        <Home className="svg-Icon" />
                        <ListItemText sx={{ px: 1, fontSize: "14px !!important" }}>{"Home"}</ListItemText>
                    </ListItemButton>
                </List>
                <List sx={{ px: 0.5, py: 0 }}>
                    <ListItemButton sx={{ ...analyticsStyle, px: 1, py: 0, height: "47px", fontSize: "14px", my: 0.4 }} onClick={() => navigate("../orders")}>
                        <ListAltOutlined />
                        <ListItemText sx={{ px: 1, fontSize: "14px !!important" }}>{"Items"}</ListItemText>
                    </ListItemButton>
                </List>

                <List sx={{ px: 0.5, py: 0 }}>
                    <ListItemButton sx={{ ...analyticsStyle, px: 1, py: 0, height: "47px", fontSize: "14px", my: 0.4 }} onClick={() => navigate("../profile")}>
                        <ListAltOutlined />
                        <ListItemText sx={{ px: 1, fontSize: "14px !!important" }}>{"My Proflle"}</ListItemText>
                    </ListItemButton>
                </List>
            </List>
        </List >

    );
};

export default SideBar;
