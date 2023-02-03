const { Router } = require("express");

const userRoutes = Router();

userRoutes.post("/", (request, respond) => {
  const {name, senha, email} = request.body;

  respond.json({name, senha, email});
})

module.exports = userRoutes;