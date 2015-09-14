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
				preencheUso(usoPlano.dados, '#gigas-utilizados', '#gigas-contratados');
			} else {
				alert('Não foi possível requisitar os seus dados de uso do plano:' + xhr.status);
			}
		};
		xhr.send();
	}

	function preencheUso(obj, elUtilizados, elContratados) {
		var utilizados = obj.utilizados;
		var contratados = obj.contratados;
		var $elUtilizados = $(elUtilizados)[0];
		var $elContratados = $(elContratados)[0];
		var porcentagemUso = utilizados * 100 / contratados;
		var item = $elUtilizados.parentNode.parentNode;
		var classeDgd = nomeClasseDgd(porcentagemUso);
		var css;

		if (elUtilizados === '#gigas-utilizados') {
			utilizados = (utilizados / 1000000).toFixed(2);
			contratados = (contratados / 1000000).toFixed(2);
		}

		if (porcentagemUso > 100) porcentagemUso = 125;

		css = '\n.' + classeDgd + ':hover:before { width: ' + porcentagemUso + '%; }';

		$elUtilizados.innerHTML = utilizados;
		$elContratados.innerHTML = contratados;

		item.className = classeDgd;
		addStyle(css);
	}

	function nomeClasseDgd(porcentagemUso) {
		if (porcentagemUso <= 50) {
			return 'dgd-consumo-baixo';
		} else if (porcentagemUso > 50 && porcentagemUso <= 100) {
			return 'dgd-consumo-dentro';
		} else {
			return 'dgd-consumo-fora';
		}
	}

	function addStyle(css) {
		var style;

		if ($('#style-dgd-consumo').length > 0) {
			style = $('#style-dgd-consumo')[0];
		} else {
			style = document.createElement('style');
			style.id = 'style-dgd-consumo';
		}

		if (style.styleSheet) {
			style.styleSheet.cssText += css;
		} else {
			style.appendChild(document.createTextNode(css));
		}

		if (style != $('#style-dgd-consumo')[0]) {
			document.head.appendChild(style);
		}
	}
}) (window);