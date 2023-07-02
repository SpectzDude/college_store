import { loginApi, registerApi } from "./api";
import { getNavigator } from "../common/selectors";

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
