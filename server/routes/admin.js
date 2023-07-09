import express from 'express';
import { addDummyProducts, addProducts, getProductById, updateProductById, deleteProductById, updateProductImageById } from '../controllers/admin/admin.js';
import { getProducts } from '../controllers/student/student.js';
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage });
const router = express.Router();

router.post('/add-product', addProducts);
router.get('/create-dummy', addDummyProducts);
router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.patch('/products/:id', updateProductById);
router.delete('/products/:id', deleteProductById);
router.post('/product-image/:id', updateProductImageById);
export default router;
