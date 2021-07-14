import express from 'express';
import accessibilityController from '../../controllers/eligibility/accessibility';

const router = express.Router();

router.get('/', accessibilityController.getAccessibility);
router.post('/', accessibilityController.postAccessibility);

export default router;
