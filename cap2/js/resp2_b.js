function valorPagar() {
  let inPreco = document.getElementById("inPreco");
  let inTempo = document.getElementById("inTempo");
  let outPagar = document.getElementById("outPagar");

  let preco = Number(inPreco.value);
  let tempo = Number(inTempo.value);
  //calcula o valor a pagar (arredonda para cima(math.ceil()))
  let totalPreco = Math.ceil(tempo / 15) * preco;

  outPagar.textContent = "Valor a Pagar R$: " + totalPreco.toFixed(2);
}

let btCalculo = document.getElementById("btCalculo");
btCalculo.addEventListener("click", valorPagar)
