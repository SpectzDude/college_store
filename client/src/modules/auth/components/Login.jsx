<<<<<<< HEAD
import React from "react";
import "./Login.css";
import { stylesContainer } from "./Register";
import USERLOGO from "./user.png";

=======
import React, { useEffect } from "react";
import { stylesContainer } from "./Register";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { actions as commonSliceActions } from "../../common/slice";
>>>>>>> a5b85753739cdb0ec65052605b86976dda722fb1
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
                    <p>User Name</p>
                    <input type="text" name="" placeholder="Enter User Name" />
                    <p>Password</p>
                    <input type="password" name="" placeholder="Enter Password" />
                    <input type="submit" name="" value="Login" />
                    <a href="#">Forgot Password</a><br />
                    <a href="#">Don,t Have An Account?</a>
                </form>
            </div>
        </div>
    </div>;
};

export default Login;
