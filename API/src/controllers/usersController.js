const appError = require("../utils/appError");
const sqliteConnection = require("../dataBase/sqlite")

class usersControllers {
  /*
    o controller pode ter no máximo 5 métodos
    index - GET para listar vários registros
    show - GET para exibir um registro específico
    create - POST para criar um registro
    update - PUT para atualizar um registro
    delete - DELETE para remover um registro
  */ 
  async create(request, response){
    const {name, senha, email} = request.body;
    const dataBase = await sqliteConnection();
    const checkUserExist = await dataBase.get("SELECT * FROM users WHERE email = (?)", [email]);

    if(checkUserExist){
      throw new appError("Este email ja está em uso");
    }

    return response.status(201).json();

  }
}

module.exports = usersControllers;