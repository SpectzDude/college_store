import { makeApiCall } from "../../utils/axios";
import { ACTION_TYPES } from "./actionTypes";

export const fetchAllProducts = async (dispatch) => {
    try {
        await makeApiCall(
            dispatch,
            "/admin/products",
            [ACTION_TYPES.FETCH_PRODUCT_LIST_REQUEST, ACTION_TYPES.FETCH_PRODUCT_LIST_SUCCESS, ACTION_TYPES.FETCH_PRODUCT_LIST_FAILURE],
            "GET"
        );
        // Handle success
    } catch (error) {
        // Handle failure
    }
};

export const createProductApi = async (dispatch, data) => {
    try {
        await makeApiCall(
            dispatch,
            "/admin/add-product",
            [ACTION_TYPES.CREATE_PRODUCT, ACTION_TYPES.CREATE_PRODUCT_SUCCESS, ACTION_TYPES.CREATE_PRODUCT_FAILURE],
            "GET",
            data
        );
        // Handle success
    } catch (error) {
        // Handle failure
    }
};

export const editProducts = async (dispatch, data = {}) => {
    try {
        await makeApiCall(
            dispatch,
            "/admin/products/",
            [ACTION_TYPES.EDIT_PRODUCT_REQUEST, ACTION_TYPES.EDIT_PRODUCT_SUCCESS, ACTION_TYPES.EDIT_PRODUCT_FAILURE],
            "PATCH",
            data
        );
        // Handle success
    } catch (error) {
        // Handle failure
    }
};

//fetchProductByIdApi
export const fetchProductByIdApi = async (dispatch, id) => {
    try {
        await makeApiCall(
            dispatch,
            `/admin/products/${id}`,
            [ACTION_TYPES.FETCH_PRODUCT_BY_ID_REQUEST, ACTION_TYPES.FETCH_PRODUCT_BY_ID_SUCCESS, ACTION_TYPES.FETCH_PRODUCT_BY_ID_FAILURE],
            "GET"
        );
        // Handle success
    } catch (error) {
        // Handle failure
    }
};

//deleteProductByIdApi
export const deleteProductByIdApi = async (dispatch, id) => {
    try {
        await makeApiCall(
            dispatch,
            `/admin/products/${id}`,
            [ACTION_TYPES.DELETE_PRODUCT_BY_ID_REQUEST, ACTION_TYPES.DELETE_PRODUCT_BY_ID_SUCCESS, ACTION_TYPES.DELETE_PRODUCT_BY_ID_FAILURE],
            "DELETE"
        );
        // Handle success
    } catch (error) {
        // Handle failure
    }
};
