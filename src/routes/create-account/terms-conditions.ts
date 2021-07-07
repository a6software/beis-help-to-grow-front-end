import express from 'express';
import termsAndConditionsController from '../../controllers/create-account/terms-conditions';

const router = express.Router();

router.get('/', termsAndConditionsController.getTermsAndConditions);

export default router;
