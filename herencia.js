
class Animal{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad=edad;
    }

    dormir(){
        console.log(`${this.nombre} durmiendo...`);
    }

    alimentacion(){ 
        console.log(`Perro alimentado. tiene una edad de ${this.edad}`);
    }
}

class Perro extends Animal{
    constructor(nombre,edad,raza){
        super(nombre,edad);
        this.raza=raza;
    }

    ladrar(){
        console.log(`${this.nombre} ladrando...`);
    }

   
}

const perro1=new Perro('susa',12,'chagua');
perro1.alimentacion();
perro1.ladrar();
perro1.dormir();

