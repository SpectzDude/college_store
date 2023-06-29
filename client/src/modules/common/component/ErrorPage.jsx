import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    // let { error: { status, message, statusText } = {}, image, title = "" } = props;

    return (
        <Grid sx={{ display: "flex", minHeight: "600px", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Typography sx={{
                fontSize: "18px", fontWeight: 600, color: "black", textAlign: "center", py: 2
            }}>
                Oops! Looks like you lost in transit!
            </Typography>
            <Grid sx={{
                minWidth: "100%", minHeight: { md: "60%" }, display: "flex", justifyContent: "center"
            }}>
            </Grid>
            <Grid item xs={12} sx={{ bottom: "100px", position: "absolute" }}>
                <Grid sx={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <Typography sx={{
                        fontSize: "18px", fontWeight: 600, color: "black", textAlign: "center", pt: 2
                    }}>It seems like the information you're looking for has taken an unexpected detour.
                        Please double-check the address and try again.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{ bottom: "10px", position: "absolute" }}>
                <Grid sx={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <Button variant="contained" size="large" onClick={() => navigate("../home")} sx={{ fontWeight: 700 }} >
                        Go to Home
                    </Button>
                </Grid>
            </Grid>

        </Grid >
    );
};

export default ErrorPage;
