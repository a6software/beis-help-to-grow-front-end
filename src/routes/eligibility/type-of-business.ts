import express from 'express';
import typeOfBusinessController from '../../controllers/eligibility/type-of-business';

const router = express.Router();

router.get('/', typeOfBusinessController.getTypeOfBusiness);

export default router;
