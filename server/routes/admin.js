import express from 'express';
import { addDummyProducts, addProducts, getProductById, updateProductById, deleteProductById, getPendingOrders, getDashboardStats, getUsersAll, approveUser, restrictUser, unBlockUser, blockUser, deleteUser } from '../controllers/admin/admin.js';
import { getProducts } from '../controllers/student/student.js';
import imageROuter from "./image.js"
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage });
const router = express.Router();

router.post('/add-product', addProducts);
router.get('/create-dummy', addDummyProducts);
router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.put('/products/:id', updateProductById);
router.delete('/products/:id', deleteProductById);
router.get("/orders/:key", getPendingOrders);
router.get("/dashboard", getDashboardStats);
router.get("/user", getUsersAll);
router.get("/user/approve/:id", approveUser);
router.get("/user/reject/:id", restrictUser);
router.get("/user/block/:id", blockUser);
router.get("/user/un-block/:id", unBlockUser);
router.delete("/user/delete/:id", deleteUser);

// Image
router.use("/image", imageROuter);

export default router;
