export interface Pedido {
  id?: String;
  contratanteId?: string;
  contratanteNome?: string;
  localServico?: string;
  dataServico?: string;
  horaServico?: string;
  diaSemanaServico?: string;
  tipoServico?: string;
  tarefasServico?: string;
  quantidadeHorasServico?: number;
  chavesLocalServico?: number;
  existePetServico?: boolean;
}
