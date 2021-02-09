
var hoje = new Date();
var semana = new Array(
    'Domingo | Dies Solis', 'Segunda-feira | Dies Lunae', 'Terça-feira | Dies Martis', 'Quarta-feira | Dies Mercurii', 'Quinta-feira | Dies Jovis', 'Sexta-feira | Dies Veneris', 'Sábado - Dies Saturnii'
);
var mesNome = new Array('janeiro', 'fevereiro', 'março', 'abril', 'Maio', 'junho', 'agosto', 'outubro', 'novembro', 'dezembro')
diaSem = hoje.getDay();
dia = hoje.getDate();
mes = hoje.getMonth();
ano = hoje.getFullYear();
hora = hoje.getHours();
min = hoje.getMinutes();
seg = hoje.getSeconds();
if (hora < 10) {
    hora = "0" + hora;
}
if (min < 10) {
    min = "0" + min;
}
if (seg < 10) {
    seg = "0" + seg;
}


/*Relógio */
function relogio(){
setInterval(function () {
    relogio = hora + ':' + min + ':' + seg;
    // document.getElementById('relogio').innerHTML = relogio;

}, 1000);
}
console.log(semana[diaSem] + ", " + hoje.getDate() + " de " + mesNome[mes] + " de " + hoje.getFullYear() + ". ");
console.log(hora + ':' + min + ":" + seg);
console.log(mesNome);
console.log(relogio());