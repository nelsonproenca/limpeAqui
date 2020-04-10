class PedidosService {
  static loadLocal(tabela) {
    return new Promise((resolve, reject) => {
      debugger;
      try {
        const pedidos = window.localStorage.getItem("Pedidos");

        resolve(pedidos ? JSON.parse(pedidos) : []);
      } catch (error) {
        reject(error);
      }
    });
  }

  static getBemVindoLocal(contratanteId) {
    return new Promise((resolve, reject) => {
      try {
        const pedidos = window.localStorage.getItem("Pedidos");
        let pedidoAtual = pedidos ? JSON.parse(pedidos) : [];

        let bemVindo = {
          diaristaId: "add0e7f1-0000-0000-0000-2d5264419999",
          diaristaNome: "Diarista Teste",
          contratanteId: "add0e7f1-ea0b-48e6-af85-2d5264415a7f",
          contratanteNome: "Admin Contratante",
          foto: "",
          dataServico: "12/01/2020 09:30",
          valorServico: "0.00"
        };

        resolve(bemVindo);
      } catch (error) {
        reject(error);
      }
    });
  }

  static saveLocal(pedido) {
    return new Promise((resolve, reject) => {
      try {
        debugger;
        let pedidosData = window.localStorage.getItem("Pedidos");

        if (pedidosData === null) {
          pedidosData = [pedido];
        } else {
          pedidosData = JSON.parse(pedidosData);
          pedidosData.push(pedido);
        }

        window.localStorage.setItem("Pedidos", JSON.stringify(pedidosData));
        resolve("Informações adicionadas com sucesso");
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default PedidosService;
