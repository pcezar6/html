let numero1 = null;
let numero2 = null;
let operacaoVariavel = null;

function LimparCampo() {
	$("#campo-digitacao").val("");
}

function AdicionarNumero(numero) {
	let numeroAnterior = $("#campo-digitacao").val();
	$("#campo-digitacao").val(numeroAnterior + numero);
}

function EscolherOperacao(operacao) {
	switch (operacao) {
		case "adicao":
			if (numero1) {
				numero2 = $("#campo-digitacao").val();
			} else {
				numero1 = $("#campo-digitacao").val();
			}
			operacaoVariavel = "adicao";
			LimparCampo();
			break;
		case "divisao":
			console.log("Isso é uma divisao /");
			break;
		case "subtracao":
			console.log("Isso é uma subtracao -");
			break;
		case "multiplicacao":
			console.log("Isso é uma multiplicacao *");
			break;
		case "igual":
			if (numero1) {
				numero2 = $("#campo-digitacao").val();
			} else {
				numero1 = $("#campo-digitacao").val();
			}
			LimparCampo();
			ExecutarOperacao();
			break;
		default:
			console.log("Isso não é uma operação matematica");
			break;
	}
}

function ExecutarOperacao() {
	switch (operacaoVariavel) {
		case "adicao":
			let total = parseFloat(numero1) + parseFloat(numero2);
			$("#campo-digitacao").val(numero1 + "+" + numero2 + "=" + total);
			break;
	}
}
