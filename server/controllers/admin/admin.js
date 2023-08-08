import mongoose from "mongoose";
import Products from "../../models/Products.js";
import fs from 'fs-extra';
import path from "path";
import casual from 'casual';
import cloudinary from "../../config/imageUpload.js";
import { verifyFile } from "../../config/utils.js";
import Orders from "../../models/Orders.js";
import Student from "../../models/Student.js";
import User from "../../models/User.js";

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

export const getCount = async (model, filter = {}) => {
    try {
        return await model.countDocuments(filter);
    } catch (error) {
        console.error(`Error counting documents in ${model.collection.name}`, error);
        return null;
    }
};
export const getDashboardStats = async (req, res) => {
    try {
        const userCount = await User.countDocuments();
        const studentCount = await Student.countDocuments()
        const productCount = await Products.countDocuments()
        const pendingOrder = await Orders.countDocuments({ status: "PENDING" });
        const orderInTransit = await Orders.countDocuments({ status: "ON_TRANSIT" });
        const deliveryPending = await Orders.countDocuments({ status: "OUT_FOR_DELIVERY", deliveredStatus: false });
        const delivered = await Orders.countDocuments({ deliveredStatus: true });
        console.log("delivered", delivered)
        const approvalPending = await Student.find({ approvedStatus: false });
        const data = { userCount, studentCount, productCount, pendingOrder, orderInTransit, deliveryPending: deliveryPending.length, delivered: delivered.length, approvalPending: approvalPending.length }
        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};


export const getUsersAll = async (req, res) => {
    try {
        const users = await Student.find()
            .populate({
                path: 'user',
                select: 'fullName email status',
            })
        if (users.length < 1) {
            return res.status(400).json({ message: "No Users found" });
        }
        res.status(200).json({ data: users });
    } catch (error) {
        res.status(500).json({ message: error.message || "Something went wrong" });
    }
};

export const approveUser = async (req, res) => {
    const { id } = req.params
    try {
        const user = await Student.findOneAndUpdate(
            { _id: id },
            { $set: { approvedStatus: true } },
            { new: true }
        );
        if (!user.approvedStatus) {
            return res.status(400).json({ message: "Not Changed" });
        }
        res.status(200).json({ data: true });
    } catch (error) {
        res.status(500).json({ message: error.message || "Something went wrong" });
    }
};

export const restrictUser = async (req, res) => {
    const { id } = req.params
    try {
        const user = await Student.findOneAndUpdate(
            { _id: id },
            { $set: { approvedStatus: false } },
            { new: true }
        );
        if (user.approvedStatus) {
            return res.status(400).json({ message: "Cannot Restrict User" });
        }
        res.status(200).json({ data: true });
    } catch (error) {
        res.status(500).json({ message: error.message || "Something went wrong" });
    }
};

export const blockUser = async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.findOneAndUpdate(
            { _id: id },
            { $set: { status: false } },
            { new: true }
        );
        if (user.status) {
            return res.status(400).json({ message: "Cannot Block User" });
        }
        res.status(200).json({ data: true, message: "Blocked" });
    } catch (error) {
        res.status(500).json({ message: error.message || "Something went wrong" });
    }
};

export const unBlockUser = async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.findOneAndUpdate(
            { _id: id },
            { $set: { status: true } },
            { new: true }
        );
        if (!user.status) {
            return res.status(400).json({ message: "Cannot Un-Block User" });
        }
        res.status(200).json({ data: true, message: "Unblocked" });
    } catch (error) {
        res.status(500).json({ message: error.message || "Something went wrong" });
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params
    try {
        const student = await Student.findOne({ _id: id });
        if (!student) return res.status(400).json({ message: "No User found for Delete" });
        await User.deleteOne({ _id: student.user })
        await Student.deleteOne({ _id: id })
        res.status(200).json({ data: true, message: "Deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message || "Something went wrong" });
    }
};