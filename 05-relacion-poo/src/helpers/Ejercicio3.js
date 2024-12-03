export function Empleado(nombre, edad, puesto) {
  this.nombre = nombre;
  this.edad = edad;
  this.puesto = puesto;
  // salario lo hago compartido para la clase.
  Empleado.prototype.calcularSalario = function () {
    const salarioBase = {
      junior: 1500,
      senior: 2500,
      master: 5000,
    };
    return salarioBase[this.puesto] || 0;
  };

  Empleado.prototype.info = function () {
    console.log(`
      ${this.nombre} (${this.edad}) - ${
      this.puesto
    } - ${this.calcularSalario()} €
    `);
  };
}

// subFuncion constructora llamada EmpleadoFreelance

export function EmpleadoFreelance(nombre, edad, preciohora) {
  Empleado.call(this, nombre, edad, "freelance");
  this.preciohora = preciohora;
  // tengo que heredar las métodos de la función constructora PADRE
  EmpleadoFreelance.prototype = Object.create(Empleado.prototype);
  // y que el constructor sea el del padre
  EmpleadoFreelance.prototype.constructor = EmpleadoFreelance;

  // sobreescritura de método calcularSalario y el info
  


  EmpleadoFreelance.prototype.info= function (){

  }
}


