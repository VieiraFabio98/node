const { Router } = require("express");
const notesControllers = require("../controllers/notesController");

const notesRoutes = Router();

const notesController =  new notesControllers();

notesRoutes.post("/:user_id", notesController.create);

module.exports = notesRoutes;