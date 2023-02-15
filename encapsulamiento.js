class CuentaBancaria {
    
    #saldoInicial;
    constructor(saldoInicial) {
    this.#saldoInicial = saldoInicial;
   
  
      this.depositar = function(monto) {
        this.#saldoInicial += monto;
      };
  
      this.retirar = function(monto) {
        if (monto > this.#saldoInicial) {
          console.log('No hay suficiente saldoInicial ');
          return;
        }
        this.#saldoInicial -= monto;
      };
  
      this.obtenersaldoInicial = function() {
        return this.#saldoInicial;
      };
    }
  }


  const miCuenta = new CuentaBancaria(1000);
  const otraCuenta=new CuentaBancaria(5000)

  otraCuenta.depositar(2);
  console.log(otraCuenta.obtenersaldoInicial());
  
otraCuenta.retirar(50)
console.log(otraCuenta.obtenersaldoInicial()); 

miCuenta.depositar(500);
console.log(miCuenta.obtenersaldoInicial()); 

miCuenta.retirar(2000); 
console.log(miCuenta.obtenersaldoInicial()); 

miCuenta.retirar(1000);
console.log(miCuenta.obtenersaldoInicial()); 