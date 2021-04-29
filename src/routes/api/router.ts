import express from 'express';

import MusicRouter from './musicRouter';

const router =  express.Router();

router.use('/music', MusicRouter);

export default router;