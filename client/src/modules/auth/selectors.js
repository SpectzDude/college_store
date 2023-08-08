import { flow } from "lodash";
import { STATE_REDUCER_KEY } from "./constants";

const getState = (state) => state[STATE_REDUCER_KEY];

const isLoggedIn = (state) => state.isLoggedIn;
export const getLoggedStatus = flow(getState, isLoggedIn);
