import express from 'express';
import startPageController from '../controllers/start-page';

const router = express.Router();

router.get('/', startPageController.getStartPage);

export default router;
