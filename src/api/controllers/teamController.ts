import {Request, Response} from 'express';
import Teams from '../../models/teamModel';
import getAll from '../../utils/getAll';
import getOne from '../../utils/getOne';
import destroy from '../../utils/destroy';


exports.createTeam = (req:Request, res: Response) => {
    const {name, initials, championship_id} = req.body;

   Teams.create({name, initials, championship_id})
   .then((result) => res.status(201).send(result))
   .catch((error) => res.status(400).send(error.message));
}

exports.getAllTeams = (req:Request, res:Response) => {
    getAll(Teams)
    .then((results) => res.status(200).send(results))
    .catch((error) => res.status(400).send(error.message));
}

exports.getOneTeam = (req:Request, res:Response) => {
    const id = req.params.id;
    getOne(Teams, id)
    .then((results) => res.status(200).send(results))
    .catch((error) => res.status(400).send(error.message));
}

exports.updateTeam = (req:Request, res:Response) => {
    const {name, initials} = req.body;
    Teams.update({name, initials},{where:{id:req.params.id}})
    .then((results) => res.status(200).send(results))
    .catch((error) => res.status(400).send(error.message));
}

exports.destroyTeam = (req:Request, res:Response) => {
    const id = req.params.id;
    destroy(Teams, id)
    .then(() => res.status(200).send("Team destroyed."))
    .catch((error) => res.status(400).send(error.message));
}

