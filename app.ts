//funcion con 3 parametros , 1 obligatorio, 2 por defecto, y 3 opcional
function activar(quien:string, objeto:string="función", momento?:string) {
    let mensaje:string;
    if(momento){
        mensaje = `${quien} activó la ${objeto} en el ${momento}`;
    }else{
        mensaje = `${quien} activó la ${objeto}`;
    }
    console.log(mensaje);
}

activar("Peter", "", "Madrid");