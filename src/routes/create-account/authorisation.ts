import express from 'express';
import authorisationController from '../../controllers/create-account/authorisation';

const router = express.Router();

router.get('/', authorisationController.getAuthorisation);

export default router;
