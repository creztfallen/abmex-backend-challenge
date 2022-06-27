import {Request, Response} from 'express';
import Championship from '../../models/championshipModel';
import getAll from '../../utils/getAll';
import getOne from '../../utils/getOne';


exports.createChampionship = (req:Request, res: Response) => {
     const {name, description, prize} = req.body;

    Championship.create({name, description, prize})
    .then((result) => res.status(201).send(result))
    .catch((error) => res.status(400).send(error.message));
}

exports.getAllChampionships = (req:Request, res:Response) => {
    getAll(Championship)
    .then((results) => res.status(200).send(results))
    .catch((error) => res.status(400).send(error.message));
}

exports.getOneChampionsip = (req:Request, res:Response) => {
    const id = req.params.id;
    getOne(Championship, id)
    .then((results) => res.status(200).send(results))
    .catch((error) => res.status(400).send(error.message));
}

exports.updateChampionship = (req:Request, res:Response) => {
    const {name, description, prize} = req.body;
    Championship.update({name, description, prize},{where:{id:req.params.id}})
    .then((results) => res.status(200).send(results))
    .catch((error) => res.status(400).send(error.message));
}