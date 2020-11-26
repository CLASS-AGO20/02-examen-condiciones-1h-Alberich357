const DOLAR = 20.5;
const EURO = 22.7;
export default class App {
    convertir(pesos){
        let resultado;
        if(pesos<2000){
            resultado = pesos/DOLAR;
        }
        else if(pesos >= 2000){
            resultado = pesos/EURO;
        }
        return resultado;
    }
    costoRenta(kilometros){
        let resultado;
        if(kilometros < 50){
            resultado = kilometros*3;
        }
        else if(kilometros >= 50 && kilometros<100){
            resultado = kilometros*5;
        }
        else if(kilometros >= 100 && kilometros <200){
            resultado = kilometros*6;
        }
        else if(kilometros >= 200){
            resultado = kilometros*6.5;
        }
        return resultado;
    }
}

let app = new App();

console.log("Funcion convertir pesos: ");
console.log(app.convertir(1850),"Dolares");
console.log(app.convertir(2000),"Euros");
console.log("");

console.log("Funcion costo por kilometro: ");
console.log("Kilometros: 40  Pesos:",app.costoRenta(30));
console.log("Kilometros: 80  Pesos",app.costoRenta(78));
console.log("Kilometros: 150 Pesos:",app.costoRenta(150));
console.log("Kilometros: 200 Pesos:",app.costoRenta(240));
console.log("");