
const propina_html = document.getElementById("propina");
const monto_total_html = document.getElementById("total");

function calcular_propina(){
    let monto_cobrado = parseFloat(document.getElementById("monto-cobrado").value);
    let porcentaje_a_pagar =parseFloat(document.getElementById("porcentaje").value);

    let propina = monto_cobrado * porcentaje_a_pagar;
    propina = propina / 100;
    return propina;
}
function calcular_total(){
    let monto_cobrado = parseFloat(document.getElementById("monto-cobrado").value);

    let total = monto_cobrado + calcular_propina();
    return total;
}
function calcular(){
    propina_html.innerHTML = `Propina: $${calcular_propina()}`
    monto_total_html.innerHTML = `Total a pagar: $${calcular_total()}`

}