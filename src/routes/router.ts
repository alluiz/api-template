import express from 'express';

import ApiRouter from './api/router';

const router =  express.Router();

router.use('/api', ApiRouter);

// index => lista
// show => unico item
// create => criar
// update => atualizar
// delete or destroy => excluir

export default router;