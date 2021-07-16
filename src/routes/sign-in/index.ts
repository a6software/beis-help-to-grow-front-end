import express from 'express';
import signInController from '../../controllers/sign-in';

const router = express.Router();

router.get('/', signInController.getSignInPage);
router.post('/', signInController.postSignInCredentials);

export default router;
