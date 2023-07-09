import mongoose from "mongoose";
import Products from "../../models/Products.js";
import fs from 'fs-extra';
import path from "path";
import casual from 'casual';
import cloudinary from "../../config/imageUpload.js";
import { verifyFile } from "../../config/utils.js";
import Orders from "../../models/Orders.js";
import Student from "../../models/Student.js";

function generateRandomProduct() {
    const product = {
        preBookedCount: 0,
        title: casual.title,
        description: casual.sentence,
        price: casual.price || Math.floor(Math.random() * (2000 - 50 + 1)) + 50,
        discountPercentage: casual.integer(0, 100),
        stock: casual.integer(0),
        brand: casual.company_name,
        category: casual.department,
        thumbnail: "https://m.media-amazon.com/images/I/61snCvvBuRL._AC_UF1000,1000_QL80_.jpg",
        images: ["https://m.media-amazon.com/images/I/61snCvvBuRL._AC_UF1000,1000_QL80_.jpg"]
    };

    return product;
}


export const addProducts = async (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) return res.status(400).json({ message: "No details entered for the product, enter title and description of the products" })
    try {
        const prod = await Products.exists({ title })
        if (prod) return res.status(404).json({ message: "Product Already exists" })
        await Products.create(req.body);
        res.status(201).json({ data: "Success" })
    } catch (error) {
        res.status(500).json({ message: error.message || "Something went wrong" });
    }
}

export const addDummyProducts = async (req, res) => {
    const { title, description } = req.body;
    const dummyProduct = generateRandomProduct();
    try {
        const prod = await Products.create(dummyProduct);
        res.status(201).json({ data: prod })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

export const getProductById = async (req, res) => {
    const _id = mongoose.Types.ObjectId(req.params.id);

    try {
        const prod = await Products.findOne({ _id });
        res.status(200).json({ data: prod })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

export const updateProductById = async (req, res) => {
    const { _id, ...updatedData } = req.body;
    const { id } = req.params;
    const prodID = _id || id;
    try {
        const updatedProduct = await Products.findOneAndUpdate(
            { _id: prodID },
            updatedData,
            { new: true })
        res.status(201).json({ data: updatedProduct });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}
//deleteProductById
export const deleteProductById = async (req, res) => {
    const _id = mongoose.Types.ObjectId(req.params.id);
    try {
        const result = await Products.findOneAndDelete({ _id });
        if (!result) return res.status(404).json({ message: "Product not found in the list " })
        res.status(200).json({ data: {} });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};


export const getPendingOrders = async (req, res) => {
    const { key = "PENDING" } = req.params;
    try {
        const orders = await Orders.find({ status: key })
            .populate({
                path: 'productId',
                select: 'title price thumbnail',
            })
            .select('date status');

        if (orders.length === 0) {
            return res.status(404).json({ message: "No orders found" });
        }

        const formattedOrders = (
            orders.map((order) => {
                const { productId, date, status, studentId } = order;
                const { title, price, thumbnail } = productId;
                return {
                    studentId,
                    title,
                    price,
                    date,
                    status,
                    thumbnail,
                };
            })
        );

        res.status(200).json({ data: formattedOrders });
    } catch (error) {
        res.status(500).json({ message: error.message || "Something went wrong" });
    }
};






