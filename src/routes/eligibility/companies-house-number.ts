import express from 'express';
import companiesHouseNumberController from '../../controllers/eligibility/companies-house-number';

const router = express.Router();

router.get('/', companiesHouseNumberController.getCompaniesHouseNumber);

export default router;
