// en esta funcion nos saldrá undefined porque el this coge el de manera global si ponemos let nombre = pedro en el superior nos indicara que el nombre es pedro
//let nombre = "pedro";
let hulk = {
    nombre: "Hulk",
    smash(){
        setTimeout(function () {
            console.log(this.nombre + " smash!!");
        }, 1500);

    }
};

hulk.smash();