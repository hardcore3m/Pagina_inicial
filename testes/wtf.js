var target_date = new Date("february 06, 2021").getTime();
        var dias, horas, minutos, segundos;

        setInterval(function () {

            var current_date = new Date().getTime();
            var segundos_f = (target_date - current_date) / 1000;

            dias = parseInt(segundos_f / 86400);
            segundos_f = segundos_f % 86400;

            horas = parseInt(segundos_f / 3600);
            segundos_f = segundos_f % 3600;

            minutos = parseInt(segundos_f / 60);
            segundos = parseInt(segundos_f % 60);

            if (horas < 10) {
                horas = "0" + horas;
            }
            if (minutos < 10) {
                minutos = "0" + minutos;
            }
            if (segundos < 10) {
                segundos = "0" + segundos;
            }

            console.log = '<div class="contagem"><table><tr class="numero"><td>' + dias + '</td></td><td>' + horas + '</td><td>' + minutos + '</td><td>' + segundos + '</td></tr><tr style="height:20px"><td><p class="legenda">Dias</p></td><td><p class="legenda   ">Horas</p></td><td><p class="legenda">Min</p></td><td><p class="legenda">Seg</p></td></tr></table></div>';


        }, 1000);