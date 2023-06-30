import { Box } from "@mui/material";
import React from "react";
import Header from "../modules/common/component/Header";
import Footer from "../modules/common/component/Footer";
import SideBar from "../modules/common/component/SideBar";

const HomeLayout = ({ children }) => {
    return <Box
        sx={{ minHeight: "100vh", width: 1 }}
    >
        <Header />
        <Box sx={{ display: "flex", justifyContent: "space-between ", height: "100%" }}>
            <SideBar />
            <Box sx={{ flexGrow: 1, overflowX: "auto", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "calc(100vh - 82px) !important ", width: "100%", overflowY: "auto" }}>
                <Box

                    sx={{ bgcolor: "white.main", borderRadius: "20px", flexGrow: 1 }}
                >
                    {children}
                </Box>
                <Footer />
            </Box>
        </Box>
    </Box >;
};

export default HomeLayout;
