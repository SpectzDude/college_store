import { makeApiCall } from "../../utils/axios";
import { ACTION_TYPES } from "./actionTypes";

export const registerApi = async (dispatch, data) => {
    try {
        await makeApiCall(
            dispatch,
            "/auth/register",
            [ACTION_TYPES.REGISTER_REQUEST, ACTION_TYPES.REGISTER_SUCCESS, ACTION_TYPES.REGISTER_FAILURE],
            "POST",
            data
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
            [ACTION_TYPES.LOGIN_REQUEST, ACTION_TYPES.LOGIN_SUCCESS, ACTION_TYPES.LOGIN_FAILURE],
            "POST",
            data
        );
        // Handle success
    } catch (error) {
        // Handle failure
    }
};
