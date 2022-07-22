import { servicio } from "./stock.js";

let carritoDeCompras = []

export const carritoIndex = (servicioId)=>{

    const contenedorCarrito = document.getElementById("servicio-contenedor")

    const renderserviciosCarrito = ()=>{

    let servicio = servicio.find( servicio => servicio.id == servicioId)
    carritoDeCompras.push(servicio)
        
    servicio.cantidad = 1;

    let div = document.createElement('div')

    div.classList.add('servicioCarrito')
    div.innerHTML = `
        <p>${servicio.nombre}</p>
        <p>Precio:$ ${servicio.precio}</p>
        <p id="cantidad${servicio.id}">Cantidad: ${servicio.cantidad}</p>
        <button id="eliminar${servicio.id}"class="boton-eliminar" ></button>
    
                    `
    contenedorCarrito.appendChild (div)

    }
    renderserviciosCarrito

}
