import {Request, Response} from 'express';
import Teams from '../../models/teamModel';

exports.createTeam = (req:Request, res: Response) => {
    const {name, initials, championship_id} = req.body;

   Teams.create({name, initials, championship_id})
   .then((result) => res.status(201).send(result))
   .catch((error) => res.status(400).send(error.message));
}

exports.getAll = (req:Request, res:Response) => {
    Teams.findAll()
    .then((results) => res.status(200).send(results))
    .catch((error) => res.status(400).send(error.message));
}

exports.getOne = (req:Request, res:Response) => {
    Teams.findOne({where: {id: req.params.id}})
    .then((results) => res.status(200).send(results))
    .catch((error) => res.status(400).send(error.message));
}

exports.update = (req:Request, res:Response) => {
    const {name, initials} = req.body;
    Teams.update({name, initials},{where:{id:req.params.id}})
    .then((results) => res.status(200).send(results))
    .catch((error) => res.status(400).send(error.message));
}

exports.destroy = (req:Request, res:Response) => {
    Teams.destroy({where:{id:req.params.id}})
    .then(() => res.status(200).send("Team destroyed."))
    .catch((error) => res.status(400).send(error.message));
}

