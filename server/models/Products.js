import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    preBookedCount: {
        type: Number,
        default: 0,
        required: true,
    },
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    stock: {
        type: Number,
        default: 2,
        required: true,
    },
    brand: String,
    category: String,
    thumbnail: String,
    images: [String],
});

// Create the product model
const Products = mongoose.model('Product', productSchema);

export default Products;


