import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import "./App.css";
import HomeLayout from "./Layout/HomeLayout";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "./modules/common/slice";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.setNavigator(navigate));
  }, []);
  return (
    <Typography className="app" component="div">
      <HomeLayout >
        <Outlet />
      </HomeLayout >
    </Typography>
  );
}

export default App;
