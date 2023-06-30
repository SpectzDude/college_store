import React from "react";

const Login = () => {
    return <div className="authContainer">
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
    </div>;
};

export default Login;
