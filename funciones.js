function calculohipoteca(capital, interes, plazo) {
    var interesmensual = interes/12;
    var cuota = capital*interesmensual/100*(1-(1+(interesmensual/100)-plazo));
    console.log(cuota);
    return cuota;
}