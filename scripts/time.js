/*Data*/
var dataHoje = new Date();
var diaHoje = dataHoje.getDate();
var semanaHoje = dataHoje.getDay();
var dias = new Array(
    'Domingo | Dies Solis', 'Segunda-feira | Dies Lunae', 'Terça-feira | Dies Martis', 'Quarta-feira | Dies Mercurii', 'Quinta-feira | Dies Jovis', 'Sexta-feira | Dies Veneris', 'Sábado - Dies Saturnii'
);
var monName = new Array("janeiro", "fevereiro", "março", "abril", "Maio", "junho", "agosto", "outubro", "novembro", "dezembro")
    ;

if (diaHoje < 10) {
    diaHoje = "0" + diaHoje;
}

document.getElementById("data").innerHTML = dias[dataHoje.getDay()] + ", " + diaHoje + " de " + monName[dataHoje.getMonth()] + " de " + dataHoje.getFullYear() + ". ";

/*Horas*/
h = dataHoje.getHours();
m = dataHoje.getMinutes();
s = dataHoje.getSeconds();
if (h < 10) {
    h = "0" + h;
}
if (m < 10) {
    m = "0" + m;
}
if (s < 10) {
    s = "0" + s;
}
document.getElementById('hora').innerHTML = h + ":" + m + ":" + s;