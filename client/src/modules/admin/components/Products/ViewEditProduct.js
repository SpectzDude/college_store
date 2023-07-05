import React, { useEffect, useState } from "react";

import { connect, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Typography, Box, TextField, Button, Grid } from "@mui/material";
import { useLocation } from "react-router-dom";

import { ErrorMessage, Field, Form, withFormik } from "formik";
import { createProduct, editProduct, fetchProductById, createDummy } from "../../actions";
import LoadingCustomOverlay from "../../../../common/components/LoadingOverLay";
import { getProductDetails } from "../../selectors";
import { actions } from "../../slice";
const TextArea = (p) => <TextField multiline maxRows={4} {...p} />;
const EditUser = (props) => {
    const { id } = useParams();
    const [view, setView] = useState(false);
    const [create, setCreate] = useState(false);
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const { productDetails: { requestInProgress } = {}, handleSubmit, setFieldValue } = props;
    useEffect(() => {
        if (id) {
            dispatch(fetchProductById(id));
            setFieldValue("_id", id);
        }
        if (pathname.includes("view")) {
            setView(true);
        }
        if (pathname.includes("/products/create")) {
            setCreate(true);
        }
        return () => dispatch(actions.clearAll());
    }, []);
    const handleDummy = () => {
        dispatch(createDummy());
    };
    return (
        <LoadingCustomOverlay active={requestInProgress}>
            <Box sx={{ flexGrow: 2, p: 4 }}>
                <Box sx={{ display: "flex", borderRadius: "10px", bgcolor: "primary.light", flexDirection: "column", p: 3, maxHeight: "60vh", overflowY: "scroll" }}>
                    {create ? (
                        <Typography variant="p" fontWeight={700} fontSize={18} py={2}>
                            Create Product
                        </Typography>
                    ) : (
                        <Typography variant="p" fontWeight={700} fontSize={18} py={2}>
                            {view ? "View" : "Edit"} Product
                        </Typography>
                    )}
                    {create && process.env === "development" && <Button
                        sx={{ px: 2 }} variant="contained" color="secondary" onClick={handleDummy}>
                        Create Dummy Product</Button>}
                    <Form onSubmit={handleSubmit}>
                        <Grid container columnSpacing={2} rowSpacing={3}>
                            <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                                <Field type="text" name="title" label="Product Title" as={TextField} />
                                <ErrorMessage name="title" component="div" />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                                <Field type="textarea" name="description" label="Product Description" as={TextArea} />
                                <ErrorMessage name="description" component="div" />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                                <Field type="text" name="category" label="Category" as={TextField} />
                                <ErrorMessage name="category" component="div" />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                                <Field type="text" name="price" label="Product Selling Price" as={TextField} />
                                <ErrorMessage name="price" component="div" />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                                <Field type="text" name="brand" label="Brand" as={TextField} />
                                <ErrorMessage name="brand" component="div" />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                                <Field type="text" name="discountPercentage" label="Add Discount %" as={TextField} />
                                <ErrorMessage name="discountPercentage" component="div" className="error-message" />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                                <Field type="number" name="stock" label="Stock Count" as={TextField} />
                                <ErrorMessage name="stock" component="div" className="error-message" />
                            </Grid>
                        </Grid>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", py: 2 }}>
                            <Box>
                                <Button sx={{ px: 2 }} variant="contained" color="secondary" type="submit">
                                    {id ? "Update" : "Create"}
                                </Button>
                            </Box>
                        </Box>
                    </Form>
                </Box>
            </Box>
        </LoadingCustomOverlay>
    );
};

const mapStateToProps = (state) => {
    return {
        productDetails: getProductDetails(state)
    };
};

const mapDispatchToProps = (dispatch) => ({
    submit: (values) => {
        if (values._id) {
            dispatch(editProduct(values));
        } else {
            dispatch(createProduct(values));
        }
    }
});

const EditUserConnected = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => {
        return props.productDetails.data;
    },
    handleSubmit: (values, { props }) => {
        props.submit(values);
    }
})(EditUser);

export default connect(mapStateToProps, mapDispatchToProps)(EditUserConnected);
