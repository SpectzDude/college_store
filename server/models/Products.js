import mongoose, { Schema } from "mongoose";

const productSChema = mongoose.Schema({
    category: String,
    preBookedCount: Number,
    image: String,
    stock: Number,
    status: {
        type: Boolean,
        required: true,
        default: true,
    },
    message: String

})
const Product = mongoose.model('Product', productSChema)
export default Product;