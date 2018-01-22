//Esta función calcula la fórmula mediante la cual obtenemos la cuota mensual de la hipoteca en cuestión
function calculohipoteca() {
    //Declaración de variables; los valores los obtenemos de los campos introducidos en el html; por ello los llamamos por DOM
    var capital = document.getElementById("capital").value;
    var interes = document.getElementById("interes").value;
    var plazo = document.getElementById("plazo").value;
    var interesmensual = interes/12;

    //Fórmula en cuestión
    // - La función Math.round redondea a dos decimales
    // - La función Math.pow eleva
    var cuota = Math.round(capital*interesmensual/(100*(1-Math.pow(1+interesmensual/100,-plazo)))*100)/100;
   
    //El resultado que se imprime en el HTML se obtiene a través de este DOM
    document.getElementById("resultado").innerHTML = "La cuota mensual de tu hipoteca es: "+cuota+" euros";
    return false;
}



