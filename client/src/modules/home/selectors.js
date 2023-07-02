import { flow } from "lodash";
import { STATE_REDUCER_KEY } from "./constants";

const getState = (state) => state[STATE_REDUCER_KEY];

const products = (state) => state.products.data;
export const getProducts = flow(getState, products);
