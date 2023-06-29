import React from "react";
import { Typography } from "@mui/material";
import "./App.css";
import HomeLayout from "./Layout/HomeLayout";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Typography className="app" component="div">
      <HomeLayout >
        <Outlet />
      </HomeLayout >
    </Typography>
  );
}

export default App;
