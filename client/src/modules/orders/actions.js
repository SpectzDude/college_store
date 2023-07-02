import { createAction } from "@reduxjs/toolkit";
import { ACTION_TYPES } from "./actionTypes";
import { loginApi, ordersListApi } from "./api";
import { getNavigator } from "../common/selectors";


export const fetchOrdersList = () => {
    return async (dispatch, getState) => {
        try {
            await ordersListApi(dispatch);
            const state = getState(); // Get the current state
            const navigator = getNavigator(state);
            navigator("/home");
        } catch (error) {
            // Handle failure
        }
    };
};


export const loginAsync = (data) => {
    return async (dispatch, getState) => {
        try {
            await loginApi(dispatch, data);
            const state = getState(); // Get the current state
            const navigator = getNavigator(state);
            navigator("/home");
        } catch (error) {
            // Handle failure
        }
    };
};
export const fetchCurrentUser = createAction(ACTION_TYPES.USER_PROFILE);
