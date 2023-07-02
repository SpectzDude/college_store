import React, { useEffect } from "react";

import { connect, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Typography, Box, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import { editProduct, fetchProductById } from "../actions";

const EditProduct = (props) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { submit } = props;
    const formik = useFormik({
        initialValues: {
            password: "123",
            email: "admin@test.com"
        },
        onSubmit: (values) => {
            submit(values);
        }
    });
    useEffect(() => {
        dispatch(fetchProductById(id));
    }, []);


    return <Box sx={{ flexGrow: 2 }} >
        <Box sx={{ display: "flex", borderRadius: "10px", bgcolor: "secondary.main", flexDirection: "column", p: 3, maxHeight: "60vh" }}>
            <Typography variant="h2" py={2}>Login</Typography>
            <form onSubmit={formik.handleSubmit}>
                <div className="details">
                    <div className="input-box">
                        <TextField
                            id="email"
                            name="email"
                            label="Email"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                    </div>
                    <div className="input-box">
                        <TextField
                            id="password"
                            name="password"
                            label="Password"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                    </div>
                </div>
                <div className="button">
                    <Button variant="contained" color="primary" type="submit">
                        Login
                    </Button>
                </div>
            </form>
        </Box>
    </Box >;
};


const mapDispatchToProps = (dispatch) => ({
    submit: data => dispatch(editProduct(data))
});

const EditProductConnected = connect(null, mapDispatchToProps)(EditProduct);

export default EditProductConnected;
