/* eslint-disable no-undef */
import axios from "axios";
import { errorNotify } from "./repopUtils";
import { HTTP_CONSTANTS } from "./constants";
import { STORAGE_KEYS } from "../modules/common/constants";


export const API = axios.create({ baseURL: "http://localhost:4000" });


export const makeApiCall = (dispatch, endpoint, data, actionTypes, method = "POST", additionHeaders = {}) => {
    let authHeaders = {};
    let token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
    if (token) {
        authHeaders = { Authorization: `Bearer ${bearerToken}` };
    }
    let headers = { ...authHeaders, ...HTTP_CONSTANTS.HTTP_HEADERS, ...additionHeaders }
    const [requestActionType, successActionType, failureActionType] = actionTypes;
    return new Promise((resolve) => {
        dispatch({ type: requestActionType });
        const config = {
            method,
            url: endpoint,
            data,
            headers
        };

        API(config)
            .then((response) => {
                dispatch({ type: successActionType, payload: response.data });
                resolve(response.data);
            })
            .catch((error) => {
                dispatch({ type: failureActionType, payload: error.message });
                dispatch(errorNotify({ title: "ERROR", message: error.message }));
            });
    });
};
