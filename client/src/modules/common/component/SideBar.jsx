import { List, ListItemButton, ListItemText } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { CheckBoxOutlineBlankSharp, Dashboard, Home, ListAltOutlined, People, Person2Outlined, ProductionQuantityLimitsSharp } from "@mui/icons-material";
import { useSelector } from "react-redux";
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
    bgcolor: "background",
    "&:hover": {
        color: "neutral.dark",
        bgcolor: "grey.light"
    }
};
const SideBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { isAdmin } = useSelector(state => state.common.user);
    let dashStyle = { ...inActive };
    let analyticsStyle = { ...inActive };
    let profileStyle = { ...inActive };

    if (location.pathname === "/home") {
        dashStyle = { ...active };
    }
    if (location.pathname === "/orders") {
        analyticsStyle = { ...active };
    }
    if (location.pathname === "/profile") {
        profileStyle = { ...active };
    }

    const mainStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        backgroundColor: "primary.light",
        fontSize: "14px",
        transition: "width ease-in-out 300ms",
        py: 0
    };

    return (

        <List sx={mainStyle}>
            <List sx={{ px: 1.5, height: "calc(100vh - 240px) !important", overflowX: "hidden", overflowY: "auto" }}>
                {isAdmin ?
                    <>
                        <List sx={{ px: 0.5, py: 0 }}>
                            <ListItemButton className="button-sidebar" sx={{ ...dashStyle, px: 1, py: 0, height: "47px", fontSize: "14px", my: 0.4 }} onClick={() => navigate("../admin/dashboard")}>
                                <Dashboard className="svg-Icon" />
                                <ListItemText sx={{ px: 1, fontSize: "14px !!important" }}>{"Dashboard"}</ListItemText>
                            </ListItemButton>
                        </List>
                        <List sx={{ px: 0.5, py: 0 }}>
                            <ListItemButton sx={{ ...analyticsStyle, px: 1, py: 0, height: "47px", fontSize: "14px", my: 0.4 }} onClick={() => navigate("../admin/products")}>
                                <ProductionQuantityLimitsSharp />
                                <ListItemText sx={{ px: 1, fontSize: "14px !!important" }}>{"Products"}</ListItemText>
                            </ListItemButton>
                        </List>
                        <List sx={{ px: 0.5, py: 0 }}>
                            <ListItemButton sx={{ ...analyticsStyle, px: 1, py: 0, height: "47px", fontSize: "14px", my: 0.4 }} onClick={() => navigate("../admin/orders")}>
                                <CheckBoxOutlineBlankSharp />
                                <ListItemText sx={{ px: 1, fontSize: "14px !!important" }}>{"Orders"}</ListItemText>
                            </ListItemButton>
                        </List>

                        <List sx={{ px: 0.5, py: 0 }}>
                            <ListItemButton sx={{ ...analyticsStyle, px: 1, py: 0, height: "47px", fontSize: "14px", my: 0.4 }} onClick={() => navigate("../admin/users")}>
                                <People />
                                <ListItemText sx={{ px: 1, fontSize: "14px !!important" }}>{"Users"}</ListItemText>
                            </ListItemButton>
                        </List>
                    </> :

                    <>
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
                            <ListItemButton sx={{ ...profileStyle, px: 1, py: 0, height: "47px", fontSize: "14px", my: 0.4 }} onClick={() => navigate("../profile")}>
                                <Person2Outlined />
                                <ListItemText sx={{ px: 1, fontSize: "14px !!important" }}>{"My Proflle"}</ListItemText>
                            </ListItemButton>
                        </List>
                    </>}
            </List>
        </List >

    );
};

export default SideBar;
