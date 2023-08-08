

import React, { Suspense } from "react";
import { Outlet, RouterProvider, createHashRouter } from "react-router-dom";
import { routes } from "./modules/routes";

import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { routePermission } from "./utilsReact/permissionUtils";
import { STATE_REDUCER_KEY } from "./modules/common/constants";

const PermittedRoutes = () => {
    const user = useSelector(state => state[STATE_REDUCER_KEY].user);
    return (
        <Suspense fallback={<Typography> Loading</Typography>}>
            <RouterProvider router={createHashRouter(routePermission(user, routes))} />
            <Outlet />
        </Suspense>
    );
};

export default PermittedRoutes;
