// implementar un perfil de login y actualización del perfil usando
// POO
// Objetivo: Crear una CLASE u OBJETO para modelar el inicio de sesión/pefil

import { Usuario } from "./components/Usuario";
import { UsuarioClases } from "./components/UsuarioClases";
import { UsuarioFFabrica } from "./components/UsuarioFFabrica";

// Creo un instancia de Usuario

// const usuario = new Usuario("Ana", "ana@gmail.com", "12345");
//const usuario = new UsuarioClases("a", "aa@gg.com", "123");
const usuario = UsuarioFFabrica("a", "aa@gg.com", "123");

const app = document.getElementById("app");
app.innerHTML = `
  <h2>Gestión de Usuarios</h2>
  <p>${usuario.getInfo()} </p>
  <button id="btn-login" > Iniciar Sesión </button>
  <button id="btn-actualizar-email" > Actualizar Email </button>
  <div id="form-container" ></div>

`;

// gestiono los eventos.

document
  .getElementById("btn-login")
  .addEventListener("click", mostrarFormularioLogin);

document
  .querySelector("#btn-actualizar-email")
  .addEventListener("click", mostrarFormularioUpdateEmail);

function mostrarFormularioLogin() {
  const formContainer = document.getElementById("form-container");
  formContainer.innerHTML = `
    <input id="email-login" type="email" placeholder="Introduzca el email" />
    <input id="password-login" type="password" placeholder="Contraseña" />
    <button id="btn-enviar-login">Enviar</button>
  
  `;
  document.getElementById("btn-enviar-login").addEventListener("click", () => {
    const email = document.getElementById("email-login").value.trim();
    const password = document.getElementById("password-login").value.trim();
    alert(usuario.login(email, password));
  });
}

function mostrarFormularioUpdateEmail() {
  const formContainer = document.getElementById("form-container");
  formContainer.innerHTML = `
    <input id="nuevo-email" type="email" placeholder="Nuevo Email" />
    <button id="btn-update-email">Actualizar</button>
  
  `;
  document.getElementById("btn-update-email").addEventListener("click", () => {
    const newEmail = document.getElementById("nuevo-email").value.trim();
    alert(usuario.updateEmail(newEmail));
  });
}
