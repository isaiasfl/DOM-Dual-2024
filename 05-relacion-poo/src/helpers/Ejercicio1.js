export function Tarea(nombre) {
  //estaticas
  Tarea.contador = 1;
  // propiedades privadas
  // propiedades publicas
  this.id = Tarea.contador++;
  this.nombre = nombre;
  this.completada = false;

  // metodos publicos
  this.toggleCompletada = function () {
    this.completada = !this.completada;
  };
  // metodo privado
  function logEstado() {
    console.log(`
      La tarea ${this.nombre} está ${
      this.completada ? "completada" : "pendiente"
    }
      `);
  }

  // crear una método estático del objeto
  // que lo tengan todos las instancias.
  Tarea.prototype.info = function () {
    console.log(`
      La tarea ${this.nombre} está ${
      this.completada ? "completada" : "pendiente"
    }
      `);
  };
}

export class TareaClass {
  // variables de clase
  static contador = 1;
  // propiedad privada
  #completada;

  // constructor
  constructor(nombre) {
    this.id = TareaClass.contador++;
    this.nombre = nombre;
    this.#completada = false;
  }

  // método público
  toggleCompletada() {
    this.#completada = !this.#completada;
  }

  info() {
    console.log(`
      La tarea ${this.nombre} está ${
      this.#completada ? "completada" : "pendiente"
    }
      `);
  }
}
