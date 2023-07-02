import express from 'express';
import { buyNow, getProducts } from "../controllers/student/student.js"
const router = express.Router();

router.get('/products', getProducts);
router.post('/buy-now', buyNow)
export default router;
