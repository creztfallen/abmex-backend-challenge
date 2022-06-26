import {Router} from 'express'

const router = Router();

const championshipController = require('../../controllers/championshipController');

router.get('/', championshipController.getAll);
router.get('/:id', championshipController.getOne);
router.post('/', championshipController.createChampionship);
router.patch('/:id', championshipController.update);

export default router;