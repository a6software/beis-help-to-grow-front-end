import express from 'express';
import companiesHouseDetailsController from '../../controllers/eligibility/companies-house-details';

const router = express.Router();

router.get('/', companiesHouseDetailsController.getCompaniesHouseDetails);

export default router;
