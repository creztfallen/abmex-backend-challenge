import {Router} from 'express'

const router = Router();

const matchController = require('../../controllers/matchController');

router.get('/:id', matchController.match);

export default router;