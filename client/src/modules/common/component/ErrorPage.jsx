import { Button, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ErrorPage = (props) => {
    const navigate = useNavigate();

    const homePath = useSelector(state => state.common.homePath);
    let { error: { status, message, statusText } = {}, title = "" } = props;
    return (
        <Grid sx={{ display: "flex", minHeight: "600px", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            {statusText && <Typography sx={{
                fontSize: "18px", fontWeight: 600, color: "black", textAlign: "center", pt: 2
            }}>{statusText}
            </Typography>}
            <Typography sx={{
                fontSize: "18px", fontWeight: 600, color: "black", textAlign: "center", py: 2
            }}>
                {title || status || "Error"}
            </Typography>
            <Grid sx={{
                minWidth: "100%", minHeight: { md: "60%" }, display: "flex", justifyContent: "center"
            }}>
            </Grid>
            <Grid item xs={12} sx={{ bottom: "100px", position: "absolute" }}>
                <Grid sx={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <Typography sx={{
                        fontSize: "34px", fontWeight: 800, color: "black", textAlign: "center"
                    }}>Oops!
                    </Typography>
                    <Typography sx={{
                        fontSize: "18px", fontWeight: 600, color: "black", textAlign: "center", pt: 2
                    }}> It seems like you've reached an unexpected destination.
                    </Typography>
                    {message && <Typography sx={{
                        fontSize: "18px", fontWeight: 600, color: "black", textAlign: "center", pt: 2
                    }}>{message}
                    </Typography>}
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{ bottom: "10px", position: "absolute" }}>
                <Grid sx={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <Button variant="contained" size="large" onClick={() => navigate("./login")} sx={{ fontWeight: 700 }} >
                        Login Again
                    </Button>
                </Grid>
                <Grid sx={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <Button variant="contained" size="large" onClick={() => navigate(`../${homePath}`)} sx={{ fontWeight: 700 }} >
                        Go to Home
                    </Button>
                </Grid>
            </Grid>

        </Grid >
    );
};

export default ErrorPage;
