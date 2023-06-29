import { useRouteError } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const ErrorCatch = () => {
    const error = useRouteError();
    return <ErrorPage error={error} />;
};

export default ErrorCatch;
