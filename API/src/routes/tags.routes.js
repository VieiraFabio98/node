const { Router } = require("express");
const tagsControllers = require("../controllers/tagsController");

const tagsRoutes = Router();

const tagsController =  new tagsControllers();

tagsRoutes.get("/:user_id", tagsController.index);

module.exports = tagsRoutes;