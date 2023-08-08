import { errorNotify, successNotify } from "../../utils/repopUtils";
import { buyNowApi, fetchProductApi, fetchStudentProfileApi } from "./api";


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
            dispatch(successNotify({ message: "Item ordered successfully " }));
            dispatch(fetchProductList());
        } catch (error) {
            dispatch(errorNotify({ message: error.message }));
        }
    };
};

export const preOrder = (data) => {
    return async (dispatch) => {
        try {
            await buyNowApi(dispatch, data);
            dispatch(successNotify({ dismissAfter: 4500, message: "The item is currently out of stock. Once it becomes available, your order will be placed in one go and you will receive a confirmation of your successful order." }));
            dispatch(fetchProductList());
        } catch (error) {
            dispatch(errorNotify({ message: error.message }));
        }
    };
};

export const fetchStudentProfile = () => {
    return async (dispatch) => {
        try {
            await fetchStudentProfileApi(dispatch);
        } catch (error) {
            // Handle failure
        }
    };
};
