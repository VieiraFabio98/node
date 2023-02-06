const { Router } = require("express");
const usersControllers = require("../controllers/usersController");

const userRoutes = Router();

function myMiddleware(request, response, next){
  console.log("voce passou pelo middleware");
  if(!request.body.isAdmin){
    return response.json({message: "não autorizado"});
  }
  next();
}

const usersController =  new usersControllers();

userRoutes.post("/", myMiddleware, usersController.create);

module.exports = userRoutes;