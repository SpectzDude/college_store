import { Avatar } from "@mui/material";

export const STATE_REDUCER_KEY = "admin";


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
        id: "description",
        header: "Product Description",
        accessorKey: "description",
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
        id: "preBookedCount",
        header: "Pre-Booking Received",
        accessorKey: "preBookedCount",
        size: 150
    },
    {
        id: "thumbnail",
        header: "Product Image",
        accessorFn: (raw) => <Avatar alt={raw.description} src={raw.thumbnail || ""} variant="square" />,
        size: 150
    }
];


export const productColList = [
    "title",
    "description",
    "price",
    "stock",
    "brand",
    "category",
    "preBookedCount",
    "thumbnail",
    "mrt-row-actions"
];


export const ORDERS_TABLE_COLUMN = [
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
        id: "studentName",
        header: "Student Name",
        accessorKey: "user.fullName",
        size: 150
    },
    {
        id: "price",
        header: "Price",
        accessorKey: "price",
        size: 150
    },
    {
        id: "date",
        header: "Date",
        accessorKey: "date",
        size: 150
    },

    {
        id: "thumbnail",
        header: "Product Image",
        accessorKey: "thumbnail",
        size: 150
    }
];

export const ORDERS_STATUS = ["PENDING", "ORDER_PLACED", "ON_TRANSIT", "OUT_FOR_DELIVERY", "DELIVERED"];

export const pendingOrderColList = [
    "title",
    "studentName",
    "price",
    "date",
    "thumbnail",
    "mrt-row-actions"
];


export const TABLE_COLUMN_USER = [
    {
        id: "id"
    },
    {
        id: "studentName",
        header: "Student Name",
        accessorKey: "studentName",
        size: 150
    },
    {
        id: "status",
        header: "Status",
        accessorKey: "status",
        size: 150
    }

];

export const userColumnOrder = [
    "studentName",
    "Status",
    "mrt-row-actions"
];
