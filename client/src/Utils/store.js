import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { reducer as notificationsReducer } from "reapop";
import { persistStore, persistReducer } from "reduxjs-toolkit-persist";
import storage from "reduxjs-toolkit-persist/lib/storage";
import autoMergeLevel1 from "reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
const middleWares = [];

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === "development") {
    middleWares.push(logger);
}

const persistConfig = {
    key: "root",
    storage: storage,
    stateReconciler: autoMergeLevel1,
    whitelist: ["common"]
};

const reducers = combineReducers({
    ...rootReducer,
    notifications: notificationsReducer()
});

const persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: [...middleWares, thunk]
});

export const persister = persistStore(store);

