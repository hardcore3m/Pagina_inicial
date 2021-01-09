/*Datas e horas*/
var data = new Date();

/*Dias da semana*/
var dias = new Array(
    'Domingo | Dies Solis', 'Segunda-feira | Dies Lunae', 'Terça-feira | Dies Martis', 'Quarta-feira | Dies Mercurii', 'Quinta-feira | Dies Jovis', 'Sexta-feira | Dies Veneris', 'Sábado - Dies Saturnii'
);

/*Mes Extenso*/
var monName = new Array("janeiro", "fevereiro", "março", "abril", "Maio", "junho", "agosto", "outubro", "novembro", "dezembro")

document.getElementById("data").innerHTML = dias[data.getDay()] + ", " + data.getDate() + " de " + monName[data.getMonth()] + " de " + data.getFullYear() + ". ";

/*Horas*/
function tempo() {
    h = data.getHours();
    m = data.getMinutes();
    s = data.getSeconds();
    document.getElementById('hora').innerHTML = h + ":" + m + ":" + s;
    setTimeout('tempo()', 500);
}

/*Regencia planetária*/
var day;
// switch (new Date().getDay()) {
//     case 0:
// switch (new Date().getHours()) {
//     case 0 || 10 || 17:
//         day = "Hora de Saturno";
//         break;
//     case 1 || 11 || 18:
//         day = "Hora de Júpiter";
//         break;
//     case 2 || 12 || 19:
//         day = "Hora de Marte";
//         break;
//     case 3 || 6 || 13 || 20:
//         day = "Hora do sol";
//         break;
//     case 4 || 7 || 14 || 21:
//         day = "Hora de Vênus";
//         break;
//     case 5 || 15 || 22:
//         day = "Hora de Mercúrio";
//         break;
//     case 9 || 16 || 23:
//         day = "Hora da Lua";
//         break;
// }
// break;
// case 1:
//     switch (new Date().getHours()) {
//         case 0 || 10 || 17:
//             day = "Hora do sol";
//             break;
//         case 1 || 11 || 18:
//             day = "Hora de Vênus";
//             break;
//         case 2 || 12 || 19:
//             day = "Hora de Mercúrio";
//             break;
//         case 3 || 6 || 13 || 20:
//             day = "Hora da Lua";
//             break;
//         case 4 || 14 || 21:
//             day = "Hora de Saturno";
//             break;
//         case 5 || 15 || 22:
//             day = "Hora de Júpiter";
//             break;
//         case 9 || 16 || 23:
//             day = "Hora de Marte";
//             break;
//     }    break;
// case 2:
//     switch (new Date().getHours()) {
//         case 0 || 10 || 17:
//             day = "Hora da Lua";
//             break;
//         case 1 || 11 || 18:
//             day = "Hora de Saturno";
//             break;
//         case 2 || 12 || 19:
//             day = "Hora de Júpiter";
//             break;
//         case 3 || 6 || 13 || 20:
//             day = "Hora de Marte";
//             break;
//         case 4 || 14 || 21:
//             day = "Hora do sol";
//             break;
//         case 5 || 15 || 22:
//             day = "Hora de Vênus";
//             break;
//         case 9 || 16 || 23:
//             day = "Hora de Mercúrio";
//             break;
//     }
//     break;
// case 3:
//     switch (new Date().getHours()) {
//         case 0 || 10 || 17:
//             day = "Hora de Marte";
//             break;
//         case 1 || 11 || 18:
//             day = "Hora do sol";
//             break;
//         case 2 || 12 || 19:
//             day = "Hora de Vênus";
//             break;
//         case 3 || 6 || 13 || 20:
//             day = "Hora de Mercúrio";
//             break;
//         case 4 || 14 || 21:
//             day = "Hora da Lua";
//             break;
//         case 5 || 15 || 22:
//             day = "Hora de Saturno";
//             break;
//         case 16 || 23:
//             day = "Hora de Júpiter";
//             break;
//     }
// case 4:
//     switch (new Date().getHours()) {
//         case 0 || 10 || 17:
//             day = "Hora de Mercúrio";
//             break;
//         case 1 || 11 || 18:
//             day = "Hora da Lua";
//             break;
//         case 2 || 12 || 19:
//             day = "Hora de Saturno";
//             break;
//         case 3 || 6 || 13 || 20:
//             day = "Hora de Júpiter";
//             break;
//         case 4 || 14 || 21:
//             day = "Hora de Marte";
//             break;
//         case 5 || 15 || 22:
//             day = "Hora do sol";
//             break;
//         case 9 || 16 || 23:
//             day = "Hora de Vênus";
//             break;
//     }
//     break;
// case 5:
//     switch (new Date().getHours()) {
//         case 0 || 10 || 17:
//             day = "Hora de Júpiter";
//             break;
//         case 1 || 11 || 18:
//             day = "Hora de Marte";
//             break;
//         case 2 || 12 || 19:
//             day = "Hora do sol";
//             break;
//         case 3 || 6 || 13 || 20:
//             day = "Hora de Vênus";
//             break;
//         case 4 || 14 || 21:
//             day = "Hora de Mercúrio";
//             break;
//         case 5 || 15 || 22:
//             day = "Hora da Lua";
//             break;
//         case 9 || 16 || 23:
//             day = "Hora de Saturno";
//             break;
//     }
//     break;
// case 6:
//     switch (new Date().getHours()) {
//         case 0 || 10 || 17:
//             day = "Hora de Vênus";
//             break;
//         case 1 || 11 || 18:
//             day = "Hora de Mercúrio";
//             break;
//         case 2 || 12 || 19:
//             day = "Hora da Lua";
//             break;
//         case 3 || 6 || 13 || 20:
//             day = "Hora de Saturno";
//             break;
//         case 4 || 14 || 21:
//             day = "Hora de Júpiter";
//             break;
//         case 5 || 15 || 22:
//             day = "Hora de Marte";
//             break;
//         case 9 || 16 || 23:
//             day = "Hora do sol";
//             break;
//     }
//         break;
// }

day = "CONSERTAR REGÊNCIA!";

document.getElementById("regencia").innerHTML = day;
/*menu*/
var estudos = document.getElementById('estudos').innerHTML;
var docs = document.getElementById('docs').innerHTML;
var templates = document.getElementById('templates').innerHTML;
var magick = document.getElementById('magick').innerHTML;
var atalhos = document.getElementById('atalhos').innerHTML;
var outros = document.getElementById('outros').innerHTML;
function selecionar(qualBotao) {
    switch (qualBotao) {
        case '1':
            document.getElementById("botaoSelecionado").innerHTML = estudos;
            break;
        case '2':
            document.getElementById("botaoSelecionado").innerHTML = docs;
            break;
        case '3':
            document.getElementById("botaoSelecionado").innerHTML = templates;
            break;
        case '4':
            document.getElementById("botaoSelecionado").innerHTML = magick;
            break;
        case '5':
            document.getElementById("botaoSelecionado").innerHTML = atalhos;
            break;
        case '6':
            document.getElementById("botaoSelecionado").innerHTML = outros;
            break;
        default:
            document.getElementById("botaoSelecionado").innerHTML = "erro";
    }
}