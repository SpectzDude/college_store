import "./Login.css";
import USERLOGO from "./user.png";
import React, { useEffect } from "react";
import { stylesContainer } from "./Register";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { actions as commonSliceActions } from "../../common/slice";
import { Typography, Box } from "@mui/material";
import { useFormik } from "formik";
import { loginAsync } from "../actions";

const Login = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { submit } = props;
    const formik = useFormik({
        initialValues: {
            password: "123",
            email: "admin@test.com"
        },
        onSubmit: (values) => {
            submit(values);
        }
    });
    useEffect(() => {
        dispatch(commonSliceActions.setNavigator(navigate));
    }, []);

    return <div style={stylesContainer}>
        <div className="">
            <div className="loginbox">
                <img src={USERLOGO} className="avatar" />
                <div className="title"><b>Login Form</b>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="details">
                            <div className="input-box">
                                <label htmlFor="fullName">Email ID</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values?.email}
                                />
                            </div>  <div className="input-box">
                                <label htmlFor="fullName">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values?.password}
                                />
                            </div>
                            <div className="button">
                                <input type="submit" value="Login" />
                            </div>
                        </div>
                    </form>
                    <Box>
                        <Typography variant="p">  Forgot Password</Typography>
                    </Box>
                    <Typography variant="p" display="inline">  Don,t Have An Account? </Typography>
                    <Typography onClick={() => navigate("../register")} variant="p" sx={{ color: "blue", cursor: "pointer" }} display="inline">  Register </Typography>
                </div>
            </div>
        </div >
    </div >;
};


const mapDispatchToProps = (dispatch) => ({
    submit: data => dispatch(loginAsync(data))
});

const ConnectedLogin = connect(null, mapDispatchToProps)(Login);

export default ConnectedLogin;
