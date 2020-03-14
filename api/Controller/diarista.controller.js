let Diarista = require("../Model/Diarista.model");

exports.buscarTodos = (req, res) => {
  Diarista.get((err, diaristas) => {
    if (err) {
      res.json({
        status: "erro",
        message: err
      });
    }

    res.json({
      status: "sucesso",
      message: "",
      data: diaristas
    });
  });
};

exports.buscarUm = (req, res) => {
  Diarista.findById(req.params.id, (err, diarista) => {
    if (err) {
      res.json({
        status: "erro",
        message: err
      });
    }

    res.json({
      status: "sucesso",
      message: "",
      data: diarista
    });
  });
};

exports.novo = (req, res) => {
  var diarista = new Diarista();

  mapping(diarista);

  diarista.save(err => {
    if (err) {
      res.json({
        status: "erro",
        message: err
      });
    }

    res.json({
      status: "sucesso",
      message: "Diarista criada com sucesso.",
      data: diarista
    });
  });
};

exports.alterar = (req, res) => {
  Diarista.findById(req.params.id, (err, diarista) => {
    if (err) {
      res.json({
        status: "erro",
        message: err
      });
    }

    mapping(diarista);

    diarista.save(err => {
      if (err) {
        res.json({
          status: "erro",
          message: err
        });
      }

      res.json({
        status: "sucesso",
        message: "Diarista alterada com sucesso.",
        data: diarista
      });
    });
  });
};

exports.excluir = (req, res) => {
  Diarista.remove({ _id: req.params.id }, err => {
    if (err) {
      res.json({
        status: "erro",
        message: err
      });
    }

    res.json({
      status: "sucesso",
      message: "Diarista removida com sucesso."
    });
  });
};

mapping = diarista => {
  diarista.id = req.body.id;
  diarista.nome = req.body.nome;
  diarista.limpeAquiEmpresa = req.body.limpeAquiEmpresa;
  diarista.celular = req.body.celular;
  diarista.rgUrlImagem = req.body.rgUrlImagem;
  diarista.cpfUrlImagem = req.body.cpfUrlImagem;
  diarista.email = req.body.email;
  diarista.semVinculoEmpregaticio = req.body.semVinculoEmpregaticio;
  diarista.dataNascimento = req.body.dataNascimento;
  diarista.contaBancariaSeuNome = req.body.contaBancariaSeuNome;
  diarista.acessoInternetCelular = req.body.acessoInternetCelular;
  diarista.cep = req.body.cep;
  diarista.endereco = req.body.endereco;
  diarista.numero = req.body.numero;
  diarista.cidade = req.body.cidade;
  diarista.estado = req.body.estado;
  diarista.temMEI = req.body.temMEI;
  diarista.experienciaProfissionalLimpeza =
    req.body.experienciaProfissionalLimpeza;
  diarista.situacaoAtualEmprego = req.body.situacaoAtualEmprego;
  diarista.trabalharLimpeAquiSeria = req.body.trabalharLimpeAquiSeria;
  diarista.fotoUrlImagem = req.body.fotoUrlImagem;
  diarista.experienciaProfissionalLimpezaTexto =
    req.body.experienciaProfissionalLimpezaTexto;
  diarista.expliqueLimpezaBanheiro = req.body.expliqueLimpezaBanheiro;
  diarista.regiaoPreferencia = req.body.regiaoPreferencia;
  diarista.disponibilidadeSegunda = req.body.disponibilidadeSegunda;
  diarista.disponibilidadeSegundaHoraInicio =
    req.body.disponibilidadeSegundaHoraInicio;
  diarista.disponibilidadeSegundaHorafim =
    req.body.disponibilidadeSegundaHorafim;
  diarista.disponibilidadeTerca = req.body.disponibilidadeTerca;
  diarista.disponibilidadeTercaHoraInicio =
    req.body.disponibilidadeTercaHoraInicio;
  diarista.disponibilidadeTercaHorafim = req.body.disponibilidadeTercaHorafim;
  diarista.disponibilidadeQuarta = req.body.disponibilidadeQuarta;
  diarista.disponibilidadeQuartaHoraInicio =
    req.body.disponibilidadeQuartaHoraInicio;
  diarista.disponibilidadeQuartaHorafim = req.body.disponibilidadeQuartaHorafim;
  diarista.disponibilidadeQuinta = req.body.disponibilidadeQuinta;
  diarista.disponibilidadeQuintaHoraInicio =
    req.body.disponibilidadeQuintaHoraInicio;
  diarista.disponibilidadeQuintaHorafim = req.body.disponibilidadeQuintaHorafim;
  diarista.disponibilidadeSexta = req.body.disponibilidadeSexta;
  diarista.disponibilidadeSextaHoraInicio =
    req.body.disponibilidadeSextaHoraInicio;
  diarista.disponibilidadeSextaHorafim = req.body.disponibilidadeSextaHorafim;
  diarista.disponibilidadeSabado = req.body.disponibilidadeSabado;
  diarista.disponibilidadeSabadoHoraInicio =
    req.body.disponibilidadeSabadoHoraInicio;
  diarista.disponibilidadeSabadoHorafim = req.body.disponibilidadeSabadoHorafim;
  diarista.disponibilidadeDomingo = req.body.disponibilidadeDomingo;
  diarista.disponibilidadeDomingoHoraInicio =
    req.body.disponibilidadeDomingoHoraInicio;
  diarista.disponibilidadeDomingoHorafim =
    req.body.disponibilidadeDomingoHorafim;
  diarista.avisoPropostaServico = req.body.avisoPropostaServico;
};
