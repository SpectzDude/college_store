import Products from "./components/Products/Products";
import EditProducts from "./components/Products/ViewEditProduct";


const routes = [
    {
        children: [
            {
                path: "/admin/dashboard",
                element: <>dashboard</>
            },
            {
                path: "/admin/users",
                element: <>Users list</>
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
                element: <>products</>
            }
        ]
    }
];

export { routes };
