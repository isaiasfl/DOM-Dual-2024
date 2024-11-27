export class UsuarioClases {
  #password; // propiedad privada
  constructor(nombre, email, password) {
    this.nombre = nombre;
    this.email = email;
    this.#password = password;
  }
  // --- métodos públicos ----
  login(emailIntroducido, passwordIntroducida) {
    // comprobar el email y el password.
    if (
      this.email === emailIntroducido &&
      this.#password === passwordIntroducida
    ) {
      return `Bienvenido ${this.nombre}`;
    }
    return "Error en las credenciales";
  }

  // actualizar el email
  updateEmail(newEmail) {
    this.email = newEmail;
    return `Email actualizado ${this.email}`;
  }

  // obtener toda la información del USUARIO.
  getInfo() {
    return `Usuario: ${this.nombre} - email: ${this.email}`;
  }
}
