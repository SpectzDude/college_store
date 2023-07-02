import mongoose from "mongoose";
import Orders from "../../models/Orders.js";
import Products from "../../models/Products.js";
import Student from "../../models/Student.js";

export const getProducts = (async (req, res) => {
    try {
        const products = await Products.find()
        if (!products) return res.status(404).json({ message: "No products in the list" })
        res.status(200).json({ data: products })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
});


export const buyNow = (async (req, res) => {
    const userId = req.userId
    const { _id: productId } = req.body;
    try {
        const student = await Student.findOne({ user: userId })
        const currDate = dateToEpoch(new Date())
        await Orders.create({ studentId: student._id, productId, date: currDate });
        const product = await Products.findOne({ _id: productId });
        if (!product) {
            return res.status(404).json({ message: "Product not found" })
        } else {
            if (product.stock > 0) {
                product.stock -= 1;

            } else {
                if (product.stock === 0) {
                    product.preBookedCount += 1;
                }
            }
            await product.save();
            res.status(200).json({ data: product })
        }

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
})


export const getOrdersByUserId = (async (req, res) => {
    const userID = mongoose.Types.ObjectId(req.userId);
    try {
        const student = await Student.findOne({ user: userID });
        console.log("userID", userID);
        console.log("student", student)
        if (!student) return res.status(404).json({ message: "No Student details found in the list" })
        const orders = await Orders.find({ studentId: student._id })
            .populate('productId', 'title price brand category')
            .select('title price brand category status deliveredStatus activityStatus message')
        if (!orders) return res.status(404).json({ message: "No Orders in the list" })
        res.status(200).json({ data: orders })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
})
