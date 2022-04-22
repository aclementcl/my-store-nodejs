const boom = require('@hapi/boom');

//Middeware dinámico -> el closure (se acceden a valores fuera de su contexto)
//se utiliza para pasar el dto y obtener el request a partir de él
function validatorHandler(dto, property) {
  //Se retorna una función en formato de middeware (lo crea)
  return (req, res, next) => {
    //Este request es dinámico (sirve para params, body y query)
    const data = req[property];
    const { error } = dto.validate(data, { abortEarly: false });
    if(error){
      next(boom.badRequest(error));
    }
    next();
  };
}

module.exports = validatorHandler;
