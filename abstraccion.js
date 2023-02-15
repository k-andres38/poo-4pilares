

class Libro {
    constructor(titulo, autor, precio) {
      this.titulo = titulo;
      this.autor = autor;
   
      this.precio = precio;
    }
  
    getTitulo() {
      return `El titulo del libro es: ${this.titulo}`;
    }
  
    getAutor() {
      return `El nombre del autor es: ${this.autor}`;
    }
  
   
  
    getPrecio() {
      return `El precio del libro es de: ${this.precio}`;
    }
  }

const libro1 = new Libro('1984', 'George Orwell', 10.000);

console.log(libro1.getTitulo()); 
console.log(libro1.getAutor()); 
console.log(libro1.getPrecio()); 