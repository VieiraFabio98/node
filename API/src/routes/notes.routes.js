const { Router } = require("express");
const notesControllers = require("../controllers/notesController");

const notesRoutes = Router();

const notesController =  new notesControllers();

notesRoutes.get("/", notesController.index);
notesRoutes.post("/:user_id", notesController.create);
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id", notesController.delete);

module.exports = notesRoutes;