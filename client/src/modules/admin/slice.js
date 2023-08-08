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
            _id: "",
            brand: "",
            description: "",
            discountPercentage: 0,
            images: [""],
            preBookedCount: 0,
            price: "",
            stock: 0,
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
    },
    cropData: null,
    openUploaderModal: false,
    productImageFile: null,

    cropDataNewProd: null,
    openUploaderModalNewProd: false,
    dashboard: {
        userCount: 0,
        studentCount: 0,
        productCount: 0,
        pendingOrder: 0,
        orderInTransit: 0,
        deliveryPending: 0,
        delivered: 0,
        approvalPending: 0
    }

};


const slice = createSlice({
    initialState,
    name: STATE_REDUCER_KEY,
    reducers: {
        clearAll: () => initialState,
        setCropData: (state, { payload }) => {
            state.cropData = payload;
        },
        setCropDataNew: (state, { payload }) => {
            state.cropDataNewProd = payload;
        },
        setOpenUploader: (state, { payload }) => {
            state.openUploaderModal = payload;
        },
        setOpenUploaderNew: (state, { payload }) => {
            state.openUploaderModalNewProd = payload;
        }
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
            })
            .addCase(ACTION_TYPES.PRODUCT_IMAGE_UPLOAD_SUCCESS, (state, { payload }) => {
                state.openUploaderModal = false;
                state.productDetails.data = payload.data;
            })
            .addCase(ACTION_TYPES.NEW_PRODUCT_IMAGE_UPLOAD_SUCCESS, (state, { payload }) => {
                state.openUploaderModalNewProd = false;
                state.cropDataNewProd = null;
                state.productDetails.data.thumbnail = payload.data;
            })
            .addCase(ACTION_TYPES.FETCH_ORDERS_SUCCESS, (state, { payload }) => {
                state.pendingOrdersList.requestInProgress = false;
                state.pendingOrdersList.data = payload.data;
            })
            .addCase(ACTION_TYPES.DASHBOARD_STATS_SUCCESS, (state, { payload }) => {
                state.dashboard = payload.data;

            })
            .addCase(ACTION_TYPES.USERS_LIST_SUCCESS, (state, { payload }) => {
                state.usersList.data = payload.data;

            });
    }

}); //USERS_LIST_SUCCESS

export const { actions, reducer } = slice;
