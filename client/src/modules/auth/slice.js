/* eslint-disable camelcase */
import { createSlice } from "@reduxjs/toolkit";
import { STATE_REDUCER_KEY } from "./constants";

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
    }
});

export const { actions, reducer } = slice;
