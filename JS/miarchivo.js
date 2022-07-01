for (let i = 1; i < 5; i++){
    let servicios = prompt('Con que servicios te podemos ayudar');

    if(i === 3){
        mensaje = alert`Gracias, llegaste al tope mensual de servicios que podemos cubrir.`;
        break;
    }

    let mensaje = `Servicio ${i} Nombre: ${servicios}`;
    alert(mensaje);


}