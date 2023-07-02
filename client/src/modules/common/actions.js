
import { successNotify } from "../../utils/repopUtils";
import { getNavigator } from "../common/selectors";
import { STORAGE_KEYS } from "./constants";


export const logout = (manualLogOut) => {
    return async (dispatch, getState) => {
        try {

            const state = getState(); // Get the current state
            const navigator = getNavigator(state);
            localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
            // dispatch(clearAllState());
            navigator("/login");
            if (manualLogOut) {
                successNotify({ message: "Successfully Logged Out" });
            }

        } catch (error) {
            // Handle failure
        }
    };
};
