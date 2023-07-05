import express from 'express';
import { addDummyProducts, addProducts, getProductById, updateProductById, deleteProductById } from '../controllers/admin/admin.js';
import { getProducts } from '../controllers/student/student.js';
const router = express.Router();

router.post('/add-product', addProducts);
router.get('/create-dummy', addDummyProducts);
router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.patch('/products/:id', updateProductById);
router.delete('/products/:id', deleteProductById);

export default router;
