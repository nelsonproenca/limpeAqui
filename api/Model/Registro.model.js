var mongoose = require("mongoose");

var registroUsuarioSchema = mongoose.Schema({
  usuario: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    required: true
  },
  nome: {
    type: String,
    required: true
  },
  tipo: {
    type: Number,
    required: true
  },
  email: String,
  celular: String,
  id: String
});

// Export Contact model
var RegistroUsuario = (module.exports = mongoose.model(
  "RegistroUsuario",
  registroUsuarioSchema
));

module.exports.get = (callback, limit) =>
  RegistroUsuario.find(callback).limit(limit);
