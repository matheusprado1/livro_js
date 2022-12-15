function mostrarPromocao() {
  let inMedicamento = document.getElementById("inMedicamento");
  let inPreco = document.getElementById("inPreco");
  let outMedicamento = document.getElementById("outMedicamento");
  let outResultado = document.getElementById("outResultado");

  let medicamento = inMedicamento.value;
  let preco = Number(inPreco.value);

  let promocao = Math.floor(preco * 2);

  outMedicamento.textContent = "Promoção de " + medicamento;
  outResultado.textContent = "Leve 2 por apenas R$: " + promocao.toFixed(2);
}

let btPromocao = document.getElementById("btPromocao");
btPromocao.addEventListener("click", mostrarPromocao);
