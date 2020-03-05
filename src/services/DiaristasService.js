class DiaristasService {
  static load() {
    return new Promise((resolve, reject) => {
      debugger;
      try {
        const diaristas = window.localStorage.getItem("Diaristas");

        resolve(diaristas ? JSON.parse(diaristas) : []);
      } catch (error) {
        reject(error);
      }
    });
  }
  static get(diaristaId) {
    return new Promise((resolve, reject) => {
      try {
        const diaristasData = window.localStorage.getItem("Diaristas");

        let diaristas = diaristasData ? JSON.parse(diaristasData) : [];
        let diarista = null;

        if (Array(diaristas).length > 0) {
          Array(diaristas).map(result => {
            if (result.id === diaristaId) {
              diarista = result;
            }
          });
        }

        resolve(diarista);
      } catch (error) {
        reject(error);
      }
    });
  }
  static getOne(diaristaId) {
    return new Promise((resolve, reject) => {
      debugger;
      try {
        const diaristasData = window.localStorage.getItem("Diaristas");
        const pedidosData = window.localStorage.getItem("Pedidos");

        let diarista = null;
        let bemVindo = {};
        let pedido = null;
        let pedidos = pedidosData ? JSON.parse(pedidosData) : [];
        let diaristas = diaristasData ? JSON.parse(diaristasData) : [];

        if (Array(diaristas).length > 0) {
          Array(diaristas).map(result => {
            if (result.id === diaristaId) {
              diarista = result;
            }
          });
        }

        if (Array(pedidos).length > 0) {
          Array(pedidos).map(result => {
            if (result.diaristaId === diaristaId) {
              pedido = result;
            }
          });
        }

        bemVindo = {
          diaristaId: diarista.id,
          diaristaNome: diarista.nome,
          contratanteId: pedido.contratanteId,
          contratanteNome: pedido.contratanteNome,
          foto: diarista.foto,
          dataServico: pedido.dataServico,
          valorServico: pedido.valorServico
        };

        resolve(bemVindo);
      } catch (error) {
        reject(error);
      }
    });
  }

  static save(diarista) {
    return new Promise((resolve, reject) => {
      try {
        window.localStorage.setItem("Diaristas", JSON.stringify(diarista));
        resolve("Informações adicionadas com sucesso");
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default DiaristasService;
