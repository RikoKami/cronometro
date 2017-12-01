$(document).ready(function(){

	var cronometro = function(){

		var monsths = ["", "Jan", "Feb", "Mar", "May", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

		var dataFinal = "21/07/2018";
		var horaFinal = "00:00:00";

		var dataSplited = dataFinal.split("/");

		var dia = parseInt(dataSplited[0], 10);
		var mes = monsths[parseInt(dataSplited[1], 10)];
		var ano = parseInt(dataSplited[2], 10);

		var dataTo = mes+" "+dia+", "+ano+" "+horaFinal;

		var dataFim = new Date(dataTo).getTime();
		var agora = new Date().getTime();

		var distancia = dataFim - agora;

		var segundo = 1000;
		var minuto =  segundo * 60;
		var hora =  minuto * 60;
		var dia = hora * 24;

		var dias = Math.floor(distancia / (dia));
		var horas = Math.floor((distancia % dia) / hora);
		var minutos = Math.floor((distancia  % hora) / minuto);
		var segundos = Math.floor((distancia % minuto) / segundo); 

		if(dias > 1){
			var diasConcate = dias+" dias ";
		} else {
			var diasConcate = dias+" dia ";
		}

		var horasConcate = horas+"h ";
		var minutosConcate = minutos+"m ";
		var segundosConcate = segundos+"s ";
		var totalConcate = diasConcate + horasConcate + minutosConcate + segundosConcate;


		if (distancia < 0) {
			$("#contador").html('Expirou o tempo!').css('color','red');
			$("#btnSlider").attr("disabled", "disabled").children(".btnInnerText").text("Encerrado").css("text-transform","uppercase");
		} else {
			$("#contador").html(totalConcate);
		}

		setTimeout(cronometro, 1000);

	}

	cronometro();


});

