import express from 'express';
import accountCreatedRouter from './account-created';
import directorOrAuthorisedRouter from './director-or-authorised';
import passwordRouter from './set-password';
import termsAndConditionsRouter from './terms-and-conditions';
import emailVerificationRouter from './email-verification';
import yourDetailsRouter from './your-details';

const router = express.Router();

router.use('/account-created', accountCreatedRouter);
router.use('/director-or-authorised', directorOrAuthorisedRouter);
router.use('/set-password', passwordRouter);
router.use('/terms-and-conditions', termsAndConditionsRouter);
router.use('/email-verification', emailVerificationRouter);
router.use('/your-details', yourDetailsRouter);

export default router;
