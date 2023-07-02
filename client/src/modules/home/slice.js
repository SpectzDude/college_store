/* eslint-disable camelcase */
import { createSlice } from "@reduxjs/toolkit";
import { STATE_REDUCER_KEY } from "./constants";
import { ACTION_TYPES } from "./actionTypes";

const initialState = {
    products: {
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
            .addCase(ACTION_TYPES.FETCH_PRODUCT_LIST_REQUEST, (state) => {
                state.products.requestInProgress = true;
            })
            .addCase(ACTION_TYPES.FETCH_PRODUCT_LIST_SUCCESS, (state, { payload }) => {
                state.products.requestInProgress = false;
                state.products.data = payload.data;
            })
            .addCase(ACTION_TYPES.FETCH_PRODUCT_LIST_FAILURE, (state) => {
                state.products.requestInProgress = false;
            });
    }
});

export const { actions, reducer } = slice;
