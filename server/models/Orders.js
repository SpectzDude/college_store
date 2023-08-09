import mongoose from "mongoose";

const orderSChema = mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    date: Date,
    status: {
        type: String,
        required: true,
        index: true,
        default: "PENDING",
        enums: ["PENDING", "ORDER_PLACED", "ON_TRANSIT", "OUT_FOR_DELIVERY"]
    },
    deliveredStatus: {
        type: Boolean,
        required: true,
        default: false,
    },
    activityStatus: {
        type: Boolean,
        required: true,
        default: false,
    },
    orderType: {
        type: String,
        required: true,
        index: true,
        default: "REGULAR",
        enums: ["REGULAR", "PRE_BOOKED"]
    },
    message: String

})
const Orders = mongoose.model('Order', orderSChema)
export default Orders;