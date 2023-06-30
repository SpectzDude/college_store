import "./Login.css";
import USERLOGO from "./user.png";
import React, { useEffect } from "react";
import { stylesContainer } from "./Register";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { actions as commonSliceActions } from "../../common/slice";


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(commonSliceActions.setNavigator(navigate));
    }, []);

    return <div style={stylesContainer}>
        <div className="">
            <div className="loginbox">
                <img src={USERLOGO} className="avatar" />
                <h1 style={{paddingTop: "50px"}}>Login Here</h1>
                <form>
                    <p>College_ID</p>
                    <input type="text" name="" placeholder="Enter College_ID" />
                    <p>Password</p>
                    <input type="password" name="" placeholder="Enter Password" />
                    <input type="submit" name="" value="Login" />
                    <a href="#">Forgot Password</a><br />
                    <a href="/#/Register">Don,t Have An Account?</a>
                </form>
            </div>
        </div>
    </div>;
};

export default Login;
