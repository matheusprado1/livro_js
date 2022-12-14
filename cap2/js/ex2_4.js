function calcularPreco() {
  let inPreco = document.getElementById("inPreco");
  let inConsumo = document.getElementById("inConsumo");
  let outTotal = document.getElementById("outTotal");

  let preco = Number(inPreco.value);
  let consumo = Number(inConsumo.value);

  let total = (preco / 1000) * consumo;

  outTotal.textContent = "Valor a pagar R$: " + total.toFixed(2);
}

let btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPreco);
