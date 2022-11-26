let arreglo_usuarios = [];


function validar_usuario(){
    
    let nombre_usuario = document.getElementById('nombreUsuario');
    let contrasena_usuario = document.getElementById('contrasenaUsuario');

    let recuperando_arreglo = localStorage.getItem("usuarios");
    recuperando_arreglo = JSON.parse(recuperando_arreglo);

    
    for(let usuario of recuperando_arreglo){
        
        
        if(nombre_usuario.value == usuario.nombre && contrasena_usuario.value == usuario.contrasena){

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
                title: 'iniciaste sesion correctamente.'
            })
            setTimeout(function(){ location.replace('../html/products.html') }, 5000);
            break
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


const btn_ingresar = document.getElementById("loginValidation");

btn_ingresar.addEventListener('click' , validar_usuario);