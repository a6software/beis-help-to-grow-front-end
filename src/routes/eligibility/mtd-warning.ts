import express from 'express';
import mtdWarningController from '../../controllers/eligibility/mtd-warning';

const router = express.Router();

router.get('/', mtdWarningController.getMtdWarning);
router.post('/', mtdWarningController.postMtdWarning);

export default router;
