//Algoritmo utilizando un ciclo

/*for (let i = 1; i < 5; i++){
    let servicios = prompt('Bienvenidos a BAJOPerflims! Con que servicios te podemos ayudar');

    if(i === 4){
        mensaje = alert`Llegaste al tope mensual de servicios que podemos cubrir. Gracias por confiar en nosotros, BAJOPerflims!`;
        break;

    } 

    let mensaje = `Servicio ${i} Nombre: ${servicios}`;
    alert(mensaje);


}*/

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