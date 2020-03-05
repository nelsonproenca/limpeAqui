class UsuariosService {
  static load() {
    return new Promise((resolve, reject) => {
      debugger;
      try {
        const usuarios = window.localStorage.getItem("Usuarios");

        resolve(usuarios ? JSON.parse(usuarios) : []);
      } catch (error) {
        reject(error);
      }
    });
  }

  static save(usuario) {
    return new Promise((resolve, reject) => {
      try {
        window.localStorage.setItem("Usuarios", JSON.stringify(usuario));
        resolve("Usuário adicionado com sucesso");
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default UsuariosService;
