import mongoose from "mongoose";
import Products from "../../models/Products.js";
import fs from 'fs-extra';
import path from "path";
import casual from 'casual';
import cloudinary from "../../config/imageUpload.js";
import { verifyFile } from "../../config/utils.js";

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
        if (!prod) return res.status(404).json({ message: "Product Already exists" })
        await Products.create(req.body);
        res.status(201).json({ data: "Success" })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
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
}


export const updateProductImageById = async (req, res) => {
    const file = req.body; // Access the binary file data from the request body
    const { id } = req.params;
    const prodID = id;

    try {
        if (!file || !file.buffer) {
            throw new Error("Invalid file data");
        }
        // validation
        // const { status, message = "" } = verifyFile(file);
        // if (!status) throw new Error(message);

        // Determine the base directory path
        const baseDir = process.cwd(); // Get the current working directory

        // Create the temp directory if it doesn't exist
        const tempDir = path.resolve(baseDir, 'temp');
        await fs.ensureDir(tempDir);

        // Save the file locally
        const localPath = path.resolve(tempDir, `${prodID}.jpg`);
        await fs.writeFile(localPath, Buffer.from(file.buffer));

        // Upload the file to Cloudinary
        const uploadResult = await cloudinary.uploader.upload(localPath, { folder: 'collegeStoreImages' });

        // Delete the local file
        await fs.unlink(localPath);

        const updatedProduct = await Products.findOneAndUpdate(
            { _id: prodID },
            {
                $set: {
                    thumbnail: uploadResult.secure_url,
                    'images.0': uploadResult.secure_url,
                },
            },
            { new: true }
        );
        res.status(201).json({ data: updatedProduct });
    } catch (error) {
        console.log('error', error.message);
        res.status(500).json({ message: error.message || 'Something went wrong' });
    }
};



