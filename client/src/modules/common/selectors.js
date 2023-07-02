
import { flow } from "lodash";

import { STATE_REDUCER_KEY } from "./constants";

const getState = (state) => state[STATE_REDUCER_KEY];

const navigator = (state) => state.navigator;
export const getNavigator = flow(getState, navigator);

const homePath = (state) => state.homePath;
export const getHomePath = flow(getState, homePath);

