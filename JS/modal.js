const modalContenedor = document.querySelector(`servicio-contenedor`)
const abrirCarrito = document.getElementById(`open`)
const cerrarCarrito = document.getElementById(`cerrar`)
const modalCarrito = document.getElementById(`.modal-Carrito`)


abrirCarrito.addEventListener( `click`, ()=>{
    modalContenedor.classList.toggle(`modal-active`)
})

cerrarCarrito.addEventListener( `click`, ()=>{
    modalContenedor.classList.remove(`modal-active`)    
})

modalContenedor.addEventListener( `click`, ()=>{
    cerrarCarrito.click();    
})

modalCarrito.addEventListener( `click`, (e)=>{
    e.stopPropagation();
})