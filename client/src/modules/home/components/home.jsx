import { useTheme } from "@emotion/react";
import { Box, Button, Grid, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import Header from "../../../common/components/Header";
import ItemCard from "../../../common/components/ItemCard";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { connect, useDispatch, useSelector } from "react-redux";
import { buyNow, fetchProductList, fetchStudentProfile, preOrder } from "../actions";
import { getProducts } from "../selectors";
import Overlay from "./OverLay";
import { STATE_REDUCER_KEY } from "../constants";
import Swal from "sweetalert2";
const UserHome = (props) => {
    const { items = [], fetchProductListAsync, fetchStudentAsync } = props;
    const theme = useTheme();
    const dispatch = useDispatch();
    const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
    const { approvedStatus = false } = useSelector(state => state[STATE_REDUCER_KEY].student);
    const orderType = ["REGULAR", "PRE_BOOKED"];
    useEffect(() => {
        fetchProductListAsync();
        fetchStudentAsync();
    }, []);
    const handleBuyNow = ({ item, buyOption }) => {
        if (!buyOption) {
            let data = { ...item, orderType: orderType[0] };
            Swal.fire({
                title: "Do you want pre book the product?",
                showDenyButton: true,
                confirmButtonText: "Order Now"
            }).then((result) => {
                if (result.isConfirmed) {
                    dispatch(preOrder(data));
                    Swal.fire("Ordered!", "", "success");
                } else if (result.isDenied) {
                    Swal.fire("Order cancel", "", "info");
                }
            });
        } else {
            let data = { ...item, orderType: orderType[1] };
            Swal.fire({
                title: "Do you want Buy the product?",
                showDenyButton: true,
                confirmButtonText: "Buy Now"
            }).then((result) => {
                if (result.isConfirmed) {

                    dispatch(buyNow(data));
                    Swal.fire("Ordered!", "", "success");
                } else if (result.isDenied) {
                    Swal.fire("Order cancel", "", "info");
                }
            });
        }
    };
    return <Box>
        <Overlay active={approvedStatus} />
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
                                <Button variant="contained" sx={{ color: "white", bgcolor: "#6262ff" }} onClick={() => handleBuyNow({ item, buyOption: true })}> Buy Now </Button> :
                                <Button variant="contained" sx={{ color: "white", bgcolor: "#4d4d4d" }} onClick={() => handleBuyNow({ item, buyOption: false })}> Pre Order </Button>}

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
        fetchProductListAsync: () => dispatch(fetchProductList()),
        fetchStudentAsync: () => dispatch(fetchStudentProfile())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(UserHome);

