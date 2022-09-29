const precio_1 = 5500;
const precio_2 = 5000;
const precio_3 = 6000;
const envio = 800;


console.log("Bienvenido a D10S Indumentaria!");

let producto = parseInt(prompt("Que producto desea comprar?"));
let cantidad = parseInt(prompt("Cuantas unidades quiere?"));
let total;

function calculo_total(){

    if(producto == 1){
        
        if( cantidad == 1){
            total = precio_1 + envio;

            console.log("El total con envio incluido es de: $" ,  total)
        }

        else if( cantidad == 2){
            total = precio_1 * 2 + envio;

            console.log("El total con envio incluido es de: $" ,  total)
        }

        else{
            console.log("La cantidad maxima de unidades por usuario es de 2")
        }
    }


    else if(producto == 2){

        if( cantidad == 1){
            total = precio_2 + envio;

            console.log("El total con envio incluido es de: $" ,  total)
        }

        else if( cantidad == 2){
            total = precio_2 * 2 + envio;

            console.log("El total con envio incluido es de: $" ,  total)
        }

        else{
            console.log("La cantidad maxima de unidades por usuario es de 2")
        }

    }

    else if(producto == 3){

        if( cantidad == 1){
            total = precio_3 + envio;

            console.log("El total con envio incluido es de: $" ,  total)
        }

        else if( cantidad == 2){
            total = precio_3 * 2 + envio;

            console.log("El total con envio incluido es de: $" ,  total)
        }

        else{
            console.log("La cantidad maxima de unidades por usuario es de 2")
        }

    }

    else{
        console.log("El producto ingresado no se encuentra disponible.")
    }
}

calculo_total(total);
