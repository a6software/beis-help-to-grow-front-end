import express from 'express';
import passwordController from '../../controllers/create-account/set-password';

const router = express.Router();

router.get('/', passwordController.getPassword);

export default router;
