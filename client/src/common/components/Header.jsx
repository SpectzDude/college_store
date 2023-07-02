import React from "react";
import { Typography, Box } from "@mui/material";

const Header = ({ title, subtitle }) => {

  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color="lightgray"
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color="blue">
        {subtitle}
      </Typography>
    </Box >
  );
};

export default Header;
