/* eslint-disable camelcase */
import { createSlice } from "@reduxjs/toolkit";
import { STATE_REDUCER_KEY } from "./constants";

const initialState = {
    usersList: [],
    productList: {}

};


const slice = createSlice({
    initialState,
    name: STATE_REDUCER_KEY,
    reducers: {
        clearAll: () => initialState
    }
});

export const { actions, reducer } = slice;
