/* Objeto Windows. Metodo alert () */
window.alert("Hola! Bienvenido a este sitio");

/* Declarando una variable - Creando una cajita de datos */
let itemMensaje;

/* Asignar valor a la variable itemMensaje */
itemMensaje = window.document.getElementById("Mensaje");

/* Declarar y asignar valor ene una variable */
let txtNombre = window.prompt("Ingrese su nombre");

/* Reemplazar el texto del primer parrafo */

itemMensaje.innerHTML = "Bienvenido " + txtNombre + " a este sitio web!";

/* Colocar nuevo contenedor */
document.write("<p>Pagina elaborada por BJLRP</p>")

/* Mensajes en la consola - solo para desarrolladores */
console.log("Terminó todo el script.")