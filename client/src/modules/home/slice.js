/* eslint-disable camelcase */
import { createSlice } from "@reduxjs/toolkit";
import { STATE_REDUCER_KEY } from "./constants";
import { ACTION_TYPES } from "./actionTypes";

const initialState = {
    products: {
        requestInProgress: false,
        data: []
    },
    student: {
        approvedStatus: true
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
            })
            .addCase(ACTION_TYPES.GET_STUDENT_PROFILE_SUCCESS, (state, { payload = {} }) => {
                state.student = payload.data;
            });
    }
});

export const { actions, reducer } = slice;
