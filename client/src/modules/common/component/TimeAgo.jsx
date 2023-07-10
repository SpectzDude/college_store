import { Box, Typography } from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";

const TimeAgo = ({ sessionLoggedIn = null }) => {
    const [timeAgo, setTimeAgo] = useState("");
    useEffect(() => {
        const interval = setInterval(() => {
            if (sessionLoggedIn) {
                const sliceTime = moment(sessionLoggedIn, moment.ISO_8601);
                setTimeAgo(sliceTime.fromNow());
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [sessionLoggedIn]);

    return (
        <Box
            sx={{
                my: 0.2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                borderRadius: "15px",
                bgcolor: "#70d8bd",
                p: 1
            }}
        >
            <Typography sx={{ color: "#000", fontSize: "11px", fontWeight: 700 }}>
                Session Logged In
            </Typography>
            <Typography sx={{ color: "#000", fontSize: "10px", fontWeight: 400 }}>
                {timeAgo}
            </Typography>
        </Box>
    );
};

export default TimeAgo;
