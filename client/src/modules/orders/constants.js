export const STATE_REDUCER_KEY = "orders";

export const TABLE_COLUMN = [
    {
        id: "id"
    },
    {
        id: "title",
        header: "Product Name",
        accessorKey: "title",
        size: 150
    },
    {
        id: "price",
        header: "Price",
        accessorKey: "price",
        size: 150
    },
    {
        id: "brand",
        header: "Brand",
        accessorKey: "brand",
        size: 150
    },

    {
        id: "category",
        header: "Product Category",
        accessorKey: "category",
        size: 150
    },
    {
        id: "status",
        header: "Order Status",
        accessorKey: "status",
        size: 150
    },
    {
        id: "deliveredStatus",
        header: "Delivery Status",
        accessorKey: "deliveredStatus",
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

