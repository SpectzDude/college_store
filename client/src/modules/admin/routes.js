import Products from "./components/Products/Products";
import EditProducts from "./components/Products/ViewEditProduct";
import UsersList from "./components/Users/UsersList";
import ViewEditUser from "./components/Users/ViewEditUser";
import PendingOrders from "./components/Orders/PendingOrders";
import DeliveryOrders from "./components/Orders/DeliveryOrders";
import Dashboard from "./components/Dashboard";
import PreBooked from "./components/Orders/PreBooked";

const routes = [
    {
        children: [
            {
                path: "/admin/dashboard",
                element: <Dashboard />
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
            {
                path: "/admin/pre-booked",
                element: <PreBooked />
            }
        ]
    }
];

export { routes };
