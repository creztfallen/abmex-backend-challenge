import {Request, Response} from 'express';
import Championship from '../../models/championshipModel';


exports.createChampionship = (req:Request, res: Response) => {
     const {name, description, prize} = req.body;

    Championship.create({name, description, prize})
    .then((result) => res.status(201).send(result))
    .catch((error) => res.status(400).send(error.message));
}

exports.getAll = (req:Request, res:Response) => {
    Championship.findAll()
    .then((results) => res.status(200).send(results))
    .catch((error) => res.status(400).send(error.message));
}

exports.getOne = (req:Request, res:Response) => {
    Championship.findOne({where: {id: req.params.id}})
    .then((results) => res.status(200).send(results))
    .catch((error) => res.status(400).send(error.message));
}

exports.update = (req:Request, res:Response) => {
    const {name, description, prize} = req.body;
    Championship.update({name, description, prize},{where:{id:req.params.id}})
    .then((results) => res.status(200).send(results))
    .catch((error) => res.status(400).send(error.message));
}