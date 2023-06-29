import React from "react";

const Register = () => {
    return <><div class="container">
      <div class="title"><b>Registration</b></div>
      <form actio="#">
        <div class="user-details">
          <div class="input-box">
            <span class="details">Full Name</span>
            <input type="text" placeholder="Enter Your Name" required />
          </div>
          <div class="input-box">
            <span class="details">User-Name</span>
            <input type="text" placeholder="Enter Your User-Name" required />
          </div>
          <div class="input-box">
            <span class="details">E-Mail</span>
            <input type="text" placeholder="Enter Your E-Mail" required />
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input type="text" placeholder="Enter Your Phone Number" required />
          </div>
          <div class="input-box">
            <span class="details">Password</span>
            <input type="text" placeholder="Enter Your Password" required />
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="text" placeholder="Confirm Your Password" required />
          </div>
        </div>
        <div class="gender-details">
            <input type="radio" name="gender" id="dot-1">
            <input type="radio" name="gender" id="dot-2">
            <input type="radio" name="gender" id="dot-3">
            <span class="gender-details">Gender</span>
          <div class="category">
            <label for="dot-1">
                <span class="dot one"></span>
                <span class="gender">Male</span>
            </label>
            <label for="dot-2">
                <span class="dot two"></span>
                <span class="gender">Female</span>
            </label>
            <label for="dot-3">
                <span class="dot three"></span>
                <span class="gender">Prefer Not To Say</span>
            </label>
          </div>
        </div>
        <div class="button">
            <input type="submit" value="Register" />
        </div>
      </form>
    </div>

    </>;
};

export default Register;
