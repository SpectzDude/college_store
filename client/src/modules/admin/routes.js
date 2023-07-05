import Products from "./components/Products/Products";
import EditProducts from "./components/Products/ViewEditProduct";
import User from "./components/Products/Users/UsersList";
import ViewEditUser from "./components/Products/Users/ViewEditUser";
import PendingOrders from "./components/Products/Orders/PendingOrders";

const routes = [
    {
        children: [
            {
                path: "/admin/dashboard",
                element: <>dashboard</>
            },
            {
                path: "/admin/orders",
                element: <PendingOrders/>
            },
            {
                path: "/admin/users",
                element: <UsersList/>
            },
            {
                path: "/admin/users/:id/edit",
                element: <EditUser />
            },
            {
                path: "/admin/products",
                element: <Products />
            },
            {
                path: "/admin/products/:id/view",
                element: <EditProducts />
            },
            {
                path: "/admin/products/create",
                element: <EditProducts />
            },
            {
                path: "/admin/products/:id/edit",
                element: <EditProducts />
            }
        ]
    }
];

export { routes };
