let Pedido = require("../Model/Pedido.model");

exports.buscarTodos = (req, res) => {
  Pedido.get((err, pedidos) => {
    if (err) {
      res.json({
        status: "erro",
        message: err
      });
    }

    res.json({
      status: "sucesso",
      message: "",
      data: pedidos
    });
  });
};

exports.buscarUm = (req, res) => {
  Pedido.findById(req.params.id, (err, pedido) => {
    if (err) {
      res.json({
        status: "erro",
        message: err
      });
    }

    res.json({
      status: "sucesso",
      message: "",
      data: pedido
    });
  });
};

exports.novo = (req, res) => {
  var pedido = new pedido();

  mapping(pedido);

  pedido.save(err => {
    if (err) {
      res.json({
        status: "erro",
        message: err
      });
    }

    res.json({
      status: "sucesso",
      message: "Pedido criado com sucesso.",
      data: pedido
    });
  });
};

exports.alterar = (req, res) => {
  Pedido.findById(req.params.id, (err, pedido) => {
    if (err) {
      res.json({
        status: "erro",
        message: err
      });
    }

    mapping(pedido);

    pedido.save(err => {
      if (err) {
        res.json({
          status: "erro",
          message: err
        });
      }

      res.json({
        status: "sucesso",
        message: "Pedido alterado com sucesso.",
        data: pedido
      });
    });
  });
};

exports.excluir = (req, res) => {
  Pedido.remove({ _id: req.params.id }, err => {
    if (err) {
      res.json({
        status: "erro",
        message: err
      });
    }

    res.json({
      status: "sucesso",
      message: "Pedido removido com sucesso."
    });
  });
};

mapping = pedido => {
  pedido.contratanteId = req.body.contratanteId;
  pedido.localServico = req.body.localServico;
  pedido.dataServico = req.body.dataServico;
  pedido.tipoServico = req.body.tipoServico;
  pedido.tarefasServico = req.body.tarefasServico;
  pedido.observacao = req.body.observacao;
  pedido.quantidadeHorasServico = req.body.quantidadeHorasServico;
  pedido.chavesLocalServico = req.body.chavesLocalServico;
  pedido.existePetServico = req.body.existePetServico;
  pedido.diaristaId = req.body.diaristaId;
};
