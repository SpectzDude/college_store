import { notify } from "reapop";

const NOTIFICATION_PROPS = {
    title: "",
    message: "",
    dismissible: false,
    position: "top-right",
    allowHTML: true
};

export const successNotify = (props) => notify({ ...NOTIFICATION_PROPS, ...props, title: "Success", dismissAfter: 2500, status: "success" });

export const infoNotify = (props) => notify({ ...NOTIFICATION_PROPS, ...props, dismissAfter: 2500, status: "info" });

export const warningNotify = (props) => notify({ ...NOTIFICATION_PROPS, ...props, status: "warning", dismissAfter: 4000 });

export const errorNotify = (props) => notify({ ...NOTIFICATION_PROPS, ...props, status: "error", dismissAfter: 4000 });

export const loaderNotify = (props) => notify({ ...NOTIFICATION_PROPS, ...props, status: "loading" });
