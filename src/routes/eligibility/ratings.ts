import express from 'express';
import ratingsController from '../../controllers/eligibility/ratings';

const router = express.Router();

router.get('/', ratingsController.getRatings);
router.post('/', ratingsController.postRatings);

export default router;
