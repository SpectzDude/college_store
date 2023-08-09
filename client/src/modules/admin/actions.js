import { dismissNotification } from "reapop";
import { errorNotify, loaderNotify, successNotify } from "../../utilsReact/repopUtils";
import { createProductApi, deleteProductByIdApi, editProducts, fetchAllProducts, fetchProductByIdApi, createDummyApi, editUserApi, uploadProductImageApi, uploadNewProductImageApi, fetchPendingOrdersListApi, dashboardStatsApi, fetchUserListApi, handleApproveApi, handleRejectApi, handleBlockApi, handleUnBlockApi, deleteUserUserApi, deleteOrderApi, approveOrderApi, fetchPreBookedOrderApi } from "./api";
import { getNavigator } from "../common/selectors";


export const fetchProductList = () => {
    return async (dispatch) => {
        try {
            await fetchAllProducts(dispatch);
        } catch (error) {
            // Handle failure
        }
    };
};

export const createProduct = (data) => {
    return async (dispatch, getState) => {
        try {
            await createProductApi(dispatch, data);
            dispatch(successNotify({ message: "Product Successfully Created" }));
            const state = getState();
            const navigator = getNavigator(state);
            navigator("./admin/products");
        } catch (error) {
            dispatch(errorNotify({ message: error.message }));
        }
    };
};

export const editProduct = (data) => {
    return async (dispatch) => {
        try {
            await editProducts(dispatch, data);
            dispatch(successNotify({ message: "Updating Success" }));
        } catch (error) {
            dispatch(errorNotify({ message: error.message }));
        }
    };
};


export const fetchProductById = (data) => {
    return async (dispatch) => {
        try {
            await fetchProductByIdApi(dispatch, data);
        } catch (error) {
            dispatch(errorNotify({ message: error.message }));
        }
    };
};

export const deleteProd = (data) => {
    return async (dispatch) => {
        try {
            await deleteProductByIdApi(dispatch, data);
            dispatch(successNotify({ message: "Product Deleted" }));
            dispatch(fetchProductList());
        } catch (error) {
            dispatch(errorNotify({ message: error.message }));
        }
    };
};
export const createDummy = () => {
    return async (dispatch) => {
        try {
            await createDummyApi(dispatch);
            dispatch(successNotify({ message: "Dummy Product Created" }));
            dispatch(fetchProductList());
        } catch (error) {
            dispatch(errorNotify({ message: error.message }));
        }
    };
};

export const editUser = () => {
    return async (dispatch) => {
        try {
            await editUserApi(dispatch);
            dispatch(successNotify({ message: "Dummy Product Created" }));
            dispatch(fetchProductList());
        } catch (error) {
            dispatch(errorNotify({ message: error.message }));
        }
    };
};

export const uploadProductImage = (data) => {
    return async (dispatch) => {
        try {
            dispatch(loaderNotify({ id: "product-image-upload", title: "Uploading...", message: "Changing Product Image Data" }));
            await uploadProductImageApi(dispatch, data);
            dispatch(dismissNotification("product-image-upload"));
            dispatch(successNotify({ message: "Image uploaded successfully" }));
        } catch (error) {
            dispatch(errorNotify({ message: error.message }));
        }
    };
};

export const uploadNewProductImage = (data) => {
    return async (dispatch) => {
        try {
            dispatch(loaderNotify({ id: "product-image-upload-1", title: "Uploading...", message: "New Image Data" }));
            await uploadNewProductImageApi(dispatch, data);
            dispatch(dismissNotification("product-image-upload-1"));
            dispatch(successNotify({ message: "Image uploaded successfully" }));
        } catch (error) {
            dispatch(errorNotify({ message: error.message }));
        }
    };
};


export const fetchPendingOrdersList = (data) => {
    return async (dispatch) => {
        try {
            await fetchPendingOrdersListApi(dispatch, data);
        } catch (error) {
            dispatch(errorNotify({ message: error.message }));
        }
    };
};

export const dashboardStats = () => {
    return async (dispatch) => {
        try {
            await dashboardStatsApi(dispatch);
        } catch (error) {
            dispatch(errorNotify({ message: error.message }));
        }
    };
};
//fetchUserList
export const fetchUserList = () => {
    return async (dispatch) => {
        try {
            await fetchUserListApi(dispatch);
        } catch (error) {
            dispatch(errorNotify({ message: error.message }));
        }
    };
};
//handleApprove
export const handleApprove = (id) => {
    return async (dispatch) => {
        try {
            await handleApproveApi(dispatch, id);
            dispatch(successNotify({ message: "Student Approved" }));
            dispatch(fetchUserList());
        } catch (error) {
            dispatch(errorNotify({ message: error.message }));
        }
    };
};
//handleReject
export const handleReject = (id) => {
    return async (dispatch) => {
        try {
            await handleRejectApi(dispatch, id);
            dispatch(successNotify({ message: "Student Rejected from accessing application" }));
            dispatch(fetchUserList());
        } catch (error) {
            dispatch(errorNotify({ message: error.message }));
        }
    };
};


export const handleBlock = (id) => {
    return async (dispatch) => {
        try {
            await handleBlockApi(dispatch, id);
            dispatch(successNotify({ message: "Student Blocked" }));
            dispatch(fetchUserList());
        } catch (error) {
            dispatch(errorNotify({ message: error.message }));
        }
    };
};

export const handleUnBlock = (id) => {
    return async (dispatch) => {
        try {
            await handleUnBlockApi(dispatch, id);
            dispatch(successNotify({ message: "Student Unblocked" }));
            dispatch(fetchUserList());
        } catch (error) {
            dispatch(errorNotify({ message: error.message }));
        }
    };
};


export const deleteUser = (id) => {
    return async (dispatch) => {
        try {
            await deleteUserUserApi(dispatch, id);
            dispatch(successNotify({ message: "Profile Deleted Unblocked" }));
            dispatch(fetchUserList());
        } catch (error) {
            dispatch(errorNotify({ message: error.message }));
        }
    };
};
export const deleteOrder = (id) => {
    return async (dispatch) => {
        try {
            await deleteOrderApi(dispatch, id);
            dispatch(successNotify({ message: "Order Deleted Successfully" }));
            dispatch(fetchPendingOrdersList());
        } catch (error) {
            dispatch(errorNotify({ message: error.message }));
        }
    };
};


export const approveOrder = (id) => {
    return async (dispatch) => {
        try {
            await approveOrderApi(dispatch, id);
            dispatch(successNotify({ message: "Order sent" }));
            // dispatch(fetchPendingOrdersList());
        } catch (error) {
            dispatch(errorNotify({ message: error.message }));
        }
    };
};


export const fetchPreBookedOrder = () => {
    return async (dispatch) => {
        try {
            await fetchPreBookedOrderApi(dispatch);
        } catch (error) {
            dispatch(errorNotify({ message: error.message }));
        }
    };
};