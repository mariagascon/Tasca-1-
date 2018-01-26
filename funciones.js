
//Esta función calcula la fórmula mediante la cual obtenemos la cuota mensual de la hipoteca en cuestión
function calculohipoteca() {
    //Declaración de variables; los valores los obtenemos de los campos introducidos en el html; por ello los llamamos 
    //por DOM
    var capital = document.getElementById("capital").value;
    var interes = document.getElementById("interes").value;
    var plazo = document.getElementById("plazo").value;
    var interesmensual = interes/12;

    //Condición que comprueba que el usuario introduzca únicamente el primer día de cada mes. En caso de que no sea así,
    //resetea la página y le obliga a introducir una nueva fecha
    if (comprobardia()==true) {
        //Fórmula en cuestión
        // - La función Math.round redondea a dos decimales
        // - La función Math.pow eleva
        var cuota = Math.round(capital*interesmensual/(100*(1-Math.pow(1+interesmensual/100,-plazo)))*100)/100;
    } else {
        window.alert("Debe introducir el primer día de cada mes");
        return null;
    }
    
    //El resultado que se imprime en el HTML se obtiene a través de este DOM. En él introducimos los dos métodos:
    //'cuota' y 'fechameses'
    document.getElementById("resultado").innerHTML = "La cuota mensual de tu hipoteca es de "+cuota+" euros y deberás abonar el último pago el "+fechameses();
    return false;
}

//Esta función suma a la fecha inicial los plazos introducidos de manera que devuelve la fecha en que el pago de la 
//hipoteca finalizará
function fechameses() {
    var fecha = document.getElementById("fecha").value;
    var plazo = parseInt(document.getElementById("plazo").value);

    //Será necesario convertir la variable fecha a Date ya que sino devuelve un String y el método no devuelve una fecha.
    //Utilizaremos un parseInt en la variable plazo para asegurarnos que nos devuelve un número que pueda sumarse a la 
    //fecha
    fecha = new Date(fecha);
    fecha.setMonth(fecha.getMonth()+plazo);  //Al mes de la fecha le suma el número que obtiene en el campo plazo
    var fechafinal = fecha.toLocaleString();  //El formato Date devuelve el día, el mes, el año, la hora (con minutos
                                           //y segundos) y la zona horaria. Utilizando el método 'toDateString' sólo
                                          //nos quedamos con el día, el mes y el año. 
    return fechafinal;
    
}

//Esta función comprueba que la fecha introducida sólo pueda contener el primer día del mes
function comprobardia() {
    var dia = new Date(document.getElementById("fecha").value);
    if (dia.getDate()!=01) {
        console.log("Día no válido");
        return false;
    }
    return true;
}