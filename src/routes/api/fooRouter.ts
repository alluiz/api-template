import express from 'express';

import FooController from '../../controllers/FooController';
const fooController = new FooController();

const router =  express.Router();

router.get('/', fooController.getAll);
router.get('/:id', fooController.get);

export default router;