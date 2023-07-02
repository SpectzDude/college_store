import { Box, Tooltip, Typography } from "@mui/material";
import Discount from "./Discount";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ItemCard = ({ title = "", brand = "", subtitle = "", discountPercentage, icon, imageUrl = "", description = "", price = "" }) => {


  return (
    <Box width="100%" m="0 30px" p="12px 0">
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
            sx={{ color: "lightgray" }}
          >
            {title}
          </Typography>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: "red" }}
          >
            {`$ ${price}`}
          </Typography>
          <Typography
            variant="p"
            fontWeight="bold"
            sx={{ color: "lightgray" }}
          >
            Manufacturer :
          </Typography>
          <Typography
            variant="h6"
            fontWeight="bold"
            display="inline"
            sx={{ color: "lightgray" }}
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
          <Typography variant="h6" display="inline" sx={{ color: "lightgray" }}>
            Category :
          </Typography>
          <Typography display="inline" variant="p" sx={{ color: "lightgray" }}>
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
