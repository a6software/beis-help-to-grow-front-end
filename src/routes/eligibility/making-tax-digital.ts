import express from 'express';
import makingTaxDigitalController from '../../controllers/eligibility/making-tax-digital';

const router = express.Router();

router.get('/', makingTaxDigitalController.getMakingTaxDigital);

export default router;
