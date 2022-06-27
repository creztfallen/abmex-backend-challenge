import {Router} from 'express'

const router = Router();

const championshipController = require('../../controllers/championshipController');


router.get('/', championshipController.getAllChampionships);
router.get('/:id', championshipController.getOneChampionsip);
router.post('/', championshipController.createChampionship);
router.patch('/:id', championshipController.updateChampionship);

export default router;