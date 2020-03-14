// Initialize express router
let router = require("express").Router();

// Set default API response
router.get("/", function(req, res) {
  res.json({
    status: "API Its Working",
    message: "Welcome to LimpeAquiAPI."
  });
});

let agendaController = require("./Controller/agenda.controller");
let cartaoController = require("./Controller/cartao.controller");
let contrantanteController = require("./Controller/contrantante.controller");
let pedidoController = require("./Controller/pedido.controller");
let registroController = require("./Controller/registro.controller");

router
  .route("/agenda")
  .get(agendaController.buscarTodos)
  .post(agendaController.novo);

router
  .route("/agenda/:id")
  .get(agendaController.buscarUm)
  .put(agendaController.alterar)
  .delete(agendaController.excluir);

router
  .route("/cartao")
  .get(cartaoController.buscarTodos)
  .post(cartaoController.novo);

router
  .route("/cartao/:id")
  .get(cartaoController.buscarUm)
  .put(cartaoController.alterar)
  .delete(cartaoController.excluir);

router
  .route("/contrantante")
  .get(contrantanteController.buscarTodos)
  .post(contrantanteController.novo);

router
  .route("/contrantante/:id")
  .get(contrantanteController.buscarUm)
  .put(contrantanteController.alterar)
  .delete(contrantanteController.excluir);

router
  .route("/pedido")
  .get(pedidoController.buscarTodos)
  .post(pedidoController.novo);

router
  .route("/pedido/:id")
  .get(pedidoController.buscarUm)
  .put(pedidoController.alterar)
  .delete(pedidoController.excluir);

router
  .route("/registro")
  .get(registroController.buscarTodos)
  .post(registroController.novo);

router
  .route("/registro/:id")
  .get(registroController.buscarUm)
  .put(registroController.alterar)
  .delete(registroController.excluir);

// Export API routes
module.exports = router;
