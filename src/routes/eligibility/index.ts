import express from 'express';
import companiesHouseDetailsRouter from './companies-house-details';
import companiesHouseNumberRouter from './companies-house-number';
import cyberSecurityRouter from './cyber-security';
import typeOfBusinessRouter from './type-of-business';
import accessibilityRouter from './accessibility';
const router = express.Router();

router.use('/companies-house-details', companiesHouseDetailsRouter);
router.use('/companies-house-number', companiesHouseNumberRouter);
router.use('/cyber-security', cyberSecurityRouter);
router.use('/type-of-business', typeOfBusinessRouter);
router.use('/accessibility', accessibilityRouter);
export default router;
