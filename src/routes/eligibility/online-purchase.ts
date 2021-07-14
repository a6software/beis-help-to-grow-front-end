import express from 'express';
import onlinePurchaseController from '../../controllers/eligibility/online-purchase';

const router = express.Router();

router.get('/', onlinePurchaseController.getOnlinePurchase);

export default router;
