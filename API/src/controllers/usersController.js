class usersControllers {
  /*
    o controller pode ter no máximo 5 métodos
    index - GET para listar vários registros
    show - GET para exibir um registro específico
    create - POST para criar um registro
    update - PUT para atualizar um registro
    delete - DELETE para remover um registro
  */ 
  create(request, response){
    const {name, senha, email} = request.body;

    response.status(201).json({name, senha, email});
  }
}

module.exports = usersControllers;