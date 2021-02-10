/*Data*/
var dataHoje = new Date();
var diaHoje = dataHoje.getDate();
var semanaHoje = dataHoje.getDay();
var dias = new Array(
    'Domingo | Dies Solis', 'Segunda-feira | Dies Lunae', 'Terça-feira | Dies Martis', 'Quarta-feira | Dies Mercurii', 'Quinta-feira | Dies Jovis', 'Sexta-feira | Dies Veneris', 'Sábado - Dies Saturnii'
);
var monName = new Array("janeiro", "fevereiro", "março", "abril", "Maio", "junho", "agosto", "outubro", "novembro", "dezembro")
    ;

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

/*Regencia planetária*/
var regencia;

if (semanaHoje = 0) {

    if (h == 0 || h == 10 || h == 17) {
        regencia = h + " Horas, hora de Saturno";
    }
    if (h == 1 || h == 11 || h == 18) {
        regencia = h + " Horas, hora de Júpiter";
    }
    if (h == 2 || h == 12 || h == 19) {
        regencia = h + " Horas, hora de Marte";
    }
    if (h == 3 || h == 6 || h == 13 || h == 20) {
        regencia = h + " Horas, hora do sol";
    }
    if (h == 4 || h == 7 || h == 14 || h == 21) {
        regencia = h + " Horas, hora de Vênus";
    }
    if (h == 5 || h == 15 || h == 22) {
        regencia = h + " Horas, hora de Mercúrio";
    }
    if (h == 9 || h == 16 || h == 23) {
        regencia = h + " Horas, hora da Lua";
    }
}

if (semanaHoje = 1) {
if (h == 0 || h == 10 || h == 17) {
    regencia = h + " Horas, hora do sol";
}
if (h == 1 || h == 11 || h == 18) {
    regencia = h + " Horas, hora de Vênus";
}
if (h == 2 || h == 12 || h == 19) {
    regencia = h + " Horas, hora de Mercúrio";
}
if (h == 3 || h == 13 || h == 20) {
    regencia = h + " Horas, hora da Lua";
}
if (h == 4 || h == 14 || h == 21) {
    regencia = h + " Horas, hora de Saturno";
}
if (h == 5 || h == 15 || h == 22) {
    regencia = h + " Horas, hora de Júpiter";
}
if (h == 9 || h == 16 || h == 23) {
    regencia = h + " Horas, hora de Marte";
}
if (semanaHoje = 2) {
if (h == 0 || h == 10 || h == 17) {
    regencia = h + " Horas, hora da Lua";
}
if (h == 1 || h == 11 || h == 18) {
    regencia = h + " Horas, hora de Saturno";
}
if (h == 2 || h == 12 || h == 19) {
    regencia = h + " Horas, hora de Júpiter";
}
if (h == 3 || h == 13 || h == 20) {
    regencia = h + " Horas, hora de Marte";
}
if (h == 4 || h == 14 || h == 21) {
    regencia = h + " Horas, hora do sol";
}
if (h == 5 || h == 15 || h == 22) {
    regencia = h + " Horas, hora de Vênus";
}
if (h == 9 || h == 16 || h == 23) {
    regencia = h + " Horas, hora de Mercúrio";
}
    }

    if (semanaHoje = 3) {
if (h == 0 || h == 10 || h == 17) {
    regencia = h + " Horas, hora de Marte";
}
if (h == 1 || h == 11 || h == 18) {
    regencia = h + " Horas, hora do sol";
}
if (h == 2 || h == 12 || h == 19) {
    regencia = h + " Horas, hora de Vênus";
}
if (h == 3 || h == 13 || h == 20) {
    regencia = h + " Horas, hora de Mercúrio";
}
if (h == 4 || h == 14 || h == 21) {
    regencia = h + " Horas, hora da Lua";
}
if (h == 5 || h == 15 || h == 22) {
    regencia = h + " Horas, hora de Saturno";
}
if (h == 9 || h == 16 || h == 23) {
    regencia = h + " Horas, hora de Júpiter";
}
    }

    if (semanaHoje = 4) {
if (h == 0 || h == 10 || h == 17) {
    regencia = h + " Horas, hora de Mercúrio";
}
if (h == 1 || h == 11 || h == 18) {
    regencia = h + " Horas, hora da Lua";
}
if (h == 2 || h == 12 || h == 19) {
    regencia = h + " Horas, hora de Saturno";
}
if (h == 3 || h == 13 || h == 20) {
    regencia = h + " Horas, hora de Júpiter";
}
if (h == 4 || h == 14 || h == 21) {
    regencia = h + " Horas, hora de Marte";
}
if (h == 5 || h == 15 || h == 22) {
    regencia = h + " Horas, hora do sol";
}
if (h == 9 || h == 16 || h == 23) {
    regencia = h + " Horas, hora de Vênus";
}
    }

    if (semanaHoje = 5) {
if (h == 0 || h == 10 || h == 17) {
    regencia = h + " Horas, hora de Júpiter";
}
if (h == 1 || h == 11 || h == 18) {
    regencia = h + " Horas, hora de Marte";
}
if (h == 2 || h == 12 || h == 19) {
    regencia = h + " Horas, hora do sol";
}
if (h == 3 || h == 13 || h == 20) {
    regencia = h + " Horas, hora de Vênus";
}
if (h == 4 || h == 14 || h == 21) {
    regencia = h + " Horas, hora de Mercúrio";
}
if (h == 5 || h == 15 || h == 22) {
    regencia = h + " Horas, hora da Lua";
}
if (h == 9 || h == 16 || h == 23) {
    regencia = h + " Horas, hora de Saturno";
}
    }

    if (semanaHoje = 6) {
if (h == 0 || h == 10 || h == 17) {
    regencia = h + " Horas, hora de Vênus";
}
if (h == 1 || h == 11 || h == 18) {
    regencia = h + " Horas, hora de Mercúrio";
}
if (h == 2 || h == 12 || h == 19) {
    regencia = h + " Horas, hora da Lua";
}
if (h == 3 || h == 13 || h == 20) {
    regencia = h + " Horas, hora de Saturno";
}
if (h == 4 || h == 14 || h == 21) {
    regencia = h + " Horas, hora de Júpiter";
}
if (h == 5 || h == 15 || h == 22) {
    regencia = h + " Horas, hora de Marte";
}
if (h == 9 || h == 16 || h == 23) {
    regencia = h + " Horas, hora do sol";
}
    }
}


document.getElementById("regencia").innerHTML ='Regência Panetária: '+ regencia;
console.log(regencia);