import { flow } from "lodash";
import { STATE_REDUCER_KEY } from "./constants";

const getState = (state) => state[STATE_REDUCER_KEY];

const productDetails = (state) => state.productDetails;
export const getProductDetails = flow(getState, productDetails);
