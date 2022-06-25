import {Request, Response} from 'express';
import { QueryArrayResult } from 'node-postgres';
import { QueryError, QueryInterface, QueryOptions } from 'sequelize/types';
import { QueryTypes} from 'sequelize';
import connection from '../../database/connection';
import Championship from '../../models/championshipModel';


exports.createChampionship = (req:Request, res: Response) => {
    // const {name, description, prize} = req.body;
    const name = req.body.name;
    const description = req.body.description;
    const prize = req.body.prize;

    Championship.create({name, description, prize})
    .then((result) => res.status(201).send(result))
    .catch((error) => res.status(400).send(error.message));
}

exports.getAll = (req:Request, res:Response) => {
    Championship.findAll()
    .then((results) => res.status(200).send(results))
    .catch((error) => res.status(400).send(error.message));
}