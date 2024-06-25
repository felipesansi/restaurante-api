const { Router } = require("express");
const routes = new Router();

const pratos = require("../controllers/PratoController");

routes.get("/pratos", pratos.index);

routes.post("/pratos", pratos.create);

routes.put("/pratos/:id", pratos.update);

routes.delete("/pratos/:id", pratos.delete);

module.exports = routes;