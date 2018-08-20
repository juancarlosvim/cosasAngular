//funciones flecha
let miFuncion = function (a) {
    return a;
};

let miFuncionF = (a) =>{
   return a;
};

let miFuncion2 = function(a:number, b:number){
    return a+b;
};

let miFuncion2F = (a:number, b:number) =>{
    return a+b;
};

let miFuncion3 = function(nombre:string){
    nombre = nombre.toUpperCase();
    return nombre;
};

let miFuncion3F = (nombre:string) =>{
    nombre = nombre.toUpperCase();
    return nombre;
};


console.log(`Mi funcion ${miFuncion("Normal")}`);
console.log(`Mi funcion ${miFuncionF("Flecha")}`);
console.log(`Mi funcion2 ${miFuncion2(5, 6)}`);
console.log(`Mi funcion2F ${miFuncion2F(5, 6)}`);
console.log(`Mi funcion3 ${miFuncion3("pedro")}`);
console.log(`Mi funcion3F ${miFuncion3F("pedro")}`);
