/* eslint-disable camelcase */
import { createSlice } from "@reduxjs/toolkit";
import { STATE_REDUCER_KEY } from "./constants";
import { ACTION_TYPES } from "./actionTypes";

const initialState = {
    orders: {
        requestInProgress: false,
        data: []
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
            .addCase(ACTION_TYPES.FETCH_ORDERS_REQUEST, (state) => {
                state.orders.requestInProgress = true;
            })
            .addCase(ACTION_TYPES.FETCH_ORDERS_SUCCESS, (state, { payload = {} }) => {
                state.orders.requestInProgress = false;
                state.orders.data = payload.data;
            }).addCase(ACTION_TYPES.FETCH_ORDERS_FAILURE, (state) => {
                state.orders.requestInProgress = false;
            });
    }
});

export const { actions, reducer } = slice;
