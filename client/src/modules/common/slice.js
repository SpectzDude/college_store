/* eslint-disable camelcase */
import { createSlice } from "@reduxjs/toolkit";
import { STATE_REDUCER_KEY } from "./constants";
import { ACTION_TYPES as AUTH_ACTION } from "../auth/actionTypes";
import { ACTION_TYPES } from "./actionTypes";
const initialState = {
    navigator: null,
    user: {},
    homePath: "/home"

};


const slice = createSlice({
    initialState,
    name: STATE_REDUCER_KEY,
    reducers: {
        clearAll: () => initialState,
        setNavigator: (state, { payload = null }) => {
            state.navigator = payload;
        },
        setHomePath: (state, { payload = "/home" }) => {
            state.homePath = payload;
        },
        setUserDetails: (state, { payload = {} }) => {
            state.user = payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(AUTH_ACTION.USER_PROFILE_REQUEST, () => {

            })
            .addCase(AUTH_ACTION.USER_PROFILE_SUCCESS, (state, { payload }) => {
                state.user = payload.data;
                if (state.user.isAdmin) {
                    state.homePath = "/admin/dashboard";
                } else {
                    state.homePath = "/home";
                }
            }).addCase(AUTH_ACTION.USER_PROFILE_FAILURE, () => {
            })
            .addCase(ACTION_TYPES.LOG_OUT, (state) => {
                state.homePath = "/home";
            });
    }
});

export const { actions, reducer } = slice;
