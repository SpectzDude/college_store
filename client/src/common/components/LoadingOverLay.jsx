import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LoadingOverlay from "react-loading-overlay-ts";
import {
    ScaleLoader, PulseLoader
} from "react-spinners";
import { colors } from "../theme/theme";

const DefaultLoader = () => {
    return <Box sx={{ display: "flex", px: 2, py: 1, justifyContent: "center", flexDirection: "column", borderRadius: "15px", backgroundColor: colors.grey[100] }}>
        <Typography sx={{ fontWeight: 600, fontSize: "14px" }} color={"#fff"}>Fetching...</Typography>
        <ScaleLoader color={"#fff"} speedMultiplier={1.9} />
    </Box>;
};


const LoadingCustomOverlay = ({ active, children, spinnerProps = "" }) => {
    let loader = <ScaleLoader color={colors.grey[500]} />;

    switch (spinnerProps) {
        case "selectTagProp":
            loader = <PulseLoader speedMultiplier={1.5} color={colors.grey[500]} />;
            break;
        case "scale":
            loader = <ScaleLoader speedMultiplier={1.5} color={colors.grey[500]} />;
            break;
        default:
            loader = <DefaultLoader speedMultiplier={1.5} color={colors.grey[500]} />;
            break;
    }

    return <LoadingOverlay
        active={active}
        styles={{
            overlay: (base) => ({
                ...base,
                background: "transparent",
                zIndex: 999
            })
        }}

        spinner={loader}
    >
        {children}
    </LoadingOverlay>;

};
export default LoadingCustomOverlay;
