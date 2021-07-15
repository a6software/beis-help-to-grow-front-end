import express from 'express';
import gdprController from '../../controllers/eligibility/gdpr';

const router = express.Router();

router.get('/', gdprController.getGdpr);
router.post('/', gdprController.postGdpr);

export default router;
