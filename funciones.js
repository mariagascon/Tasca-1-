function calculohipoteca() {
    var capital = document.getElementById("cap").value;
    var interes = document.getElementById("int").value;
    var plazo = document.getElementById("pla").value;
    var interesmensual = interes/12;

    var cuota = capital*interesmensual/(100*(1-Math.pow(1+interesmensual/100,-plazo)));
    console.log(cuota);
    return cuota;

    document.getElementById("resultado").innerHTML = "La cuota mensual de tu hipoteca es: "+cuota+" euros";
}


