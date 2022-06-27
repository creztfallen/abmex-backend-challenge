export default async function destroy(model:any, id:any) {
    return model.destroy({where: {id: id}})
 }