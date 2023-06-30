/* eslint-disable camelcase */
import { createSlice } from "@reduxjs/toolkit";
import { STATE_REDUCER_KEY } from "./constants";

const initialState = {
    navigator: null,
    homePath: "/home"

};


const slice = createSlice({
    initialState,
    name: STATE_REDUCER_KEY,
    reducers: {
        clearAll: () => initialState,
        setNavigator: (state, { payload = null }) => {
            state.navigator = payload;
        }
    }
});

export const { actions, reducer } = slice;
