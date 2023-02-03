const { Router } = require("express");
const usersControllers = require("../controllers/usersController");

const userRoutes = Router();

const usersController =  new usersControllers();

userRoutes.post("/", usersController.create);

module.exports = userRoutes;