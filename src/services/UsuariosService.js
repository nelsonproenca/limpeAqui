class UsuariosService {
  static load() {
    return new Promise((resolve, reject) => {
      try {
        const usuarios = window.localStorage.getItem("Usuarios");
        let listaUsuarios = [];
        let lista = JSON.parse(usuarios);

        if (usuarios) {
          listaUsuarios.push(lista);
        }

        resolve(listaUsuarios);
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
