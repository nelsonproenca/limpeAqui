var mongoose = require("mongoose");

var cartaoSchema = mongoose.Schema({
  numeroCartao: {
    type: String,
    required: true
  },
  nomeTitular: {
    type: String,
    required: true
  },
  validade: {
    type: String,
    required: true
  },
  codigoVerificador: {
    type: Number,
    required: true
  },
  id: {
    type: String,
    required: true
  }
});

// Export Contact model
var Cartao = (module.exports = mongoose.model("Cartao", cartaoSchema));

module.exports.get = (callback, limit) => Cartao.find(callback).limit(limit);
