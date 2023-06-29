import Login from "./components/Login";
import Register from "./components/Register";

const routes = [
    {
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    }
];

export { routes };
