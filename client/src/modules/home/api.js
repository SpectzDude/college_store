import { makeApiCall } from "../../utilsReact/axios";
import { ACTION_TYPES } from "./actionTypes";

export const fetchProductApi = async (dispatch) => {
    try {
        await makeApiCall(
            dispatch,
            "/student/products",
            [ACTION_TYPES.FETCH_PRODUCT_LIST_REQUEST, ACTION_TYPES.FETCH_PRODUCT_LIST_SUCCESS, ACTION_TYPES.FETCH_PRODUCT_LIST_FAILURE],
            "GET"
        );
        // Handle success
    } catch (error) {
        // Handle failure
    }
};

export const buyNowApi = async (dispatch, data) => {
    try {
        await makeApiCall(
            dispatch,
            "/student/buy-now",
            [ACTION_TYPES.BUY_NOW_REQUEST, ACTION_TYPES.BUY_NOW_SUCCESS, ACTION_TYPES.BUY_NOW_FAILURE],
            "POST",
            data
        );
        // Handle success
    } catch (error) {
        // Handle failure
    }
};
//fetchStudentProfileApi
export const fetchStudentProfileApi = async (dispatch) => {
    try {
        await makeApiCall(
            dispatch,
            "/student/profile",
            [ACTION_TYPES.GET_STUDENT_PROFILE_REQUEST, ACTION_TYPES.GET_STUDENT_PROFILE_SUCCESS, ACTION_TYPES.GET_STUDENT_PROFILE_FAILURE],
            "GET"
        );
        // Handle success
    } catch (error) {
        // Handle failure
    }
};
