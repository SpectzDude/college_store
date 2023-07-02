import { useTheme } from "@emotion/react";
import { Box, Button, Grid, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import Header from "../../../common/components/Header";
import ItemCard from "../../../common/components/ItemCard";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { connect } from "react-redux";
import { fetchProductList } from "../actions";
import { getProducts } from "../selectors";

const UserHome = (props) => {
    const { items = [], fetchProductListAsync } = props;
    const theme = useTheme();
    const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
    useEffect(() => {
        fetchProductListAsync();
    }, []);
    return <Box>
        <Box m="20px">
            <Box
                display={smScreen ? "flex" : "block"}
                flexDirection={smScreen ? "row" : "column"}
                justifyContent={smScreen ? "space-between" : "start"}
                alignItems={smScreen ? "center" : "start"}
                m="10px 0"
            >
                <Header title="Products" subtitle="All student items available for purchase here" />
                <Box>
                </Box>
            </Box>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
                {items.map((item, idx) => {
                    return <Grid key={idx} item xs={12} sm={12} md={6} lg={4} xl={4}>
                        <Box
                            width="100%"
                            backgroundColor="primary"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{
                                borderRadius: "5px",
                                boxShadow: "gray 0px 3px 8px",
                                transition: "transform 300ms ease-out",
                                "&:hover": {
                                    backgroundColor: "secondary",
                                    cursor: "pointer",
                                    transform: "scale(1.05)"
                                }
                            }}
                        >
                            <ItemCard
                                title={item.title}
                                brand={item.brand}
                                subtitle={item.category}
                                discountPercentage={item.discountPercentage}
                                description={item.description}
                                price={item.price}
                                stock={item.stock}
                                imageUrl={item.thumbnail}
                                icon={
                                    <PhoneAndroidIcon
                                        sx={{ color: "lightblue", fontSize: "26px" }}
                                    />
                                }
                            />
                            {item.stock > 0 ?
                                <Button variant="contained" sx={{ color: "white", bgcolor: "#6262ff" }}> Buy Now </Button> :
                                <Button variant="contained" sx={{ color: "white", bgcolor: "#4d4d4d" }}> Pre Order </Button>}

                        </Box>
                    </Grid>;
                })}
            </Grid>
        </Box>
    </Box>;
};
const mapStateToProps = (state) => {
    return {
        items: getProducts(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProductListAsync: () => dispatch(fetchProductList())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(UserHome);
