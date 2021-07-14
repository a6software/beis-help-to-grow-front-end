import express from 'express';

import codeNotRecognisedController from '../../../controllers/create-account/email-verification/code-not-recognised';
import invalidSessionController from '../../../controllers/create-account/email-verification/invalid-session';
import pendingController from '../../../controllers/create-account/email-verification/pending';
import validationController from '../../../controllers/create-account/email-verification/validate';
import { requestEmailVerificationCodeMiddleware } from '../../../middleware/request-email-verification-code';

const router = express.Router();

router.get('/validate/:emailVerificationCode', validationController.validate);
router.get('/code-not-recognised', codeNotRecognisedController.getCodeNotRecognised);
router.get('/invalid-session', invalidSessionController.getInvalidSessionError);
router.get('/', requestEmailVerificationCodeMiddleware, pendingController.getVerificationPending);

export default router;
