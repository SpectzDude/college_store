import express from 'express';
import { addDummyProducts, addProducts } from '../controllers/admin/admin.js';
const router = express.Router();

router.post('/add-product', addProducts);
router.post('/add-dummy', addDummyProducts);

export default router;
