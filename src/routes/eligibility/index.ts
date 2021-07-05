import express from 'express';
import typeOfBusinessRouter from './type-of-business';

const router = express.Router();

router.get('/type-of-business', typeOfBusinessRouter);

export default router;
