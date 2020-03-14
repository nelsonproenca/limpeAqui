class DiaristasService {
  static loadLocal() {
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
          diarista = Array(diaristas).map(result => {
            return result.id === diaristaId ? result : null;
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
          diarista = Array(diaristas).map(result => {
            return result.id === diaristaId ? result : null;
          });
        }

        if (Array(pedidos).length > 0) {
          pedido = Array(pedidos).map(result => {
            return result.diaristaId === diaristaId ? result : null;
          });
        }

        if (diaristaId <= 0) {
          const diaristasData = window.localStorage.getItem("Usuarios");
        } else {
          bemVindo = {
            diaristaId: diarista.id,
            diaristaNome: diarista.nome,
            contratanteId: pedido.contratanteId,
            contratanteNome: pedido.contratanteNome,
            foto: diarista.foto,
            dataServico: pedido.dataServico,
            valorServico: pedido.valorServico
          };
        }

        resolve(bemVindo);
      } catch (error) {
        reject(error);
      }
    });
  }

  static saveLocal(diarista) {
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
