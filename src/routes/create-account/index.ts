import express from 'express';
import emailAddressRouter from './email-address';
import passwordRouter from './set-password';
import verificationRouter from './verification';
import termsAndConditionsRouter from './terms-conditions';
import accountCreatedRouter from './account-created';
import authorisationRouter from './authorisation';
const router = express.Router();

router.use('/email-address', emailAddressRouter);
router.use('/set-password', passwordRouter);
router.use('/verification', verificationRouter);
router.use('/terms-conditions', termsAndConditionsRouter);
router.use('/account-created', accountCreatedRouter);
router.use('/authorisation', authorisationRouter);
export default router;
