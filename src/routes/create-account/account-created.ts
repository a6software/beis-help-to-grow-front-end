import express from 'express';
import accountCreatedController from '../../controllers/create-account/account-created';

const router = express.Router();

router.get('/', accountCreatedController.getAccountCreated);

export default router;
