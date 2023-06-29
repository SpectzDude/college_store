import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";

import { Provider } from "react-redux";
import { persister, store } from "./Utils/store";
import { CssBaseline } from "@mui/material";
import ReactNotifications from "./modules/common/component/ReactNotification";
import PermittedRoutes from "./PermittedRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <CssBaseline />
        <ReactNotifications />
        <PermittedRoutes />
      </PersistGate>
    </Provider>
  </StrictMode>
);

