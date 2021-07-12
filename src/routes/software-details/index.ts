import express from 'express';
import overviewRouter from './overview';

const router = express.Router();

router.use('/overview', overviewRouter);

export default router;
