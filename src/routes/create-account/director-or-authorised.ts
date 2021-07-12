import express from 'express';
import directorOrAuthorisedController from '../../controllers/create-account/director-or-authorised';

const router = express.Router();

router.get('/', directorOrAuthorisedController.getDirectorOrAuthorised);
router.post('/', directorOrAuthorisedController.postDirectorOrAuthorised);

export default router;
