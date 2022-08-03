let carrito = cargarCarrito();

let serviciosJSON = [];

let cantidadTotalCompra = carrito.length;


$(document).ready(function () {
  $("#cantidad-compra").text(cantidadTotalCompra);

  $("#btn-finalizar").on('click', function () {
 
    Swal.fire({
      title: '¿Seguro que queres finalizar tu compra?',
      text: `Total a abonar: $${calcularTotalCarrito()}`,
      showCancelButton: true,
      confirmButtonColor: '#008f39',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Compra confirmada',
          '¡Que lo disfrutes, Bajo Perfilms!',
          'success'
        )
        vaciarCarrito();
      }
    })
  });

  $("#seleccion option[value='pordefecto']").attr("selected", true);
  $("#seleccion").on("change", ordenarServicios);

  $("#gastoTotal").html(`Total: $ ${calcularTotalCarrito()}`);
  obtenerJSON();
  renderizarServicios();
  mostrarEnTabla();
});

function renderizarServicios() {
  for (const servicios of serviciosJSON) {
    $("#section-servicios").append(`<div class="card-servicios"> 
                                    <div class="img-container">
                                    <img src="${servicio.foto}" alt="${servicio.nombre}" class="img-servicio"/>
                                    </div>
                                    <div class="info-servicio">
                                    <p class="font">${servicio.nombre}</p>
                                    <strong class="font">$${servicio.precio}</strong>
                                    <button class="botones" id="btn${servicio.id}"> Agregar al carrito </button>
                                    </div>
                                    </div>`);

    $(`#btn${servicio.id}`).on('click', function () {
      agregarAlCarrito(servicio);
      $(`#btn${servicio.id}`).fadeOut(200).fadeIn(200);
    });
  }
};

function obtenerJSON() {
  $.getJSON("./json/servicios.json", function (respuesta, estado) {
    if (estado == "success") {
        serviciosJSON = respuesta;
      renderizarServicios();
    }
  });
}

function ordenarServicios() {
  let seleccion = $("#seleccion").val();
  if (seleccion == "menor") {
    serviciosJSON.sort(function (a, b) {
      return a.precio - b.precio
    });
  } else if (seleccion == "mayor") {
    serviciosJSON.sort(function (a, b) {
      return b.precio - a.precio
    });
  } else if (seleccion == "alfabetico") {
    serviciosJSON.sort(function (a, b) {
      return a.nombre.localeCompare(b.nombre);
    });
  }
  $(".card-servicios").remove();
  renderizarServicios();
}

class ServicioCarrito {
  constructor(prod) {
    this.id = prod.id;
    this.foto = prod.foto;
    this.nombre = prod.nombre;
    this.precio = prod.precio;
    this.cantidad = 1;
  }
}

function agregarAlCarrito(servicioAgregado) {
  let encontrado = carrito.find(p => p.id == servicioAgregado.id);
  if (encontrado == undefined) {
    let servicioEnCarrito = new ServicioCarrito(servicioAgregado);
    carrito.push(servicioEnCarrito);
    Swal.fire(
      'Nuevo servicio agregado al carrito',
      servicioAgregado.nombre,
      'success'
    );

    $("#tablabody").append(`<tr id='fila${servicioEnCarrito.id}' class='tabla-carrito'>
                            <td> ${servicioEnCarrito.nombre}</td>
                            <td id='${servicioEnCarrito.id}'> ${servicioEnCarrito.cantidad}</td>
                            <td> ${servicioEnCarrito.precio}</td>
                            <td><button class='btn btn-light' id="btn-eliminar-${servicioEnCarrito.id}">🗑️</button></td>
                            </tr>`);

  } else {
    let posicion = carrito.findIndex(p => p.id == servicioAgregado.id);
    carrito[posicion].cantidad += 1;
    $(`#${servicioAgregado.id}`).html(carrito[posicion].cantidad);
  }

  $("#gastoTotal").html(`Total: $ ${calcularTotalCarrito()}`);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarEnTabla();
}

function mostrarEnTabla() {
  $("#tablabody").empty();
  for (const serv of carrito) {
    $("#tablabody").append(`<tr id='fila${serv.id}' class='tabla-carrito'>
                            <td> ${serv.nombre}</td>
                            <td id='${serv.id}'> ${serv.cantidad}</td>
                            <td> ${serv.precio}</td>
                            <td><button class='btn btn-light' id="eliminar${serv.id}">🗑️</button></td>
                            </tr>`);

    $(`#eliminar${serv.id}`).click(function () {
      let eliminado = carrito.findIndex(p => p.id == serv.id);
      carrito.splice(eliminado, 1);
      console.log(eliminado);
      $(`#fila${serv.id}`).remove();
      $("#gastoTotal").html(`Total: $ ${calcularTotalCarrito()}`);
      localStorage.setItem("carrito", JSON.stringify(carrito));
    })
  }
};

function calcularTotalCarrito() {
  let total = 0;
  for (const servicio of carrito) {
    total += servicio.precio * servicio.cantidad;
  }
  $("#montoTotalCompra").text(total);
  $("#cantidad-compra").text(carrito.length);
  return total;
}

function vaciarCarrito() {
  $("#gastoTotal").text("Total: $0");
  $("#cantidad-compra").text("0");
  $(".tabla-carrito").remove();
  localStorage.clear();
  carrito = [];
}

function cargarCarrito() {
  let carrito = JSON.parse(localStorage.getItem("carrito"));
  if (carrito == null) {
    return [];
  } else {
    return carrito;
  }
}