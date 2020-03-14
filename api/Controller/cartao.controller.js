let Cartao = require("../Model/Cartao.model");

exports.buscarTodos = (req, res) => {
  Cartao.get((err, cartaos) => {
    if (err) {
      res.json({
        status: "erro",
        message: err
      });
    }

    res.json({
      status: "sucesso",
      message: "",
      data: cartaos
    });
  });
};

exports.buscarUm = (req, res) => {
  Cartao.findById(req.params.id, (err, cartao) => {
    if (err) {
      res.json({
        status: "erro",
        message: err
      });
    }

    res.json({
      status: "sucesso",
      message: "",
      data: cartao
    });
  });
};

exports.novo = (req, res) => {
  var cartao = new Cartao();

  mapping(cartao);

  cartao.save(err => {
    if (err) {
      res.json({
        status: "erro",
        message: err
      });
    }

    res.json({
      status: "sucesso",
      message: "Cartão criado com sucesso.",
      data: cartao
    });
  });
};

exports.alterar = (req, res) => {
  Cartao.findById(req.params.id, (err, cartao) => {
    if (err) {
      res.json({
        status: "erro",
        message: err
      });
    }

    mapping(cartao);

    cartao.save(err => {
      if (err) {
        res.json({
          status: "erro",
          message: err
        });
      }

      res.json({
        status: "sucesso",
        message: "Cartão alterado com sucesso.",
        data: cartao
      });
    });
  });
};

exports.excluir = (req, res) => {
  Cartao.remove({ _id: req.params.id }, err => {
    if (err) {
      res.json({
        status: "erro",
        message: err
      });
    }

    res.json({
      status: "sucesso",
      message: "Cartão removido com sucesso."
    });
  });
};

mapping = cartao => {
  cartao.numeroCartao = req.body.numeroCartao;
  cartao.nomeTitular = req.body.nomeTitular;
  cartao.validade = req.body.validade;
  cartao.codigoVerificador = req.body.codigoVerificador;
  cartao.id = req.body.id;
};
