document.addEventListener("DOMContentLoaded", () => {
  var cronometro = function () {
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    var dataFinal = "22/04/2021";
    var horaFinal = "22:25:00";

    var dataSplitted = dataFinal.split("/");

    var dia = parseInt(dataSplitted[0], 10);
    var mes = months[parseInt(dataSplitted[1] - 1, 10)];
    var ano = parseInt(dataSplitted[2], 10);

    var dataTo = mes + " " + dia + ", " + ano + " " + horaFinal;

    var dataFim = new Date(dataTo).getTime();
    var agora = new Date().getTime();

    var distancia = dataFim - agora;

    var segundo = 1000;
    var minuto = segundo * 60;
    var hora = minuto * 60;
    var dia = hora * 24;

    var dias = Math.floor(distancia / dia);
    var horas = Math.floor((distancia % dia) / hora);
    var minutos = Math.floor((distancia % hora) / minuto);
    var segundos = Math.floor((distancia % minuto) / segundo);

    if (dias > 1) {
      var diasConcat = dias + " dias ";
    } else {
      var diasConcat = dias + " dia ";
    }

    var horasConcat = horas + "h ";
    var minutosConcat = minutos + "m ";
    var segundosConcat = segundos + "s ";
    var totalConcat = diasConcat + horasConcat + minutosConcat + segundosConcat;
    console.log(totalConcat);

    if (distancia < 0) {
      document.getElementById("contador").textContent = "Expirou o tempo";
      document.getElementById("contador").style.color = "red";
    } else {
      document.getElementById("contador").innerText = totalConcat;
    }

    setTimeout(cronometro, 1000);
  };

  cronometro();
});
