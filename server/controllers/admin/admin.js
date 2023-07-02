import Products from "../../models/Products.js";

export const addProducts = async (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) return res.status(404).json({ message: "No details entered for the product, enter title and description of the products" })
    try {
        const prod = await Products.exists({ title })
        if (!prod) return res.status(404).json({ message: "Product Already exists" })
        await Products.create(req.body);
        res.status(200).json({ data: "Success" })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}