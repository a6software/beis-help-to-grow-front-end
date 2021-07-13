import express from 'express';
import dropOutController from '../../controllers/eligibility/drop-out';

const router = express.Router();

router.get('/', dropOutController.getDropOut);

export default router;
