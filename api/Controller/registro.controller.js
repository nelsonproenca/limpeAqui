let RegistroUsuario = require("../Model/Registro.model");

exports.buscarTodos = (req, res) => {
  RegistroUsuario.get((err, registros) => {
    if (err) {
      res.json({
        status: "erro",
        message: err
      });
    }

    res.json({
      status: "sucesso",
      message: "",
      data: registros
    });
  });
};

exports.buscarUm = (req, res) => {
  RegistroUsuario.findById(req.params.id, (err, registro) => {
    if (err) {
      res.json({
        status: "erro",
        message: err
      });
    }

    res.json({
      status: "sucesso",
      message: "",
      data: registro
    });
  });
};

exports.novo = (req, res) => {
  var registro = new RegistroUsuario();

  mapping(registro);

  registro.save(err => {
    if (err) {
      res.json({
        status: "erro",
        message: err
      });
    }

    res.json({
      status: "sucesso",
      message: "Registro criado com sucesso.",
      data: registro
    });
  });
};

exports.alterar = (req, res) => {
  RegistroUsuario.findById(req.params.id, (err, registro) => {
    if (err) {
      res.json({
        status: "erro",
        message: err
      });
    }

    mapping(registro);

    registro.save(err => {
      if (err) {
        res.json({
          status: "erro",
          message: err
        });
      }

      res.json({
        status: "sucesso",
        message: "Registro alterado com sucesso.",
        data: registro
      });
    });
  });
};

exports.excluir = (req, res) => {
  RegistroUsuario.remove({ _id: req.params.id }, err => {
    if (err) {
      res.json({
        status: "erro",
        message: err
      });
    }

    res.json({
      status: "sucesso",
      message: "Registro removido com sucesso."
    });
  });
};

mapping = registro => {
  registro.usuario = req.body.usuario;
  registro.senha = req.body.senha;
  registro.nome = req.body.nome;
  registro.tipo = req.body.tipo;
  registro.email = req.body.email;
  registro.celular = req.body.celular;
  registro.id = req.body.id;
};
