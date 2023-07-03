import * as Yup from "yup";

export const productDetailsSchema = Yup.object().shape({
    brand: Yup.string().required("Brand is required"),
    description: Yup.string().required("Description is required"),
    discountPercentage: Yup.number().typeError("Discount percentage must be a number").required("Discount percentage is required"),
    preBookedCount: Yup.number().typeError("Pre-booked count must be a number").required("Pre-booked count is required"),
    price: Yup.number().typeError("Price must be a number").required("Price is required"),
    stock: Yup.number().typeError("Stock must be a number").required("Stock is required"),
    thumbnail: Yup.string().required("Thumbnail is required"),
    title: Yup.string().required("Title is required"),
    category: Yup.string().required("Category is required")
});


