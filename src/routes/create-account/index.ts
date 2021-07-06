import express from 'express';
import emailAddressRouter from './email-address';

const router = express.Router();

router.use('/email-address', emailAddressRouter);

export default router;
