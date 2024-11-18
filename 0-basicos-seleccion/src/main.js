// # Ejercicios básicos de selección del DOM

// ### Ejercicio 1:

// Selecciona el elemento `h1` por su ID.

const elementH1 = document
  .getElementById("contenedorPrincipal")
  .querySelector("h1");
console.log(elementH1);
elementH1.style.color = "red"; // <-- estilos en línea
elementH1.textContent = "Hola Mundo"; // <-- contenido del elemento

// ### Ejercicio 2:

// Selecciona todos los párrafos con la clase "parrafo" dentro del `contenedorPrincipal`.

const elementsParrafo = document.querySelectorAll(
  "#contenedorPrincipal .parrafo"
);
console.log(elementsParrafo);

// ### Ejercicio 3:

// Selecciona el elemento `img` por su atributo `src`.

const imagen = document.querySelector("img[src='imagen.png']")

// ### Ejercicio 4:

// Selecciona todos los elementos `<span>` dentro del `contenedorSecundario`.

const contenedorSpan = document.querySelectorAll("#contenedorSecundario span");

// ### Ejercicio 5:

// Selecciona el primer párrafo con la clase "importante".

const primerParrafoImpo = document.querySelector(".parrafo.importante");

// ### Ejercicio 6:

// Selecciona todos los párrafos que están dentro de un elemento con el `id` "contenedorPrincipal".

const parrafosContenedorPrincipal = document.querySelectorAll("#contenedorPrincipal p");

// ### Ejercicio 7:

// Selecciona todos los elementos que tienen el atributo `data-atributo` con valor "valor1".

const elementosDataAtributo = document.querySelectorAll("[data-atributo='valor1']");
// --> esto devuelve un NODELIST

// ### Ejercicio 8:

// Selecciona el segundo párrafo que está dentro de un elemento con la clase "importante".

const parrafosImportantes = document.querySelectorAll(".parrafo.importante");
const segundoParrafoImportante = parrafosImportantes.length>1 ? parrafosImportantes[1] : null;


// ### Ejercicio 9:

// Selecciona todos los elementos `<span>` que están dentro de cualquier elemento con la clase "contenedor".

const spansContenedor = document.querySelectorAll(".contenedor span");

// ### Ejercicio 10:

// Selecciona el tercer párrafo dentro del `contenedorPrincipal` que tiene la clase "parrafo".

const pContenedorPrincipal = document.querySelectorAll("#contenedorPrincipal .parrafo");
const tercerParrafo = pContenedorPrincipal.length>2 ? pContenedorPrincipal[2] : null;