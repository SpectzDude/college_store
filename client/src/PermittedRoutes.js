

import React, { Suspense } from "react";
import { Outlet, RouterProvider, createHashRouter } from "react-router-dom";
import { routes } from "./modules/routes";

import { Typography } from "@mui/material";

const PermittedRoutes = () => {
    return (
        <Suspense fallback={<Typography> Loading</Typography>}>
            {/* <RouterProvider router={createHashRouter(routePermission(user, routes))} /> */}
            <RouterProvider router={createHashRouter(routes)} />
            <Outlet />
        </Suspense>
    );
};

export default PermittedRoutes;
