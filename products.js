//Toggle carrito


let btn_carrito = document.getElementById('mostrarCarrito');

btn_carrito.addEventListener('click', function(){

    let carrito = document.getElementById('carrito');

    if(carritoItems.style.display != "none"){

        carritoItems.style.display = "none";
    }
    else{
        carritoItems.style.display = "flex";
    }



})
// fin toggle carrito

// Agregar al carrito

let carrito = [];

let btn_compra = document.querySelectorAll('.agregarCarrito');

for(let boton of btn_compra){

    boton.addEventListener("click" , agregarAlCarrito )
}



function agregarAlCarrito(e){

    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;

    let nombreProducto = padre.querySelector("h5").textContent;
    let precioItem = padre.querySelector("span").textContent;
    let cardImg = abuelo.querySelector("img").src;
    let id = padre.querySelector("small").textContent;
      

    let producto = {

        nombre: nombreProducto,
        precio: precioItem,
        img: cardImg,
        cantidad: 1,
        id: id

    }
    
    
    carrito.push(producto);

    mostrar_carrito(producto);

    

 


    
}
  
function mostrar_carrito( producto ){




let fila = document.createElement("div");
                 fila.innerHTML = `<div class="imgCarrito"><img src="${producto.img}"></div>
                          <div class="nombreCarrito">${producto.nombre}</div>
                          <div class="infoCarrito"><div class="cantidadCarrito">${producto.cantidad}</div><div>${producto.precio}</div></div>
                          <div class="button"><button class="borrar_elemento">Borrar</div>`;
        
           
                     
            let tabla = document.querySelector(".carritoProductos");
            tabla.append(fila);
    



            let btn_borrar = document.querySelectorAll(".borrar_elemento");


            for( let boton of btn_borrar){

                boton.addEventListener("click" , borrar_producto);
            }

                    
                
            



function borrar_producto(e){

    
    let abuelo = e.target.parentNode.parentNode;

    abuelo.remove();

    
    



}
}

//Toggle login


let btn_login = document.getElementById('mostrarLogin');

btn_login.addEventListener('click', function(){

    let login = document.getElementById('loginButtonBody');

    if(loginButtonBody.style.display != "none"){

        loginButtonBody.style.display = "none";
    }
    else{
        loginButtonBody.style.display = "flex";
    }



})
// fin toggle login








