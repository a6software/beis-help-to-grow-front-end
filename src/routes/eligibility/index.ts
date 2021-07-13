import express from 'express';
import companiesHouseDetailsRouter from './companies-house-details';
import companiesHouseNumberRouter from './companies-house-number';
import cyberSecurityRouter from './cyber-security';
import typeOfBusinessRouter from './type-of-business';
import accessibilityRouter from './accessibility';
import categoryRouter from './category';
import eligibilityCompleteRouter from './eligibility-complete';
import gdprRouter from './gdpr';
import makingTaxDigitalRouter from './making-tax-digital';
import mtdWarningRouter from './mtd-warning';
import onlinePurchaseRouter from './online-purchase';
import physicalMediaRouter from './physical-media';
import ratingsRouter from './ratings';

const router = express.Router();

router.use('/companies-house-details', companiesHouseDetailsRouter);
router.use('/companies-house-number', companiesHouseNumberRouter);
router.use('/cyber-security', cyberSecurityRouter);
router.use('/type-of-business', typeOfBusinessRouter);
router.use('/accessibility', accessibilityRouter);
router.use('/category', categoryRouter);
router.use('/eligibility-complete', eligibilityCompleteRouter);
router.use('/gdpr', gdprRouter);
router.use('/making-tax-digital', makingTaxDigitalRouter);
router.use('/mtd-warning', mtdWarningRouter);
router.use('/online-purchase', onlinePurchaseRouter);
router.use('/physical-media', physicalMediaRouter);
router.use('/ratings', ratingsRouter);


export default router;
