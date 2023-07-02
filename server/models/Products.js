import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    preBookedCount: Number,
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    stock: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images: [String],
});

// Create the product model
const Products = mongoose.model('Product', productSchema);

export default Products;


