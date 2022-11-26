
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

    fetch("envio.json")
        .then(response=>response.json())
        .then(data=>{

            let envio = data[0].envio

            let total = 0
             const totalCarrito = document.querySelector('.totalCarrito')
            carrito.forEach((item) =>{
            const precio = Number(item.precio.replace("$", ''))
            total = total + precio*item.cantidad + envio
            
            })

            totalCarrito.innerHTML = `Total + Envio $${total}`
            addLocalStorage();
        })

    

}

function borrarItemsCarrito(e){
    const buttonDelete = e.target;
    const padre = buttonDelete.closest(".itemCarrito");
    const titulo = padre.querySelector('.nombreCarrito').textContent
    for(let i=0; i<carrito.length; i++){
        if(carrito[i].titulo.trim() === titulo.trim()){
            carrito.splice(i, 1)
        }
    }
    padre.remove();
    carritoTotal();
    
}

function sumaCantidad(e){
    const sumaInput = e.target
    const tr = sumaInput.closest('.itemCarrito')
    const titulo = tr.querySelector('.nombreCarrito').textContent;
    carrito.forEach(item => {
        if(item.titulo.trim() === titulo){
            sumaInput.value < 1 ?   (sumaInput.value = 1) : sumaInput.value;
            item.cantidad = sumaInput.value;
            carritoTotal();
        }
    })

}

function addLocalStorage(){
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

window.onload = function(){
    const storage = JSON.parse(localStorage.getItem('carrito'));
    if(storage){
        carrito = storage;
        renderCarrito();
    }

}