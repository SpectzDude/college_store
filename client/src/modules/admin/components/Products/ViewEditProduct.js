import React, { useEffect, useState } from "react";

import { connect, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Typography, Box, TextField, Button, Grid } from "@mui/material";
import { useLocation } from "react-router-dom";

import { useFormik } from "formik";
import { editProduct, fetchProductById } from "../../actions";
import { STATE_REDUCER_KEY } from "../../constants";
import LoadingCustomOverlay from "../../../../common/components/LoadingOverLay";

const EditProduct = (props) => {
    const { id } = useParams();
    const [view, setView] = useState(false);
    const [create, setCreate] = useState(false);
    const { data, requestInProgress = false } = useSelector(state => state[STATE_REDUCER_KEY].productDetails);
    console.log("here data, requestInProgress = false", data, requestInProgress)
    const dispatch = useDispatch();
    const { location = "" } = useLocation();
    const { submit } = props;
    const formik = useFormik({
        initialValues: data,
        onSubmit: (values) => {
            submit(values);
        }
    });
    useEffect(() => {
        if (id) {
            dispatch(fetchProductById(id));
        }
        if (location.includes("view")) {
            setView(true);
        }
        if (location.includes("create")) {
            setCreate(true);
        }

    }, []);


    return <LoadingCustomOverlay active={requestInProgress}>
        <Box sx={{ flexGrow: 2, p: 4 }} >
            <Box sx={{ display: "flex", borderRadius: "10px", bgcolor: "primary.light", flexDirection: "column", p: 3, maxHeight: "60vh" }}>
                {/* {
                    create ? <Typography variant="h2" py={2}> {view ? "View" : "Edit"} Product</Typography>
                        : <Typography variant="h2" py={2}> Create Product</Typography>
                } */}
                {
                    create ? <Typography variant="p" fontWeight={700} fontSize={18} py={2}> Create Product</Typography>
                        : <Typography variant="p" fontWeight={700} fontSize={18} py={2}> {view ? "View" : "Edit"} Product</Typography>
                }
                <form onSubmit={formik.handleSubmit}>
                    <Grid container columnSpacing={2} rowSpacing={3}>
                        <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                            <TextField
                                id="title"
                                name="title"
                                label="Product Title"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.title}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                            <TextField
                                id="description"
                                name="description"
                                label="Product Description"
                                type="textarea"
                                onChange={formik.handleChange}
                                value={formik.values.description}
                            />
                        </Grid>
                    </Grid>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", py: 2 }} >
                        <Box>
                            <Button sx={{ px: 2 }} variant="contained" color="secondary" type="submit">
                                {id ? "Update" : "Create"}
                            </Button>
                        </Box>
                    </Box>
                </form>
            </Box>
        </Box >
    </LoadingCustomOverlay>;
};


const mapDispatchToProps = (dispatch) => ({
    submit: data => dispatch(editProduct(data))
});

const EditProductConnected = connect(null, mapDispatchToProps)(EditProduct);

export default EditProductConnected;
