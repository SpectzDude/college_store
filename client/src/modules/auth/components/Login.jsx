import React from "react";
import { stylesContainer } from "./Register";

const Login = () => {
    return <div style={stylesContainer}>
        <div className="">
            <div className="loginbox">
                <img src="user.png" className="avatar" />
                <h1>Login Here</h1>
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
