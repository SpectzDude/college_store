import React from "react";
import App from "../App";
import ErrorCatch from "./common/component/ErrorCatch";

import { routes as auth } from "../modules/auth/routes";
import UserHome from "./home/components/home";
import { PrivateRoute } from "./common/component/ProtectedRoute";
import OrderList from "./orders/components/OrdersList";

const routes =
    [
        {
            path: "/",
            element:
                <PrivateRoute>
                    <App />
                </PrivateRoute>,
            errorElement: <ErrorCatch />,
            children: [
                {
                    title: "admin",
                    path: "admin",
                    element:
                        <PrivateRoute>
                            {/* <AdminHome /> */}
                        </PrivateRoute>,
                    // children: adminRoutes || [],
                    errorElement: <ErrorCatch />
                },
                {
                    path: "home",
                    element:
                        <PrivateRoute>
                            <UserHome />
                        </PrivateRoute>,
                    errorElement: <ErrorCatch />
                },
                {
                    path: "orders",
                    element:
                        <PrivateRoute>
                            <OrderList />
                        </PrivateRoute>,
                    errorElement: <ErrorCatch />
                },
                {
                    path: "orders/view",
                    element:
                        <PrivateRoute>
                            <p>view order</p>
                        </PrivateRoute>,
                    errorElement: <ErrorCatch />
                }


            ]
        },
        {
            children: auth || [],
            errorElement: <ErrorCatch />
        }

    ];

export { routes };
