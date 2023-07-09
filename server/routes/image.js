import express from 'express';
import { updateProductImageById, uploadNew } from '../controllers/admin/image.js';


const router = express.Router();

router.post('/product-image/new', uploadNew);
router.post('/product-image/:id', updateProductImageById);
export default router;