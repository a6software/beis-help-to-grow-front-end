import express from 'express';
import physicalMediaController from '../../controllers/eligibility/physical-media';

const router = express.Router();

router.get('/', physicalMediaController.getPhysicalMedia);

export default router;
