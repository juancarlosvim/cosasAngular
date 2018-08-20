function getNombre(){
    return "Fernando";
}
let nombre:string = "Juan";
let apellido:string = "Perez";
let edad:number = 32;
// en los templates literales de ES6 podemos meter código javascript hasta una función;
let texto = `Hola, soy ${nombre} ${apellido} y tengo ${edad} años`;

let texto2:string = `${1+2}`;
let texto3:string = `${getNombre()}`;

console.log(texto);
console.log(texto2);
console.log(texto3);
