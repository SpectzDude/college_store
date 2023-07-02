import React from "react";
import { Box, Typography } from "@mui/material";
import { Grid } from "@mui/material";
const Discount = ({ size = "60", discountPercentage = 0 }) => {
  const angle = (discountPercentage / 100) * 360;
  const circleColor = Number(discountPercentage) > 10 ? "light-green" : "light-red";
  return (
    <Grid sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }}>
      <Typography
        variant="p"
        fontWeight="bold"
        sx={{ color: "light-grey" }}
      >
        Discount :
      </Typography>
      <Box
        sx={{
          background: `radial-gradient(blue 55%, transparent 56%),
                conic-gradient(transparent 0deg ${angle}deg, dark-blue} ${angle}deg 360deg),
                ${circleColor}`,
          borderRadius: "50%",
          width: `${size}px`,
          height: `${size}px`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}

      >
        <Typography
          variant="p"
          fontWeight="bold"
          sx={{ color: Number(discountPercentage) > 10 ? "lightgreen" : "red" }}
        >
          {`${discountPercentage} %`}
        </Typography>
      </Box>
    </Grid>
  );
};

export default Discount;
