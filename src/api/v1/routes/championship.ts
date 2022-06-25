import { Express } from 'express';
import {Router} from 'express'

const router = Router();

const championshipController = require('../../controllers/championshipController');

router.get('/', championshipController.getAll);
router.post('/', championshipController.createChampionship);

export default router;