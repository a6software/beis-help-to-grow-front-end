import express from 'express';
import createAccountRouter from './create-account';
import eligibilityRouter from './eligibility';
import signInRouter from './sign-in';
import startPageRouter from './start-page';
import softwareDetailsRouter from './software-details';
import { authentication } from '../middleware/authentication-middleware';

const router = express.Router();

router.use('/', startPageRouter);
router.use('/create-account', createAccountRouter);
router.use('/eligibility', eligibilityRouter);
router.use('/sign-in', signInRouter);
router.use('/software-details', authentication, softwareDetailsRouter);

export default router;
