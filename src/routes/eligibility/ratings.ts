import express from 'express';
import ratingsController from '../../controllers/eligibility/ratings';

const router = express.Router();

router.get('/', ratingsController.getRatings);

export default router;
