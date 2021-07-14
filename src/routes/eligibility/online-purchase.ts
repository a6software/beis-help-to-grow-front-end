import express from 'express';
import onlinePurchaseController from '../../controllers/eligibility/online-purchase';

const router = express.Router();

router.get('/', onlinePurchaseController.getOnlinePurchase);
router.post('/', onlinePurchaseController.postOnlinePurchase);

export default router;