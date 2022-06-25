import {Request, Response} from 'express';

exports.getSomething = (req:Request, res:Response) => {
    res.json({response: 'Ele faz isso.'})
}