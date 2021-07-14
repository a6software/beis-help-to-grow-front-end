import express from 'express';
import accessibilityController from '../../controllers/eligibility/accessibility';

const router = express.Router();

router.get('/', accessibilityController.getAccessibility);

export default router;
