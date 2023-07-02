import { getProfile, loginApi, registerApi } from "./api";
import { getHomePath, getNavigator } from "../common/selectors";

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


export const getProfileAsync = () => {
    return async (dispatch, getState) => {
        try {
            await getProfile(dispatch);
            const state = getState(); // Get the current state
            const navigator = getNavigator(state);
            const path = getHomePath(state);
            navigator(`${path}`);
        } catch (error) {
            // Handle failure
        }
    };
};

export const loginAsync = (data) => {
    return async (dispatch, getState) => {
        try {
            await loginApi(dispatch, data);
            dispatch(getProfileAsync());
            setTimeout(() => {
                const state = getState();
                const navigator = getNavigator(state);
                const path = getHomePath(state);
                navigator(`${path}`);
                window.location.reload();
            }, 3000);
        } catch (error) {
            // Handle failure
        }
    };
};
