export const STATE_REDUCER_KEY = "orders";

export const TABLE_COLUMN = [
    {
        id: "id"
    },
    {
        id: "title",
        header: "Product Name",
        accessorKey: "productId.title",
        size: 150
    },
    {
        id: "price",
        header: "Price",
        accessorKey: "productId.price",
        size: 150
    },
    {
        id: "brand",
        header: "Brand",
        accessorKey: "productId.brand",
        size: 150
    },

    {
        id: "category",
        header: "Product Category",
        accessorKey: "productId.category",
        size: 150
    },
    {
        id: "status",
        header: "Order Status",
        accessorFn: (row) => row.status ? "Order Placed" : "Pending",
        size: 150
    },
    {
        id: "deliveredStatus",
        header: "Delivery Status",
        accessorFn: (row) => row.deliveredStatus ? "Delivered" : "Pending",
        size: 150
    }, {
        id: "message",
        header: "Remarks",
        accessorKey: "message",
        size: 150
    }
];


export const orderList = [
    "title",
    "price",
    "brand",
    "category",
    "status",
    "deliveredStatus",
    "activityStatus",
    "message",
    "mrt-row-actions"
];

