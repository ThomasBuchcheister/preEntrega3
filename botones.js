//Toggle Carrito

let btn_carrito = document.getElementById('mostrarCarrito');

btn_carrito.addEventListener('click', function(){

    let mostrarCarrito = document.getElementById('carritoContainer');
    


    if(carritoContainer.style.display != "none"){
        
        carritoContainer.style.display = "none";
    }
    else{
        carritoContainer.style.display = "flex";
        
    }



})


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

//toggle menu

let btn_menu = document.getElementById('mostrarMenu');

btn_menu.addEventListener('click', function(){

    let menu = document.getElementById('menu');

    if(menu.style.display != "none"){

        menu.style.display = "none";
    }
    else{
        menu.style.display = "flex";
    }

})


//