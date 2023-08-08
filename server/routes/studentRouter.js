import express from 'express';
import { buyNow, getOrdersByUserId, getProducts, getStudentProfile } from "../controllers/student/student.js"
const router = express.Router();

router.get('/products', getProducts);
router.post('/buy-now', buyNow);
router.get('/orders', getOrdersByUserId);
router.get("/profile", getStudentProfile)
export default router;