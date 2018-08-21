// Uso de Let y Const
let nombre = "Ricardo Tapia";
let edad = 23;

const PERSONAJE = {
    nombre: nombre,
    edad: edad
};


// Cree una interfaz que sirva para validar el siguiente objeto
let batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
};

interface Batman {
    nombre:string,
    artesMarciales:string[]
}

// Convertir esta funcion a una funcion de flecha
let resultadoDoble = ( a:number, b:number ) => {
    return (a + b) * 2
};


// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, poder?:string, arma:string="arco" ){
    let mensaje:string;
    if( poder ){
        mensaje = `${nombre} tiene el poder de: ${poder} y un arma ${arma}`;
    }else{
        mensaje = `${nombre} tiene un ${poder};`
    }
};

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class Rectangulo {
    base:number=0;
    altura:number=0;

    calcularArea():number{
        return this.base * this.altura;
    }


}