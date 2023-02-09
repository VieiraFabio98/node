const { hash, compare } = require("bcryptjs");
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
    const {name, password, email} = request.body;
    const dataBase = await sqliteConnection();
    const checkUserExist = await dataBase.get("SELECT * FROM users WHERE email = (?)", [email]);

    if(checkUserExist){
      throw new appError("Este email ja está em uso");
    }
    console.log(password)
    const hashedPassword = await(hash(password, 8));

    await dataBase.run("INSERT INTO users (name, password, email) VALUES (?, ?, ?)", [name, hashedPassword, email]);

    return response.status(201).json();
  }

  async update(request, response){
    const { name, email, password, old_password } = request.body;
    const { id } = request.params;

    const dataBase = await sqliteConnection();
    const user = await dataBase.get("SELECT * FROM users WHERE id = (?)", [id]);

    if(!user){
      throw new appError("Usuário não encontrado");
    };

    const userWithUpdatedEmail = await dataBase.get("SELECT * FROM users WHERE email = (?)", [email]);

    if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id){
      throw new appError("Este email já está em uso");
    };

    user.name = name ?? user.name;
    user.email = email ?? user.email;

    if(password && !old_password){
      throw new appError("Informe a senha antiga para definar a nova");
    }

    if(password && old_password){
    
      const checkOldPassword = await compare(old_password, user.password);

      if(!checkOldPassword){
        throw new appError("Senha antiga nao confere.");
      }

      user.password = await hash(password, 8);
    }

    await dataBase.run(`
    UPDATE users SET
    name = ?,
    email = ?,
    password = ?,
    updated_at = DATETIME('now')
    WHERE id = ?`,
    [user.name, user.email, user.password, id]);

    return response.json();
  }
}

module.exports = usersControllers;