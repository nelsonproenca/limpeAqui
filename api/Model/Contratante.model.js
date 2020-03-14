var mongoose = require("mongoose");

var contratanteSchema = mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  nome: {
    type: String,
    required: true
  },
  celular: {
    type: String,
    required: true
  },
  endereco: {
    type: String,
    required: true
  },
  cep: {
    type: String,
    required: true
  },
  numero: {
    type: String,
    required: true
  },
  cidade: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    required: true
  },
  foto: String,
  email: String,
  rg: String,
  cpf: String
});

// Export Contact model
var Contratante = (module.exports = mongoose.model(
  "Contratante",
  contratanteSchema
));

module.exports.get = (callback, limit) =>
  Contratante.find(callback).limit(limit);
