import express from 'express';
import createAccountRouter from './create-account';
import eligibilityRouter from './eligibility';
import startPageRouter from './start-page';

const router = express.Router();

router.use('/', startPageRouter);
router.use('/create-account', createAccountRouter);
router.use('/eligibility', eligibilityRouter);

export default router;
