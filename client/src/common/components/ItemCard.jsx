import { Box, Tooltip, Typography } from "@mui/material";
import Discount from "./Discount";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ItemCard = ({ title = "", brand = "", subtitle = "", stock = 0, discountPercentage, icon, imageUrl = "", description = "", price = "",}) => {
 const formattedPrice = price.toLocaleString("en-IN", { style: "currency", currency: "INR" });

  return (
    <Box width="100%" m="0 30px" p="12px 12px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {imageUrl ? <Box
            component="img"
            sx={{
              height: 100,
              width: 75,
              maxHeight: { xs: 100, md: 80 },
              maxWidth: { xs: 75, md: 63 },
              borderRadius: "10px"
            }}
            alt={`${subtitle} ${brand}`}
            src={imageUrl}
          /> : icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: "black" }}
          >
            {title}
          </Typography>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: "red" }}
          >
            {`${formattedPrice}`}
          </Typography>
          <Box sx={{ display: "flex", width: "120px", height: "10px" }}>
            {stock ? <Typography sx={{ color: "green" }}> Available </Typography> : <Typography sx={{ color: "gray" }}> Out of stock </Typography>}</Box>
          <Typography
            variant="p"
            fontWeight="bold"
            sx={{ color: "#5a5a5a" }}
          >
            Manufacturer :
          </Typography>
          <Typography
            variant="h6"
            fontWeight="bold"
            display="inline"
            sx={{ color: "#5a5a5a" }}
          >
            {brand}
          </Typography>
        </Box>
        <Box>
          <Discount discountPercentage={discountPercentage} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Box>
          <Typography variant="h6" display="inline" sx={{ color: "#5a5a5a" }}>
            Category :
          </Typography>
          <Typography display="inline" variant="p" sx={{ color: "#5a5a5a" }}>
            {subtitle}
          </Typography>
        </Box>
      </Box>
      <Tooltip title={description}>
        <ExpandMoreIcon sx={{ cursor: "pointer" }} />
      </Tooltip>
    </Box>
  );
};

export default ItemCard;
