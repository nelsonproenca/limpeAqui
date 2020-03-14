class PedidosService {
  static loadLocal() {
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

  static saveLocal(pedido) {
    return new Promise((resolve, reject) => {
      try {
        window.localStorage.setItem("Pedidos", JSON.stringify(pedido));
        resolve("Informações adicionadas com sucesso");
      } catch (error) {
        reject(error);
      }
    });
  }

  static getLocal(pedidoId) {
    return new Promise((resolve, reject) => {
      try {
        const pedidosData = window.localStorage.getItem("Pedidos");

        let pedidos = pedidosData ? JSON.parse(pedidosData) : [];
        let pedido = null;

        if (Array(pedidos).length > 0) {
          pedido = Array(pedidos).map(result => {
            return result.id === pedidoId ? result : null;
          });
        }

        resolve(pedido);
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default PedidosService;
