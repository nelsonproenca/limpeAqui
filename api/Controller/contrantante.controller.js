let Contrantante = require("../Model/contratante.model");

exports.buscarTodos = (req, res) => {
  Contrantante.get((err, contrantantes) => {
    if (err) {
      res.json({
        status: "erro",
        message: err
      });
    }

    res.json({
      status: "sucesso",
      message: "",
      data: contrantantes
    });
  });
};

exports.buscarUm = (req, res) => {
  Contrantante.findById(req.params.id, (err, contrantante) => {
    if (err) {
      res.json({
        status: "erro",
        message: err
      });
    }

    res.json({
      status: "sucesso",
      message: "",
      data: contrantante
    });
  });
};

exports.novo = (req, res) => {
  var contrantante = new Contrantante();

  mapping(contrantante);

  contrantante.save(err => {
    if (err) {
      res.json({
        status: "erro",
        message: err
      });
    }

    res.json({
      status: "sucesso",
      message: "Contrantante criado com sucesso.",
      data: contrantante
    });
  });
};

exports.alterar = (req, res) => {
  Contrantante.findById(req.params.id, (err, contrantante) => {
    if (err) {
      res.json({
        status: "erro",
        message: err
      });
    }

    mapping(contrantante);

    contrantante.save(err => {
      if (err) {
        res.json({
          status: "erro",
          message: err
        });
      }

      res.json({
        status: "sucesso",
        message: "Contrantante alterado com sucesso.",
        data: contrantante
      });
    });
  });
};

exports.excluir = (req, res) => {
  Contrantante.remove({ _id: req.params.id }, err => {
    if (err) {
      res.json({
        status: "erro",
        message: err
      });
    }

    res.json({
      status: "sucesso",
      message: "Contrantante removido com sucesso."
    });
  });
};

mapping = contrantante => {
  let novoContrantante = contrantante;

  novoContrantante.id = req.body.id;
  novoContrantante.nome = req.body.nome;
  novoContrantante.endereco = req.body.endereco;
  novoContrantante.cep = req.body.cep;
  novoContrantante.numero = req.body.numero;
  novoContrantante.cidade = req.body.cidade;
  novoContrantante.estado = req.body.estado;
  novoContrantante.foto = req.body.foto;
  novoContrantante.rg = req.body.rg;
  novoContrantante.cpf = req.body.cpf;
  novoContrantante.celular = req.body.celular;

  return novoContrantante;
};
