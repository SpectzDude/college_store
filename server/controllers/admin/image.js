import Products from "../../models/Products.js";
import fs from 'fs-extra';
import path from "path";
import cloudinary from "../../config/imageUpload.js";
import { generateUniqueID } from "../../config/utils.js";

export const uploadNew = async (req, res) => {
    const file = req.body;
    const id = generateUniqueID()
    try {
        if (!file || !file.buffer) {
            throw new Error("Invalid file data");
        }
        // validation
        // const { status, message = "" } = verifyFile(file);
        // if (!status) throw new Error(message);
        const baseDir = process.cwd();
        const tempDir = path.resolve(baseDir, 'temp');
        await fs.ensureDir(tempDir);
        const localPath = path.resolve(tempDir, `${id}.jpg`);
        await fs.writeFile(localPath, Buffer.from(file.buffer));
        const uploadResult = await cloudinary.uploader.upload(localPath, { folder: 'collegeStoreImages' });
        await fs.unlink(localPath);
        res.status(201).json({ data: uploadResult.secure_url || "" });
    } catch (error) {
        console.log('error', error.message);
        res.status(500).json({ message: error.message || 'Something went wrong' });
    }
};

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



