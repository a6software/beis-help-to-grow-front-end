import express from 'express';
import categoryController from '../../controllers/eligibility/category';

const router = express.Router();

router.get('/', categoryController.getCategory);
router.post('/', categoryController.postCategory);

export default router;