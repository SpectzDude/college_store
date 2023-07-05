import Products from "./components/Products/Products";
import EditProducts from "./components/Products/ViewEditProduct";
import UsersList from "./components/Users/UsersList";
import ViewEditUser from "./components/Users/ViewEditUser";
import PendingOrders from "./components/Orders/PendingOrders";
import DeliveryOrders from "./components/Orders/DeliveryOrders";

const routes = [
    {
        children: [
            {
                path: "/admin/dashboard",
                element: <>dashboard</>
            },
            {
                path: "/admin/orders",
                element: <PendingOrders />
            },
            {
                path: "/admin/users",
                element: <UsersList />
            },
            {
                path: "/admin/users/:id/edit",
                element: <ViewEditUser />
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
            },
            {
                path: "/admin/orders",
                element: <PendingOrders />
            },
            {
                path: "/admin/orders/delivery",
                element: <DeliveryOrders />
            },
        ]
    }
];

export { routes };
