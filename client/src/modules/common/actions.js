
import { successNotify } from "../../utils/repopUtils";
import { getNavigator } from "../common/selectors";
import { ACTION_TYPES } from "../common/actionTypes";
import { STORAGE_KEYS } from "./constants";


export const logout = (manualLogOut) => {
    return (dispatch, getState) => {
        dispatch({ type: ACTION_TYPES.LOG_OUT });
        try {
            const state = getState(); // Get the current state
            const navigator = getNavigator(state);
            navigator("/login");
            localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
            // dispatch(clearAllState());
            if (manualLogOut) {
                dispatch(successNotify({ message: "Successfully Logged Out" }));
            }

        } catch (error) {
            // Handle failure
        }
    };
};
