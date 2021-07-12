import express from 'express';
import accountCreatedRouter from './account-created';
import directorOrAuthorisedRouter from './director-or-authorised';
import emailAddressRouter from './email-address';
import passwordRouter from './set-password';
import termsAndConditionsRouter from './terms-and-conditions';
import verificationRouter from './verification';

const router = express.Router();

router.use('/account-created', accountCreatedRouter);
router.use('/director-or-authorised', directorOrAuthorisedRouter);
router.use('/email-address', emailAddressRouter);
router.use('/set-password', passwordRouter);
router.use('/terms-and-conditions', termsAndConditionsRouter);
router.use('/verification', verificationRouter);

export default router;
