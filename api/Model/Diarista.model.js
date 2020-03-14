var mongoose = require("mongoose");

var diaristaSchema = mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  nome: {
    type: String,
    required: true
  },
  limpeAquiEmpresa: {
    type: String,
    required: true
  },
  celular: {
    type: String,
    required: true
  },
  rgUrlImagem: {
    type: String,
    required: true
  },
  cpfUrlImagem: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  semVinculoEmpregaticio: Boolean,
  dataNascimento: Date,
  contaBancariaSeuNome: Boolean,
  acessoInternetCelular: Number,
  cep: String,
  endereco: String,
  numero: Number,
  cidade: String,
  estado: String,
  temMEI: Boolean,
  experienciaProfissionalLimpeza: Number,
  situacaoAtualEmprego: Number,
  trabalharLimpeAquiSeria: Number,
  fotoUrlImagem: String,
  experienciaProfissionalLimpezaTexto: String,
  expliqueLimpezaBanheiro: String,
  regiaoPreferencia: String,
  disponibilidadeSegunda: Boolean,
  disponibilidadeSegundaHoraInicio: String,
  disponibilidadeSegundaHorafim: String,
  disponibilidadeTerca: Boolean,
  disponibilidadeTercaHoraInicio: String,
  disponibilidadeTercaHorafim: String,
  disponibilidadeQuarta: Boolean,
  disponibilidadeQuartaHoraInicio: String,
  disponibilidadeQuartaHorafim: String,
  disponibilidadeQuinta: Boolean,
  disponibilidadeQuintaHoraInicio: String,
  disponibilidadeQuintaHorafim: String,
  disponibilidadeSexta: Boolean,
  disponibilidadeSextaHoraInicio: String,
  disponibilidadeSextaHorafim: String,
  disponibilidadeSabado: Boolean,
  disponibilidadeSabadoHoraInicio: String,
  disponibilidadeSabadoHorafim: String,
  disponibilidadeDomingo: Boolean,
  disponibilidadeDomingoHoraInicio: String,
  disponibilidadeDomingoHorafim: String,
  avisoPropostaServico: Number
});

// Export Contact model
var diarista = (module.exports = mongoose.model("Diarista", diaristaSchema));

module.exports.get = (callback, limit) => Diarista.find(callback).limit(limit);
