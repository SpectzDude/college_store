/* eslint-disable no-undef */
import axios from "axios";
import { errorNotify } from "./repopUtils";
import { ERROR_CODE, HTTP_CONSTANTS } from "./constants";
import { STORAGE_KEYS } from "../modules/common/constants";
import { logout } from "../modules/common/actions";


export const API = axios.create({ baseURL: "http://localhost:4000" });


export const makeApiCall = (dispatch, endpoint, actionTypes = ["REQUEST", "SUCCESS", "FAILURE"], method = "POST", data, type = "") => {
    let authHeaders = {};
    let additionalHeaders = {};
    const token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
    if (token) {
        authHeaders = { Authorization: `Bearer ${token}` };
    }
    if (type === "FILE") {
        additionalHeaders = {
            "Content-Type": "application/octet-stream"
        };
    }
    let headers = { ...authHeaders, ...HTTP_CONSTANTS.HTTP_HEADERS, ...additionalHeaders };
    const [requestActionType, successActionType, failureActionType] = actionTypes;

    return new Promise((resolve) => {
        dispatch({ type: requestActionType });
        const config = {
            method,
            url: endpoint,
            headers
        };
        if (method === "POST" || method === "PUT") {
            config.data = data;
        }

        API(config)
            .then((response) => {
                dispatch({ type: successActionType, payload: response.data });
                resolve(response.data);
            })
            .catch((error) => {
                const { message, response: { status, statusText, data: { message: apiMessage, detail: errors = "", errorCode } = {} } = {} } = error;
                dispatch({ type: failureActionType, payload: error.message });
                if (errorCode === ERROR_CODE.EXPIRED) {
                    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
                    dispatch(logout(false));
                    window.location.reload();
                }
                dispatch(errorNotify({ title: statusText || status || message || "ERROR", message: apiMessage || errors }));
            });
    });
};
