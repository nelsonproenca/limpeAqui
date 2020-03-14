var mongoose = require("mongoose");

var agendaSchema = mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  contratanteId: {
    type: String,
    required: true
  },
  diaristaId: {
    type: String,
    required: true
  },
  pedidoId: {
    type: String,
    required: true
  },
  avaliacao: Number,
  observacao: String
});

// Export Contact model
var Agenda = (module.exports = mongoose.model("Agenda", agendaSchema));

module.exports.get = (callback, limit) => Agenda.find(callback).limit(limit);
