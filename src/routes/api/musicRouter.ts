import express from 'express';

import MusicController from '../../controllers/MusicController';
const musicController = new MusicController();

const router =  express.Router();

router.get('/', musicController.getAll);
router.get('/:id', musicController.get);

export default router;