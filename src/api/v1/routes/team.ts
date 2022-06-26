import { Express } from 'express';
import {Router} from 'express'

const router = Router();

const teamController = require('../../controllers/teamController');

router.post('/', teamController.createTeam);
router.get('/', teamController.getAll);
router.get('/:id', teamController.getOne);
router.patch('/:id', teamController.update);
router.delete('/:id', teamController.destroy);


export default router;