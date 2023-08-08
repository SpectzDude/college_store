import UserLogo from "./user.png";
import React, { useEffect } from "react";
import { stylesContainer } from "./Register";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { actions as commonSliceActions } from "../../common/slice";
import { Typography, Box, TextField, Button, FormControl } from "@mui/material";
import { useFormik } from "formik";
import { loginAsync } from "../actions";
import { loginSchema as validationSchema } from "../validate";

const Login = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { submit } = props;
    const formik = useFormik({
        initialValues: {
            password: "",
            email: ""
            // password: "123",
            // email: "admin@test.com"
        },
        validationSchema,
        onSubmit: (values) => {
            submit(values);
        }
    });
    useEffect(() => {
        dispatch(commonSliceActions.setNavigator(navigate));
    }, []);


    return <Box style={stylesContainer} >
        <Box sx={{ position: "absolute" }}>
            <Box sx={{ position: "relative", top: "-30px", left: "5px" }}>
                <img src={UserLogo} alt="logo" style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
            </Box>
        </Box>
        <Box sx={{ display: "flex", mt: 3, borderRadius: "10px", bgcolor: "secondary.main", flexDirection: "column", p: 3, maxHeight: "60vh", width: "500px" }}>
            <Typography variant="h2" py={2}>Login</Typography>
            <form onSubmit={formik.handleSubmit}>
                <div className="">
                    <div className="input-box">
                        <FormControl sx={{ width: "100%" }}>
                            <TextField
                                id="email"
                                name="email"
                                label="Email"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                error={formik.touched.email && formik.errors.email ? true : false}
                            />
                        </FormControl>
                    </div>
                    <div className="input-box">
                        <FormControl sx={{ width: "100%" }}>
                            <TextField
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                error={formik.touched.password && formik.errors.password ? true : false}
                            />
                        </FormControl>
                    </div>
                </div>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", py: 2 }}>
                    <Box>
                        <Button variant="contained" color="primary" type="submit">
                            Login
                        </Button>
                    </Box>
                </Box>
            </form>
            <Box>
                <Typography variant="p" display="inline">Don,t Have An Account? </Typography>
                <Typography onClick={() => navigate("../register")} variant="p" sx={{ color: "blue", cursor: "pointer" }} display="inline">  Register </Typography>
            </Box>
        </Box>
    </Box >;
};


const mapDispatchToProps = (dispatch) => ({
    submit: data => dispatch(loginAsync(data))
});

const ConnectedLogin = connect(null, mapDispatchToProps)(Login);

export default ConnectedLogin;
