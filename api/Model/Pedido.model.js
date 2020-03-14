var mongoose = require("mongoose");

var pedidoSchema = mongoose.Schema({
  contratanteId: {
    type: String,
    required: true
  },
  localServico: {
    type: String,
    required: true
  },
  dataServico: {
    type: String,
    required: true
  },
  tipoServico: {
    type: String,
    required: true
  },
  tarefasServico: {
    type: String,
    required: true
  },
  quantidadeHorasServico: {
    type: Number,
    required: true
  },
  observacao: String,
  chavesLocalServico: Number,
  existePetServico: Boolean,
  diaristaId: String
});

// Export Contact model
var Pedido = (module.exports = mongoose.model("Pedido", pedidoSchema));

module.exports.get = (callback, limit) => Pedido.find(callback).limit(limit);
