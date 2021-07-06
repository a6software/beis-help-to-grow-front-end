import express from 'express';
import emailAddressController from '../../controllers/create-account/email-address';

const router = express.Router();

router.get('/', emailAddressController.getEmailAddress);

export default router;
