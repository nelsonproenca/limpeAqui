let Agenda = require("../Model/Agenda.model");

exports.buscarTodos = (req, res) => {
  Agenda.get((err, agendas) => {
    if (err) {
      res.json({
        status: "erro",
        message: err
      });
    }

    res.json({
      status: "sucesso",
      message: "",
      data: agendas
    });
  });
};

exports.buscarUm = (req, res) => {
  Agenda.findById(req.params.id, (err, agenda) => {
    if (err) {
      res.json({
        status: "erro",
        message: err
      });
    }

    res.json({
      status: "sucesso",
      message: "",
      data: agenda
    });
  });
};

exports.novo = (req, res) => {
  var agenda = new Agenda();

  mapping(agenda);

  agenda.save(err => {
    if (err) {
      res.json({
        status: "erro",
        message: err
      });
    }

    res.json({
      status: "sucesso",
      message: "Agenda criada com sucesso.",
      data: agenda
    });
  });
};

exports.alterar = (req, res) => {
  Agenda.findById(req.params.id, (err, agenda) => {
    if (err) {
      res.json({
        status: "erro",
        message: err
      });
    }

    mapping(agenda);

    agenda.save(err => {
      if (err) {
        res.json({
          status: "erro",
          message: err
        });
      }

      res.json({
        status: "sucesso",
        message: "Agenda alterada com sucesso.",
        data: agenda
      });
    });
  });
};

exports.excluir = (req, res) => {
  Agenda.remove({ _id: req.params.id }, err => {
    if (err) {
      res.json({
        status: "erro",
        message: err
      });
    }

    res.json({
      status: "sucesso",
      message: "Agenda removida com sucesso."
    });
  });
};

mapping = agenda => {
  agenda.id = req.body.id;
  agenda.contratanteId = req.body.contratanteId;
  agenda.diaristaId = req.body.diaristaId;
  agenda.pedidoId = req.body.pedidoId;
  agenda.avaliacao = req.body.avaliacao;
  agenda.observacao = req.body.observacao;
};
