class Animal {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    hablar() {
      console.log(this.nombre + ' hace un ruido.');
    }
  }
  
  class Perro extends Animal {
    hablar() {
      console.log(this.nombre + ' ladra.');
    }
  }
  
  class Gato extends Animal {
    hablar() {
      console.log(this.nombre + ' maúlla.');
    }
  }
  
  const perro = new Perro('Firulais');
  const gato = new Gato('Garfield');
  
  perro.hablar(); 
  gato.hablar(); 

