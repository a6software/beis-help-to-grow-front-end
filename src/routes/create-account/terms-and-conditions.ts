import express from 'express';
import termsAndConditionsController from '../../controllers/create-account/terms-and-conditions';

const router = express.Router();

router.get('/', termsAndConditionsController.getTermsAndConditions);

export default router;
