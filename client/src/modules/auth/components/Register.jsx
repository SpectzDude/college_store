import React, { useEffect } from "react";
import { useFormik } from "formik";
import { registerAsync } from "../actions";
import "./style.css";
import cover from "./mcbg.jpg";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { actions as commonSliceActions } from "../../common/slice";

export const stylesContainer = {
  backgroundImage: `url(${cover})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  height: "100vh"
};

const Register = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(commonSliceActions.setNavigator(navigate));
  }, []);

  const { submit } = props;
  const formik = useFormik({
    initialValues: {
      fullName: "",
      userName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      gender: "",
      collegeId: ""
    },
    onSubmit: (values) => {
      submit(values);
    }
  });
  return <div style={stylesContainer}>
    <div className="container">
      <div className="title"><b>Registration Form</b></div>
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
          <div className="input-box">
            <label htmlFor="fullName">User Name</label>
            <input
              id="userName"
              name="userName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values?.userName}
            />
          </div>
          <div className="input-box">
            <label htmlFor="email">Email </label>
            <input
              id="email"
              name="email"
              type="text"
              onChange={formik.handleChange}
              value={formik.values?.email}
            />
          </div>
          <div className="input-box">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              onChange={formik.handleChange}
              value={formik.values?.phoneNumber}
            />
          </div>
          <div className="input-box">
            <label htmlFor="collegeId">College Id</label>
            <input
              id="collegeId"
              name="collegeId"
              type="text"
              onChange={formik.handleChange}
              value={formik.values?.collegeId}
            />
          </div>
          <div className="input-box">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="text"
              onChange={formik.handleChange}
              value={formik.values?.password}
            />
          </div>
          <div className="input-box">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="text"
              onChange={formik.handleChange}
              value={formik.values?.confirmPassword}
            />
          </div>
          <div className="input-box">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              onChange={formik.handleChange}
              value={formik.values.gender}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="button">
          <input type="submit" value="Register" />
        </div>
      </form >
    </div >
  </div>;
};
const mapDispatchToProps = (dispatch) => ({
  submit: data => dispatch(registerAsync(data))
});

const ConnectedRegister = connect(null, mapDispatchToProps)(Register);

export default ConnectedRegister;
