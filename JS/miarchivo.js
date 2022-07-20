//Algoritmo utilizando un ciclo

/*for (let i = 1; i < 5; i++){
    let servicios = prompt('Bienvenidos a BAJOPerflims! Con que servicios te podemos ayudar');

    if(i === 4){
        mensaje = alert`Llegaste al tope mensual de servicios que podemos cubrir. Gracias por confiar en nosotros, BAJOPerflims!`;
        break;

    } 

    let mensaje = `Servicio ${i} Nombre: ${servicios}`;
    alert(mensaje);


}

//Simulador interactivo de compra de servicios

function calcularPrecio (precioServicio, cantidadServicio, porcentajeDescuento) {
    let descuento = (precioServicio
         * porcentajeDescuento) / 100;
    let precioConDescuento = precioServicio - descuento;
    return (precioConDescuento * cantidadServicio);
}

let servicio = parseFloat(prompt("Bienvenidos a BAJOPerflims! Ingrese el precio del servicio que desea adquirir"));
let cantidad = parseInt(prompt("Ingrese la cantidad de unidades que desea comprar de ese servicio"));
let descuento = parseInt(prompt("Ingresa tu cupón de descuento"))


let precioFinal = calcularPrecio(servicio, cantidad, descuento);
alert("El precio total de tu compra es de $" + precioFinal);
alert("¡Gracias por confiar en BAJOPerflims!");



class Servicio {
    constructor(nombre, id, precio) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
    }
}

const PromoArtistica = [];
const ProdAudiovisual = [];
const Booking = [];
const ProdMusical = [];

PromoArtistica.push(new Servicio("Imagen", 1, 1999));
PromoArtistica.push(new Servicio("Imagen + Redes Sociales", 2, 4000));
PromoArtistica.push(new Servicio("Imagen + Redes Sociales + Marketing", 3, 9000));

ProdAudiovisual.push(new Servicio("1 videoclip", 4, 4999));
ProdAudiovisual.push(new Servicio("2 videoclips", 5, 8999));
ProdAudiovisual.push(new Servicio("3 videoclips", 6, 12000));

Booking.push(new Servicio("1 evento", 7, 2499));
Booking.push(new Servicio("2 eventos", 8, 4999));
Booking.push(new Servicio("4 eventos", 9, 10000));

ProdMusical.push(new Servicio("Single", 10, 1999));
ProdMusical.push(new Servicio("EP", 11, 4999));
ProdMusical.push(new Servicio("Album", 12, 9999));

for (const PromoArtistica of PromoArtisticas) {
    alert("ID (" + PromoArtistica.id + ") - " + PromoArtistica.nombre);
}
for (const ProdAudiovisual of ProdAudiovisuales) {
    alert("ID (" + ProdAudiovisual.id + ") - " + ProdAudiovisual.nombre);
}
for (const Booking of Bookings) {
    alert("ID (" + Booking.id + ") - " + Booking.nombre);
}
for (const ProdMusical of ProdMusicales) {
    alert("ID (" + ProdMusical.id + ") - " + ProdMusical.nombre);
}

let servicioSeleccionado = parseInt(prompt("Ingrese el ID del servicio que desea comprar:"));

const PromoArtisticaBuscada = PromoArtistica.find(PromoArtistica => PromoArtistica.id === servicioSeleccionado);
const ProdAudiovisualBuscada = ProdAudiovisual.find(ProdAudiovisual => ProdAudiovisual.id == servicioSeleccionado);
const BookingBuscado = Booking.find(Booking => Booking.id == servicioSeleccionado);
const ProdMusicalBuscada = ProdMusical.find(ProdMusical => ProdMusical.id == servicioSeleccionado);

if (servicioSeleccionado <= 0) {
    alert("Ingresa un ID valido");
} else if (servicioSeleccionado <=3) {
    alert("Seleccionaste " +  PromoArtisticaBuscada.nombre + "\nToca aceptar para agregarlo a tu carrito"); 
} else if (servicioSeleccionado <=6) {
    alert("Seleccionaste " + ProdAudiovisualBuscada.nombre + "\nToca aceptar para agregarlo a tu carrito");
} else if (servicioSeleccionado <= 9) {
    alert("Seleccionaste " + BookingBuscado.nombre + "\nToca aceptar para agregarlo a tu carrito");
} else if (servicioSeleccionado <= 12) {
    alert("Seleccionaste " + ProdMusicalBuscada.nombre + "\nToca aceptar para agregarlo a tu carrito");
} else {

    alert("Ingresa un ID valido");
}




class Servicio {
    constructor(nombre, id, precio, stock) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.stock = stock;
    }

    vender(cantidad) {
        this.stock = this.stock - cantidad;
    }
}


const artistica = [];
const audiovisual = [];
const booking = [];
const musical = [];


artistica.push(new Servicio("Imagen", 1, 1999, 1));
artistica.push(new Servicio("Imagen + Redes Sociales", 2, 4000, 1));
artistica.push(new Servicio("Imagen + Redes Sociales + Marketing", 3, 9000, 1));

audiovisual.push(new Servicio("1 videoclip", 4, 4999, 1));
audiovisual.push(new Servicio("2 videoclips", 5, 8999, 2));
audiovisual.push(new Servicio("3 videoclips", 6, 12000, 3));

booking.push(new Servicio("1 evento", 7, 2499, 1));
booking.push(new Servicio("2 eventos", 8, 4999, 2));
booking.push(new Servicio("4 eventos", 9, 10000, 4));

musical.push(new Servicio("Single", 10, 1999, 1));
musical.push(new Servicio("EP", 11, 4999, 4));
musical.push(new Servicio("Album", 12, 9999, 10));



for (const artistica of artisticas) {
    alert("ID (" + artistica.id + ") - " + artistica.nombre);
}
for (const audiovisual of audiovisuales) {
    alert("ID (" + audiovisual.id + ") - " + audiovisual.nombre);
}
for (const booking of bookings) {
    alert("ID (" + booking.id + ") - " + booking.nombre);
}
for (const musical of musicales) {
    alert("ID (" + musical.id + ") - " + musical.nombre);
}


function calcularPrecio(precioServicio, cantidadServicio) {
    return ((precioServicio * 1.21) * cantidadServicio);
}

let servicioSeleccionado = parseInt(prompt("Ingrese el ID del servicio que desea comprar:"));
const artisticaBuscada = artisticas.find(artistica => artistica.id === servicioSeleccionado);
const audiovisualBuscado = audiovisuales.find(audiovisual => audiovisual.id === servicioSeleccionado);
const bookingBuscado = bookings.find(booking => booking.id === servicioSeleccionado);
const musicalBuscado = musicales.find(musical => musical.id === servicioSeleccionado);


let cantidad = parseInt(prompt("Ingrese la cantidad de servicios que quiere comprar del producto seleccionado:"));


if (servicioSeleccionado <= 0) {
    alert("Ingresa un ID valido");
} else if (servicioSeleccionado <= 3) {
    alert("El precio final de tu compra es: $" + calcularPrecio(artisticaBuscada.precio, cantidad));
    alert("¡Gracias por confiar en BAJOPerflims!")
    artisticaBuscada.vender(cantidad);
} else if (servicioSeleccionado <= 6) {
    alert("El precio final de tu compra es: $" + calcularPrecio(audiovisualBuscado.precio, cantidad));
    alert("¡Gracias por confiar en BAJOPerflims!")
    audiovisualBuscado.vender(cantidad);
} else if (servicioSeleccionado <= 9) {
    alert("El precio final de tu compra es: $" + calcularPrecio(bookingBuscado.precio, cantidad));
    alert("¡Gracias por confiar en BAJOPerflims!")
    bookingBuscado.vender(cantidad);
} else if (servicioSeleccionado <= 9) {
    alert("El precio final de tu compra es: $" + calcularPrecio(musicalBuscado.precio, cantidad));
    alert("¡Gracias por confiar en BAJOPerflims!")
    musicalBuscado.vender(cantidad);
} else {
    alert("Ingresa un ID valido");
}

*/

