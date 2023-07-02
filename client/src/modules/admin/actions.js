import { errorNotify, successNotify } from "../../utils/repopUtils";
import { createProductApi, editProducts, fetchAllProducts, fetchProductByIdApi } from "./api";


export const fetchProductList = () => {
    return async (dispatch) => {
        try {
            await fetchAllProducts(dispatch);
        } catch (error) {
            // Handle failure
        }
    };
};

export const createProduct = (data) => {
    return async (dispatch) => {
        try {
            await createProductApi(dispatch, data);
            dispatch(successNotify({ message: "Successfully Created" }));
        } catch (error) {
            dispatch(errorNotify({ message: error.message }));
        }
    };
};

export const editProduct = (data) => {
    return async (dispatch) => {
        try {
            await editProducts(dispatch, data);
            dispatch(successNotify({ message: "Successfully ordered" }));
        } catch (error) {
            dispatch(errorNotify({ message: error.message }));
        }
    };
};


export const fetchProductById = (data) => {
    return async (dispatch) => {
        try {
            await fetchProductByIdApi(dispatch, data);
        } catch (error) {
            dispatch(errorNotify({ message: error.message }));
        }
    };
};
