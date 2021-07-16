import express from 'express';
import eligibilityCompelteController from '../../controllers/eligibility/eligibility-complete';

const router = express.Router();

router.get('/', eligibilityCompelteController.getEligibilityComplete);
router.post('/', eligibilityCompelteController.postEligibilityComplete);

export default router;
