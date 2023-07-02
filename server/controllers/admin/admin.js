import Products from "../../models/Products.js";

import casual from 'casual';

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
    if (!title || !description) return res.status(404).json({ message: "No details entered for the product, enter title and description of the products" })
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
