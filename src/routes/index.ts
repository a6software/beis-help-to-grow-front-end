import express from 'express';
import eligibilityRouter from './eligibility';
import startPageRouter from './start-page';

const router = express.Router();

router.use('/', startPageRouter);
router.use('/eligibility', eligibilityRouter);

export default router;
