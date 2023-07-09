import { errorNotify, successNotify } from "../../utils/repopUtils";
import { createProductApi, deleteProductByIdApi, editProducts, fetchAllProducts, fetchProductByIdApi, createDummyApi, editUserApi, uploadProductImageApi } from "./api";


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
            dispatch(successNotify({ message: "Product Successfully Created" }));
        } catch (error) {
            dispatch(errorNotify({ message: error.message }));
        }
    };
};

export const editProduct = (data) => {
    return async (dispatch) => {
        try {
            await editProducts(dispatch, data);
            dispatch(successNotify({ message: "Updating Success" }));
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

export const deleteProd = (data) => {
    return async (dispatch) => {
        try {
            await deleteProductByIdApi(dispatch, data);
            dispatch(successNotify({ message: "Product Deleted" }));
            dispatch(fetchProductList());
        } catch (error) {
            dispatch(errorNotify({ message: error.message }));
        }
    };
};
export const createDummy = () => {
    return async (dispatch) => {
        try {
            await createDummyApi(dispatch);
            dispatch(successNotify({ message: "Dummy Product Created" }));
            dispatch(fetchProductList());
        } catch (error) {
            dispatch(errorNotify({ message: error.message }));
        }
    };
};

export const editUser = () => {
    return async (dispatch) => {
        try {
            await editUserApi(dispatch);
            dispatch(successNotify({ message: "Dummy Product Created" }));
            dispatch(fetchProductList());
        } catch (error) {
            dispatch(errorNotify({ message: error.message }));
        }
    };
};


//uploadProductImage
export const uploadProductImage = (data) => {
    return async (dispatch) => {
        try {
            await uploadProductImageApi(dispatch, data);
            dispatch(successNotify({ message: "Image uploaded successfully" }));
            dispatch(fetchProductList());
        } catch (error) {
            dispatch(errorNotify({ message: error.message }));
        }
    };
};