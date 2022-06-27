export default async function getOne(model:any, id:any) {
    return model.findOne({where: {id: id}})
 }
