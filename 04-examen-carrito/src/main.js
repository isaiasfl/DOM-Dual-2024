import Carrito from "./components/Carrito";

// crear instancias carrito // cargar_carrito_localStorage
const carrito = new Carrito();
carrito.cargarLocalStorage();
console.log("carrito--", carrito);

// declaración de funciones

const renderListaCarrito = () => {
  // capturamos el ul
  const lista = document.getElementById("lista-productos");
  const totalCarrito = document.getElementById("total-carrito");
  lista.innerHTML = carrito.productos
    .map(
      (producto, index) => `
      <li data-id="${index}">
          ${producto.obtenerInfo()}
          <button class="btn-editar" data-id="${index}" >Editar </button>
          <button class="btn-borrar" data-id="${index}" >Borrar </button>
      </li>
    
    `
    )
    .join("");
  console.log(carrito);

  // pongo el total
  console.log(carrito.calcularTotal());
  totalCarrito.textContent = carrito.calcularTotal();
  // guardo en localsStorage
  carrito.guardarLocalStorage();
};

const agregarProductoHandler = (event) => {
  // no recargar página
  event.preventDefault();
  const nombre = document.getElementById("nombre-producto").value.trim();
  const cantidad = Number(document.getElementById("cantidad-producto").value);
  const precio = Number(document.getElementById("precio-producto").value);

  if (nombre && cantidad > 0 && precio > 0) {
    carrito.agregarProducto(nombre, cantidad, precio);
    /// PINTAR EL PRODUCTO EN EL <UL>
    renderListaCarrito();
    console.log(carrito);
  } else {
    alert("Error al introducir los valores");
  }
  event.target.reset();
};

const manejarAccionesHandler = (event) => {
  const indice = Number(event.target.dataset.id);
  if (event.target.classList.contains("btn-borrar")) {
    carrito.borrarProducto(indice);
    renderListaCarrito();
  }
  if (event.target.classList.contains("btn-editar")) {
    ///editaremos
    const newCantidad = Number(
      prompt("Introduce la nueva cantidad", carrito.productos[indice].cantidad)
    );
    // una vez tengo la nueva cantidad, modifico el carrito de productos
    if (newCantidad && newCantidad > 0) {
      carrito.editarProducto(indice, newCantidad);
      renderListaCarrito();
    }
  }
};

function init() {
  // selecciono el APP.
  const app = document.getElementById("app");
  const tituloH1 = document.createElement("h1");
  tituloH1.textContent = "Carrito Productos";
  app.appendChild(tituloH1);

  app.innerHTML += `
    <form id="form-producto">
      <input id="nombre-producto" type="text" placeholder="Nombre del Producto" />
      <input id="cantidad-producto" type="number" placeholder="Cantidad" />
      <input id="precio-producto" type="number" placeholder="Precio" />
      <button type="submit" > Agregar Carrito </button>
    </form>
    <div id="container-productos">
      <ul id="lista-productos" ></ul>
    </div>
    <footer>
      <p > Total del carrito: <strong id="total-carrito">0</strong> </p>
    </footer>  
  `;

  document
    .getElementById("form-producto")
    .addEventListener("submit", agregarProductoHandler);

  document
    .getElementById("lista-productos")
    .addEventListener("click", manejarAccionesHandler);

  // simpre una vez que cargue la página, renderizo el carrito
  renderListaCarrito();
}

init();
