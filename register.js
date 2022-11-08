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
                        footer: '<a href="html/login.html">Inicia sesion con ese correo</a>'
                        
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
                    setTimeout(function(){ location.replace('/html/login.html') }, 5000);
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



const btn_registro = document.getElementById("registerValidation");

btn_registro.addEventListener('click' , registro_usuario);
