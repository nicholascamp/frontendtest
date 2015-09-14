(function (window) {
	"use strict";

	window.$ = document.querySelectorAll.bind(document);

	reqAjax();

	function reqAjax() {
		var xhr = new XMLHttpRequest();

		xhr.open('GET', '../plano.json');
		xhr.onload = function() {
			if (xhr.status === 200) {
				var usoPlano = JSON.parse(xhr.responseText);

				preencheUso(usoPlano.ligacoes, '#minutos-utilizados', '#minutos-contratados');
				preencheUso(usoPlano.torpedos, '#mensagens-enviadas', '#mensagens-contratadas');
				preencheUsoDados(usoPlano.dados);
			} else {
				alert('Não foi possível requisitar os seus dados de uso do plano:' + xhr.status);
			}
		};
		xhr.send();
	}

	function preencheUso(obj, elUtilizados, elContratados) {
		$(elUtilizados)[0].innerHTML = obj.utilizados;
		$(elContratados)[0].innerHTML = obj.contratados;
	}

	function preencheUsoDados(obj) {
		$('#gigas-utilizados')[0].innerHTML = (obj.utilizados / 1000000).toFixed(2);
		$('#gigas-contratados')[0].innerHTML = (obj.contratados / 1000000).toFixed(2);
	}
}) (window);