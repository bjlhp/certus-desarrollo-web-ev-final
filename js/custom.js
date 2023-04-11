/* Obetener referencia a todos los botones */
let botones = window.document.querySelectorAll("#catalogo > article > button");

/* Agregar el escucha del evento Clic, ejectuar metodo */
botones.forEach(Element => {
    Element.addEventListener("click", agregarCarrito);
})

/* Metodo para agregar el producto al carrito */
function agregarCarrito(producto){
    /* Consegui los datos de mi producto */
    let tituloProducto = producto.target.parentElement.querySelector("h3");
    let precioProducto = producto.target.parentElement.querySelector("p");
    let imagenProducto = producto.target.parentElement.querySelector("picture");

    /* Ahora colocar en el modal */
    let modalCuerpo = document.querySelector("#ventanaCarrito > div > div > div.modal-body");

    /* Condicional para saber si esta vacio */
    if(modalCuerpo.querySelector("p").innerHTML == "Su carrito esta actualmente vacio."){
        modalCuerpo.innerHTML = "";
    }
    modalCuerpo.innerHTML += "<h3>"+tituloProducto.innerHTML+"</h3><p>"+precioProducto.innerHTML+"</p>";

    /* Avisar que se agrego al carrito */
    alert("Se agrego correctamente el producto")
}