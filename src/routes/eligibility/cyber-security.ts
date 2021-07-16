import express from 'express';
import cyberSecurityController from '../../controllers/eligibility/cyber-security';

const router = express.Router();

router.get('/', cyberSecurityController.getCyberSecurity);
router.post('/', cyberSecurityController.postCyberSecurity);

export default router;
