function apagaUm() {
	var numero = calc.visor.value;
	calc.visor.value = numero.substring(0,numero.length-1);
}

function extrairRaiz() {
	var numero = calc.visor.value;
	var resultado = Math.sqrt(numero);
	calc.visor.value = resultado;
}