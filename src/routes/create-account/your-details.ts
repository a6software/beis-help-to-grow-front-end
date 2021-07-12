import express from 'express';
import yourDetailsController from '../../controllers/create-account/your-details';

const router = express.Router();

router.get('/', yourDetailsController.getYourDetails);
router.post('/', yourDetailsController.postYourDetails);

export default router;
