import { createAction } from "@reduxjs/toolkit";
import { ACTION_TYPES } from "./actionTypes";
import { registerApi } from "./api";
import { getNavigator } from "../common/selectors";

export const login = createAction(ACTION_TYPES.LOGIN);

export const registerAsync = (data) => {
    return async (dispatch, getState) => {
        try {
            await registerApi(dispatch, data);
            const state = getState(); // Get the current state
            const navigator = getNavigator(state);
            navigator("/home");
        } catch (error) {
            // Handle failure
        }
    };
};
export const fetchCurrentUser = createAction(ACTION_TYPES.USER_PROFILE);
