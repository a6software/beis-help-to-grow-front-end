import express from 'express';
import overviewController from '../../controllers/software-details/overview';

const router = express.Router();

router.get('/', overviewController.getOverview);

export default router;
