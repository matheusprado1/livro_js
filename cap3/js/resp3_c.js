function parquimetro() {
  let inValor = document.getElementById("inValor");
  let outTempo = document.getElementById("outTempo");
  let outTroco = document.getElementById("outTroco");

  let valor = Number(inValor.value);

  if (valor == 0 || isNaN(valor)) {
    alert("Digite um valor válido");
    inValor.focus();
    return;
  }

  if (valor < 1) {
    alert("Valor Insuficiente.");
    inValor.focus();
  }

  let tempo;
  let troco;

  if (valor >= 3.0) {
    tempo = 120;
    troco = valor - 3.0;
  } else if (valor >= 1.75) {
    tempo = 60;
    troco = valor - 1.75;
  } else {
    tempo = 30;
    troco = valor - 1.0;
  }

  outTempo.textContent = "Tempo: " + tempo + " min";
  if (troco > 0) {
    outTroco.textContent = "Troco R$: " + troco.toFixed(2);
  }
}

let btDeposito = document.getElementById("btDeposito");
btDeposito.addEventListener("click", parquimetro);
