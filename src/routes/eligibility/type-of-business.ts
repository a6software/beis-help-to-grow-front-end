import express from 'express';
import typeOfBusinessController from '../../controllers/eligibility/type-of-business';

const router = express.Router();

router.get('/type-of-business', typeOfBusinessController.getTypeOfBusiness);

export default router;
