import { servicios } from "./stock.js"
import { carritoIndex } from "./carritoIndex.js"

const mostrarServicios = (servicios) =>{
    const contenedorServicios = document.getElementById("servicio-contenedor")

    servicios.forEach( servicio => {
        const div = document.createElement("div")
        div.classList.add("box_uno")
        div.innerHTML += `
            <div class="box_uno">
                <div>
                    <h5>${servicio.nombre}</h5>
                    <p>Descripcion: ${servicio.desc}</p>
                    <p>Precio:$ ${servicio.precio}</p>
                    <button class="btn btn-primary" id=boton${servicio.id}>Comprar</button>
                </div>
            </div>
        
        `
    contenedorServicios.appendChild(div)

    const boton = document.getElementById(`boton${servicio.id}`)

    boton.addEventListener( 'click', ()=> {
        carritoIndex(producto.id)
        alert(`Se agrego $(servicio.nombre)`)

    })
    
    })

}

mostrarServicios(servicios)
