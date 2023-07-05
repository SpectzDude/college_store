/* eslint-disable camelcase */
import { createSlice } from "@reduxjs/toolkit";
import { STATE_REDUCER_KEY } from "./constants";
import { ACTION_TYPES } from "./actionTypes";

const initialState = {
    usersList: {
        requestInProgress: false,
        data: []
    },
    productList: {
        requestInProgress: false,
        data: []
    },
    productDetails: {
        requestInProgress: false,
        data: {
            brand: "",
            description: "",
            discountPercentage: "",
            images: [""],
            preBookedCount: "",
            price: "",
            stock: "",
            thumbnail: "",
            title: "",
            category: ""
        }
    },
    pendingOrdersList: {
        requestInProgress: false,
        data: []

    },
    deliveryList: {
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
            .addCase(ACTION_TYPES.FETCH_PRODUCT_BY_ID_REQUEST, (state) => {
                state.productDetails.requestInProgress = true;
            })
            .addCase(ACTION_TYPES.FETCH_PRODUCT_BY_ID_SUCCESS, (state, { payload = {} }) => {
                state.productDetails.requestInProgress = false;
                state.productDetails.data = payload.data;
            })
            .addCase(ACTION_TYPES.FETCH_PRODUCT_BY_ID_FAILURE, (state) => {
                state.productDetails.requestInProgress = false;
            })
            // 2
            .addCase(ACTION_TYPES.FETCH_PRODUCT_LIST_REQUEST, (state) => {
                state.productList.requestInProgress = true;
            })
            .addCase(ACTION_TYPES.FETCH_PRODUCT_LIST_SUCCESS, (state, { payload = {} }) => {
                state.productList.requestInProgress = false;
                state.productList.data = payload.data;
            })
            .addCase(ACTION_TYPES.FETCH_PRODUCT_LIST_FAILURE, (state) => {
                state.productList.requestInProgress = false;
            });
    }

}); //FETCH_PRODUCT_LIST_REQUEST

export const { actions, reducer } = slice;
