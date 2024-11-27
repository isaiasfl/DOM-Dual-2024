export function Usuario(nombre, email, password) {
  this.nombre = nombre; // variables públicas
  this.email = email;
  let _password = password;
  // --- métodos públicos ----
  this.login = function (emailIntroducido, passwordIntroducida) {
    // comprobar el email y el password.
    if (this.email === emailIntroducido && _password === passwordIntroducida) {
      return `Bienvenido ${this.nombre}`;
    }
    return "Error en las credenciales";
  };
  // actualizar el email
  this.updateEmail = function (newEmail) {
    this.email = newEmail;
    return `Email actualizado ${this.email}`;
  };

  // obtener toda la información del USUARIO.
  this.getInfo = function () {
    return `Usuario: ${this.nombre} - email: ${this.email}`;
  };
}
