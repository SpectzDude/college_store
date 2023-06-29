import React from "react";

const Register = () => {
  return <><div className="container">
    <div className="title"><b>Registration</b></div>
    <form >
      <div className="user-details">
        <div className="input-box">
          <span className="details">Full Name</span>
          <input type="text" placeholder="Enter Your Name" required />
        </div>
        <div className="input-box">
          <span className="details">User-Name</span>
          <input type="text" placeholder="Enter Your User-Name" required />
        </div>
        <div className="input-box">
          <span className="details">E-Mail</span>
          <input type="text" placeholder="Enter Your E-Mail" required />
        </div>
        <div className="input-box">
          <span className="details">Phone Number</span>
          <input type="text" placeholder="Enter Your Phone Number" required />
        </div>
        <div className="input-box">
          <span className="details">Password</span>
          <input type="text" placeholder="Enter Your Password" required />
        </div>
        <div className="input-box">
          <span className="details">Confirm Password</span>
          <input type="text" placeholder="Confirm Your Password" required />
        </div>
      </div>
      <div className="gender-details">
        <input type="radio" name="gender" id="dot-1" />
        <input type="radio" name="gender" id="dot-2" />
        <input type="radio" name="gender" id="dot-3" />
        <span className="gender-details">Gender</span>
        <div className="category">
          <label htmlFor="dot-1">
            <span className="dot one"></span>
            <span className="gender">Male</span>
          </label>
          <label htmlFor="dot-2">
            <span className="dot two"></span>
            <span className="gender">Female</span>
          </label>
          <label htmlFor="dot-3">
            <span className="dot three"></span>
            <span className="gender">Prefer Not To Say</span>
          </label>
        </div>
      </div>
      <div className="button">
        <input type="submit" value="Register" />
      </div>
    </form >
  </div >
  </>;
};

export default Register;
