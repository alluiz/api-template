import express from 'express';

import FooRouter from './fooRouter';

const router =  express.Router();

router.use('/foo', FooRouter);

// index => lista
// show => unico item
// create => criar
// update => atualizar
// delete or destroy => excluir

export default router;