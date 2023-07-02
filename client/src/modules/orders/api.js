import { makeApiCall } from "../../utils/axios";
import { ACTION_TYPES } from "./actionTypes";


export const ordersListApi = async (dispatch) => {
    try {
        await makeApiCall(
            dispatch,
            "/student/orders",
            [ACTION_TYPES.FETCH_ORDERS_REQUEST, ACTION_TYPES.FETCH_ORDERS_SUCCESS, ACTION_TYPES.FETCH_ORDERS_FAILURE],
            "GET"
        );
        // Handle success
    } catch (error) {
        // Handle failure
    }
};


export const loginApi = async (dispatch, data) => {
    try {
        await makeApiCall(
            dispatch,
            "/auth/login",
            data,
            [ACTION_TYPES.LOGIN_REQUEST, ACTION_TYPES.LOGIN_SUCCESS, ACTION_TYPES.LOGIN_FAILURE],
            "POST"
        );
        // Handle success
    } catch (error) {
        // Handle failure
    }
};
