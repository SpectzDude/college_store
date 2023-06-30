/* eslint-disable camelcase */
import { createSlice } from "@reduxjs/toolkit";
import { STATE_REDUCER_KEY } from "./constants";
import { ACTION_TYPES } from "./actionTypes";
import { STORAGE_KEYS } from "../common/constants";

const initialState = {
    signIn: {
        requestInProgress: false,
        data: {
            email: "",
            password: ""
        }
    },
    signUp: {
        confirm: false,
        requestInProgress: false,
        data: {
            email: "",
            password: "",
            confirmPassword: "",
            companyName: ""

        }
    }

};


const slice = createSlice({
    initialState,
    name: STATE_REDUCER_KEY,
    reducers: {
        clearAll: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(ACTION_TYPES.LOGIN_REQUEST, (state) => {
                state.signIn.requestInProgress = true;
            })
            .addCase(ACTION_TYPES.LOGIN_SUCCESS, (state, { payload }) => {
                const { token = "" } = payload;
                localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, token);
                state.signIn.requestInProgress = false;
            }).addCase(ACTION_TYPES.LOGIN_FAILURE, (state) => {
                state.signIn.requestInProgress = false;
            }).addCase(ACTION_TYPES.REGISTER_REQUEST, (state) => {
                state.signUp.requestInProgress = true;
            }).addCase(ACTION_TYPES.REGISTER_SUCCESS, (state, { payload }) => {
                const { token = "" } = payload;
                localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, token);
                state.signUp.requestInProgress = false;
            }).addCase(ACTION_TYPES.REGISTER_FAILURE, (state) => {
                state.signUp.requestInProgress = false;
            });
    }
});

export const { actions, reducer } = slice;
