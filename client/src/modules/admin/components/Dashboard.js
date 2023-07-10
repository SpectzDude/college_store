import { useTheme } from "@emotion/react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CardTravelOutlined, CountertopsRounded, ListAltOutlined, PendingActions, PendingOutlined, SchoolSharp, SupervisedUserCircle, TravelExploreSharp } from "@mui/icons-material";
import { STATE_REDUCER_KEY } from "../constants";
import { dashboardStats } from "../actions";

const Dashboard = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
    const { userCount = 0, studentCount = 0, pendingOrder = 0, orderInTransit = 0, deliveryPending = 0, delivered = 0,
        productCount = 0, approvalPending = 0 } = useSelector(state => state[STATE_REDUCER_KEY].dashboard);
    useEffect(() => {
        dispatch(dashboardStats());
    }, []);
    return <Box m="20px">
        <Box
            display={smScreen ? "flex" : "block"}
            flexDirection={smScreen ? "row" : "column"}
            justifyContent={smScreen ? "space-between" : "start"}
            alignItems={smScreen ? "center" : "start"}
            m="10px 0"
            py={2}
        >
            <Grid container columnSpacing={1} rowSpacing={10}>
                <Grid item sm={6} md={4} lg={3}>
                    <Box sx={{
                        borderRadius: "20px", width: "250px", height: "120px",
                        border: "0.5px dotted green", display: "flex", justifyContent: "space-evenly", alignItems: "center"

                    }}>
                        <Box> <SupervisedUserCircle fontSize="large" /></Box>
                        <Box>
                            <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
                                {"User Count"}
                            </Typography>
                            <Typography sx={{ fontSize: "28px", fontWeight: 800 }}>
                                {userCount}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                {/* 2 */}
                <Grid item sm={6} md={4} lg={3}>
                    <Box sx={{
                        borderRadius: "20px", width: "250px", height: "120px",
                        border: "0.5px dotted blue", display: "flex", justifyContent: "space-evenly", alignItems: "center"

                    }}>
                        <Box> <ListAltOutlined fontSize="large" /></Box>
                        <Box>
                            <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
                                {"Student Count"}
                            </Typography>
                            <Typography sx={{ fontSize: "28px", fontWeight: 800 }}>
                                {studentCount}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                {/* 3 */}
                <Grid item sm={6} md={4} lg={3}>
                    <Box sx={{
                        borderRadius: "20px", width: "250px", height: "120px",
                        border: "0.5px dotted yellow", display: "flex", justifyContent: "space-evenly", alignItems: "center"

                    }}>
                        <Box> <CountertopsRounded fontSize="large" /></Box>
                        <Box>
                            <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
                                {"Product Count"}
                            </Typography>
                            <Typography sx={{ fontSize: "28px", fontWeight: 800 }}>
                                {productCount}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                {/* 4 */}
                <Grid item sm={6} md={4} lg={3}>
                    <Box sx={{
                        borderRadius: "20px", width: "250px", height: "120px",
                        border: "0.5px dotted violet", display: "flex", justifyContent: "space-evenly", alignItems: "center"

                    }}>
                        <Box> <PendingOutlined fontSize="large" /></Box>
                        <Box>
                            <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
                                {"Pending Order"}
                            </Typography>
                            <Typography sx={{ fontSize: "28px", fontWeight: 800 }}>
                                {pendingOrder}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                {/* 5 */}
                <Grid item sm={6} md={4} lg={3}>
                    <Box sx={{
                        borderRadius: "20px", width: "250px", height: "120px",
                        border: "0.5px dotted yellow", display: "flex", justifyContent: "space-evenly", alignItems: "center"

                    }}>
                        <Box> <TravelExploreSharp fontSize="large" /></Box>
                        <Box>
                            <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
                                {"Order in Transit"}
                            </Typography>
                            <Typography sx={{ fontSize: "28px", fontWeight: 800 }}>
                                {orderInTransit}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                {/* 6 */}
                <Grid item sm={6} md={4} lg={3}>
                    <Box sx={{
                        borderRadius: "20px", width: "250px", height: "120px",
                        border: "0.5px dotted purple", display: "flex", justifyContent: "space-evenly", alignItems: "center"

                    }}>
                        <Box> <CardTravelOutlined fontSize="large" /></Box>
                        <Box>
                            <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
                                {"Items Delivered"}
                            </Typography>
                            <Typography sx={{ fontSize: "28px", fontWeight: 800 }}>
                                {delivered}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                {/* 7 */}
                <Grid item sm={6} md={4} lg={3}>
                    <Box sx={{
                        borderRadius: "20px", width: "250px", height: "120px",
                        border: "0.5px dotted red", display: "flex", justifyContent: "space-evenly", alignItems: "center"

                    }}>
                        <Box> <PendingActions fontSize="large" /></Box>
                        <Box>
                            <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
                                {" Delivery Pending"}
                            </Typography>
                            <Typography sx={{ fontSize: "28px", fontWeight: 800 }}>
                                {deliveryPending}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                {/* 8 */}
                <Grid item sm={6} md={4} lg={3}>
                    <Box sx={{
                        borderRadius: "20px", width: "250px", height: "120px",
                        border: "0.5px dotted green", display: "flex", justifyContent: "space-evenly", alignItems: "center"

                    }}>
                        <Box> <SchoolSharp fontSize="large" /></Box>
                        <Box>
                            <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
                                {"Approval Pending (Registration)"}
                            </Typography>
                            <Typography sx={{ fontSize: "28px", fontWeight: 800 }}>
                                {approvalPending}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </Box>

    </Box>;
};

export default Dashboard;
