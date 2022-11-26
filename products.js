
// carrito

const clickButton = document.querySelectorAll('.agregarCarrito');
const carritoItemsBody = document.querySelector('.carritoProductosss')
let carrito = [];

clickButton.forEach(btn => {
    btn.addEventListener('click', addCarritoItem );
})


function addCarritoItem(e){
    const button = e.target;
    const item = button.closest('.card');

    
    const itemTitle = item.querySelector('.nombreProducto').textContent;
    const itemPrice = item.querySelector('.precioItem').textContent;
    const itemImage = item.querySelector('.imagen').src;

    const newItem = {
        titulo: itemTitle,
        precio: itemPrice,
        imagen: itemImage,
        cantidad: 1
    }
    
    
    addCarritoItem(newItem)
    
    function addCarritoItem(newItem){
        const inputElemento = carritoItemsBody.getElementsByClassName('cantidadCarrito')
        for(let i = 0; i < carrito.length; i++){
            if(carrito[i].titulo.trim() === newItem.titulo.trim()){
                carrito[i].cantidad++;
                const inputValue = inputElemento[i];
                inputValue.value++;
                carritoTotal();
                return null;
            }
        }


        carrito.push(newItem);
        renderCarrito();
    }
}



function renderCarrito(){
    
    
    carritoItemsBody.innerHTML = ''
    carrito.map(item => {
        const div = document.createElement('div');
        div.classList.add('itemCarrito');
        const content = `
                        <div class="imgCarrito"><img src="${item.imagen}"></div>
                        <div class="nombreCarrito">${item.titulo}</div>
                        <div class="infoCarrito">
                            <input class="cantidadCarrito" type="number" min="1" max="5" value="${item.cantidad}"/>
                            <div class="precioCarrito">${item.precio}</div>
                        </div>
                        <div class="button"><button class="borrar_elemento">Borrar</div>
        `

        div.innerHTML = content;
        carritoItemsBody.append(div)

        div.querySelector('.borrar_elemento').addEventListener('click', borrarItemsCarrito)
        div.querySelector('.cantidadCarrito').addEventListener('change' , sumaCantidad);
    })

    carritoTotal();
}

function carritoTotal(){


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









