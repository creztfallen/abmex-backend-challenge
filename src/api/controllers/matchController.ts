import {Request, Response} from 'express';
import Teams from '../../models/teamModel';

exports.match = (req: Request, res: Response) => {
    const csp:any = Teams.findAll({where:{championship_id:req.params.id}})
    .then((results)=> console.log(results))
}
// Esse foi o ponto em que parei. Não consegui mais continuar por ter esgotado minha carga cognitiva.