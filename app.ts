// hacemos funcion flecha y nos saldrá el nombre que queremos Hulk
let hulk = {
    nombre: "Hulk",
    smash(){
        setTimeout(() => {
            console.log(this.nombre + " smash!!");
        }, 1500);

    }
};

hulk.smash();