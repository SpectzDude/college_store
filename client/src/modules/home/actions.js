import { errorNotify, successNotify } from "../../utils/repopUtils";
import { buyNowApi, fetchProductApi } from "./api";


export const fetchProductList = () => {
    return async (dispatch) => {
        try {
            await fetchProductApi(dispatch);
        } catch (error) {
            // Handle failure
        }
    };
};

export const buyNow = (data) => {
    return async (dispatch) => {
        try {
            await buyNowApi(dispatch, data);
            dispatch(successNotify({ message: "Successfully ordered" }));
        } catch (error) {
            dispatch(errorNotify({ message: error.message }));
        }
    };
};
