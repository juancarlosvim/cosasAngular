//promesas

let prom1 = new Promise(function (resolve:any, reject:any)  {
    setTimeout(()=>{
        console.log("Promesa terminada");
        // termina bien
        resolve();

        // termina mal
         //reject();
    }, 1500);
});
console.log("Paso 1");
prom1.then(function () {
    console.log("Ejecutame cuando se termine bien");
},
    function () {
        console.error("Ejecutar si todo sale mal");
    }
);

console.log("Paso 2");
