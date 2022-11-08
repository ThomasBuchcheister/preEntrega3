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

//btn_registro








let arreglo_usuarios = [];


function registro_usuario(){
    let nombre_usuario = document.getElementById('nombreUsuario');
    let correo_usuario = document.getElementById('correoUsuario');
    let contrasena_usuario = document.getElementById('contrasenaUsuario');


    let usuario = { nombre:nombre_usuario.value, email:correo_usuario.value, contrasena:contrasena_usuario.value};
    
    


    if (localStorage.length != 0){

        let recuperando_arreglo = localStorage.getItem("usuarios");
        recuperando_arreglo = JSON.parse(recuperando_arreglo);

        for (let usuario_arreglo of recuperando_arreglo){
            
            if(usuario.nombre == usuario_arreglo.nombre){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'El nombre de usuario ya esta registrado.',
                    
                })
                
            }
            else{
                if(usuario.email == usuario_arreglo.email){
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'El correo ya fue registrado.',
                        footer: '<a href="../html/login.html">Inicia sesion con ese correo</a>'
                        
                    })
                    
                }

                else{
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 5000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.addEventListener('mouseenter', Swal.stopTimer)
                          toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                      })
                      
                      Toast.fire({
                        icon: 'success',
                        title: 'Te registraste correctamente.'
                    })
                    arreglo_usuarios.push(usuario);
                    let usuariosJSON = JSON.stringify(arreglo_usuarios);
                    localStorage.setItem("usuarios" , usuariosJSON);
                    setTimeout(function(){ location.replace('../html/login.html') }, 5000);
                    break
                    
                }
                
            }
        }
        }
        
    else{
        arreglo_usuarios.push(usuario);
        let usuariosJSON = JSON.stringify(arreglo_usuarios);
        localStorage.setItem("usuarios" , usuariosJSON);

    }



}



function validar_usuario(){
    
    let nombre_usuario = document.getElementById('nombreUsuario');
    let contrasena_usuario = document.getElementById('contrasenaUsuario');

    let recuperando_arreglo = localStorage.getItem("usuarios");
    recuperando_arreglo = JSON.parse(recuperando_arreglo);

    console.log(recuperando_arreglo);
    
    for(let usuario of recuperando_arreglo){
        
        
        if(nombre_usuario.value == usuario.nombre && contrasena_usuario.value == usuario.contrasena){

            console.log("render del carrito");
        }

        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Los datos ingresados no coinciden con ninguno de nuestros usuarios registrados.',
                
            })
        }
    }   

    

        
}

const btn_registro = document.getElementById("register");

btn_registro.addEventListener('click' , registro_usuario);

const btn_ingresar = document.getElementById("login");

btn_ingresar.addEventListener('click' , validar_usuario);









