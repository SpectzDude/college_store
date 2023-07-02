import Products from "./components/Products";

const routes = [
    {
        children: [
            {
                path: "students",
                element: <>Users list</>
            },
            {
                path: "products",
                element: <Products />
            },
            {
                path: "products/:id/view",
                element: <>products</>
            },
            {
                path: "products/:id/edit",
                element: <>products</>
            }
        ]
    }
];

export { routes };
