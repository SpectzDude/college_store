import "./Login.css";
import USERLOGO from "./user.png";
import React, { useEffect } from "react";
import { stylesContainer } from "./Register";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { actions as commonSliceActions } from "../../common/slice";
import { Typography, Box } from "@mui/material";
import { connect, useFormik } from "formik";
import { loginAsync } from "../actions";

const Login = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { submit } = props;
    const formik = useFormik({
        initialValues: {
            password: "",
            collegeId: ""
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
                <h1 style={{ paddingTop: "50px" }}>Login Here</h1>
                <div className="title"><b>Registration Form</b>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="details">
                            <div className="input-box">
                                <label htmlFor="fullName">Full Name</label>
                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values?.fullName}
                                />
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
