import { API, makeApiCall } from "../../utils/axios";
import { ACTION_TYPES } from "./actionTypes";


export const login = (formData) => API.post("/auth/register", formData);

export const registerApi = async (dispatch, data) => {
    try {
        await makeApiCall(
            dispatch,
            "/auth/register",
            data,
            [ACTION_TYPES.REGISTER_REQUEST, ACTION_TYPES.REGISTER_SUCCESS, ACTION_TYPES.REGISTER_FAILURE],
            "POST"
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
