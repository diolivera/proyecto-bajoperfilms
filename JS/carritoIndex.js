let carrito = [];
let sectionServicios = document.getElementById("section-servicios");
let sectionCarrito = document.getElementById("section-carrito");

//creacion de la seccion carrito con DOM
let totalCompra = document.createElement("div");
totalCompra.innerHTML = "<h2>Total: $</h2>";
sectionCarrito.appendChild(totalCompra);

let montoTotalCompra = document.createElement("h2");
montoTotalCompra.innerText = "0";
totalCompra.appendChild(montoTotalCompra);

let cantidadServicios = document.createElement("div");
cantidadServicios.innerHTML = "<h3>Cantidad de servicios: </h3>";
sectionCarrito.appendChild(cantidadServicios);

let cantServicios = document.createElement("h3");
cantServicios.innerText = " 0";
cantidadServicios.appendChild(cantServicios);

let botonFinalizar = document.createElement("button");
botonFinalizar.innerText = "Finalizar compra";
sectionCarrito.appendChild(botonFinalizar);
botonFinalizar.setAttribute("class", "boton");

//Le agrego un evento al boton para que muestre el precio final y despues se vacie el carrito
botonFinalizar.onclick = () => {
    const precioFinal = montoTotalCompra.innerText;
    alert("Total a abonar: $" + precioFinal);
    vaciarCarrito();
}

//Renderizado de los servicio en cards
for (const servicio of servicios) {
    let container = document.createElement("div");
    container.setAttribute("class", "card-servicio");
    container.innerHTML = ` <div class="img-container">
                            <img src="${servicio.foto}" alt="${servicio.nombre}" class="img-servicio"/>
                            </div>
                            <div class="info-servicio">
                            <p class="font">${servicio.nombre}</p>
                            <strong class="font">$${servicio.precio}</strong>
                            <button class="boton" id="${servicio.id}"> Agregar al carrito </button>
                            </div>`;
    sectionServicios.appendChild(container);
    //Evento para que los servicio se agreguen al carrito al hacer click en el boton
    document.getElementById(`${servicio.id}`).onclick = () => agregarAlCarrito(`${servicio.id}`);
}

//Funciones
function agregarAlCarrito(id) {
    carrito.push(servicios.find(p => p.id == id));
    localStorage.setItem("carrito", JSON.stringify(carrito));
    calcularTotalCarrito();
}

function calcularTotalCarrito() {
    let total = 0;
    for (const servicio of carrito) {
        total += servicio.precio;
    }
    montoTotalCompra.innerText = total;
    cantServicios.innerText = carrito.length;
}

function vaciarCarrito() {
    montoTotalCompra.innerText = "0";
    cantServicios.innerText = "0";
    localStorage.clear();
    carrito=[];
}