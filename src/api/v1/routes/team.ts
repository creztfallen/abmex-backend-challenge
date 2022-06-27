import {Router} from 'express'

const router = Router();

const teamController = require('../../controllers/teamController');

router.post('/', teamController.createTeam);
router.get('/', teamController.getAllTeams);
router.get('/:id', teamController.getOneTeam);
router.patch('/:id', teamController.updateTeam);
router.delete('/:id', teamController.destroyTeam);


export default router;