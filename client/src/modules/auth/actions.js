import { createAction } from "@reduxjs/toolkit";
import { ACTION_TYPES } from "./actionTypes";
import { registerApi } from "./api";

export const login = createAction(ACTION_TYPES.LOGIN);

export const registerAsync = (data) => {
    return async (dispatch) => {
        try {
            await registerApi(dispatch, data);
            // Handle success
        } catch (error) {
            // Handle failure
        }
    };
};
export const fetchCurrentUser = createAction(ACTION_TYPES.USER_PROFILE);
