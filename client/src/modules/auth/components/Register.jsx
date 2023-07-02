import React, { useEffect } from "react";
import { useFormik } from "formik";
import { registerAsync } from "../actions";
import "./style.css";
import cover from "./mcbg.jpg";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { actions as commonSliceActions } from "../../common/slice";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import UserLogo from "./user.png";
export const stylesContainer = {
  backgroundImage: `url(${cover})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  height: "100vh",
  paddingTop: "40px"
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
      fullName: "student",
      userName: "st1",
      email: "student@test.com",
      phoneNumber: "1111",
      password: "222",
      confirmPassword: "222",
      gender: "male",
      collegeId: "555"
    },
    onSubmit: (values) => {
      submit(values);
    }
  });
  return <Box style={stylesContainer}>
    <Box sx={{ position: "absolute" }}>
      <Box sx={{ position: "relative", top: "-40px", left: "5px" }}>
        <img src={UserLogo} alt="logo" style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
      </Box>
    </Box>
    <Box sx={{ display: "flex", borderRadius: "10px", bgcolor: "secondary.main", flexDirection: "column", p: 3, height: "80vh", overflowY: "scroll" }}>
      <Typography variant="h2" py={2}>Registration Form</Typography>
      <form onSubmit={formik.handleSubmit}>
        <div className="details">
          <div className="input-box">
            <TextField
              id="fullName"
              name="fullName"
              label="Full Name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.fullName}
            />
          </div>
          <div className="input-box">
            <TextField
              id="userName"
              name="userName"
              label="User Name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.userName}
            />
          </div>
          <div className="input-box">
            <TextField
              id="email"
              name="email"
              label="Email"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div className="input-box">
            <TextField
              id="phoneNumber"
              name="phoneNumber"
              label="Phone Number"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
            />
          </div>
          <div className="input-box">
            <TextField
              id="collegeId"
              name="collegeId"
              label="College ID"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.collegeId}
            />
          </div>
          <div className="input-box">
            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <div className="input-box">
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
          </div>
          <div className="input-box">
            <FormControl>
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                id="gender"
                name="gender"
                labelId="gender-label"
                value={formik.values.gender}
                onChange={formik.handleChange}
              >
                <MenuItem value="">Select Gender</MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="button">
          <Button variant="contained" color="primary" type="submit">
            Register
          </Button>
        </div>
      </form>
      <Box>
        <Typography variant="p" display="inline"> Already have an account? </Typography>
        <Typography onClick={() => navigate("../login")} variant="p" sx={{ color: "blue", cursor: "pointer" }} display="inline">  Login </Typography>
      </Box>
    </Box>
  </Box >;

};
const mapDispatchToProps = (dispatch) => ({
  submit: data => dispatch(registerAsync(data))
});

const ConnectedRegister = connect(null, mapDispatchToProps)(Register);

export default ConnectedRegister;
