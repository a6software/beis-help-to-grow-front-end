import express from 'express';
import verificationController from '../../controllers/create-account/verification';

const router = express.Router();

router.get('/', verificationController.getVerification);

export default router;
