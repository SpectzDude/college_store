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
    // eslint-disable-next-line no-unused-vars
    const { _id, ...newProd } = data;
    try {
        await makeApiCall(
            dispatch,
            "/admin/add-product",
            [ACTION_TYPES.CREATE_PRODUCT, ACTION_TYPES.CREATE_PRODUCT_SUCCESS, ACTION_TYPES.CREATE_PRODUCT_FAILURE],
            "POST",
            newProd
        );
        // Handle success
    } catch (error) {
        // Handle failure
    }
};

export const editProducts = async (dispatch, data = {}) => {
    const { _id = "", ...rest } = data;
    try {
        await makeApiCall(
            dispatch,
            `/admin/products/${_id}`,
            [ACTION_TYPES.EDIT_PRODUCT_REQUEST, ACTION_TYPES.EDIT_PRODUCT_SUCCESS, ACTION_TYPES.EDIT_PRODUCT_FAILURE],
            "PUT",
            rest
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

//createDummyApi
export const createDummyApi = async (dispatch) => {
    try {
        await makeApiCall(
            dispatch,
            "/admin/create-dummy",
            [ACTION_TYPES.CREATE_DUMMY_PROD_REQUEST, ACTION_TYPES.CREATE_DUMMY_PROD_SUCCESS, ACTION_TYPES.CREATE_DUMMY_PROD_FAILURE],
            "GET"
        );
        // Handle success
    } catch (error) {
        // Handle failure
    }
};
//editUserApi
export const editUserApi = async (dispatch) => {
    try {
        await makeApiCall(
            dispatch,
            "/admin/create-dummy",
            [ACTION_TYPES.CREATE_DUMMY_PROD_REQUEST, ACTION_TYPES.CREATE_DUMMY_PROD_SUCCESS, ACTION_TYPES.CREATE_DUMMY_PROD_FAILURE],
            "GET"
        );
        // Handle success
    } catch (error) {
        // Handle failure
    }
};

//uploadProductImageApi
export const uploadProductImageApi = async (dispatch, data) => {
    const { id, image = {} } = data;
    try {
        await makeApiCall(
            dispatch,
            `/admin/image/product-image/${id}`,
            [ACTION_TYPES.PRODUCT_IMAGE_UPLOAD_REQUEST, ACTION_TYPES.PRODUCT_IMAGE_UPLOAD_SUCCESS, ACTION_TYPES.PRODUCT_IMAGE_UPLOAD_FAILURE],
            "POST",
            image.file,
            "FILE"
        );
        // Handle success
    } catch (error) {
        // Handle failure
    }
};

export const uploadNewProductImageApi = async (dispatch, data) => {
    const { image = {} } = data;
    try {
        await makeApiCall(
            dispatch,
            "/admin/image/product-image/new",
            [ACTION_TYPES.NEW_PRODUCT_IMAGE_UPLOAD_REQUEST, ACTION_TYPES.NEW_PRODUCT_IMAGE_UPLOAD_SUCCESS, ACTION_TYPES.NEW_PRODUCT_IMAGE_UPLOAD_FAILURE],
            "POST",
            image.file,
            "FILE"
        );
        // Handle success
    } catch (error) {
        // Handle failure
    }
};

export const fetchPendingOrdersListApi = async (dispatch, data) => {
    const { key = "PENDING" } = data;
    try {
        await makeApiCall(
            dispatch,
            "/admin/orders/" + key,
            [ACTION_TYPES.FETCH_ORDERS_REQUEST, ACTION_TYPES.FETCH_ORDERS_SUCCESS, ACTION_TYPES.FETCH_ORDERS_FAILURE],
            "GET"
        );
        // Handle success
    } catch (error) {
        // Handle failure
    }
};
