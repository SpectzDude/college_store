import express from 'express';
import { buyNow, getOrdersByUserId, getProducts } from "../controllers/student/student.js"
const router = express.Router();

router.get('/products', getProducts);
router.post('/buy-now', buyNow);
router.get('/orders', getOrdersByUserId);

export default router;
