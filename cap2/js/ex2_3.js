function mostrarPromocao() {
  let inVeiculo = document.getElementById("inVeiculo");
  let inPreco = document.getElementById("inPreco");
  let outVeiculo = document.getElementById("outVeiculo");
  let outEntrada = document.getElementById("outEntrada");
  let outParcelas = document.getElementById("outParcelas");

  let veiculo = inVeiculo.value;
  let preco = Number(inPreco.value);

  let entrada = preco * 0.5;
  let parcelas = (preco * 0.5) / 12;
  //mesma forma de realizar o calculo
  //let entrada = preco / 2;
  //let parcelas = entrada / 12;

  outVeiculo.textContent = "Promoção: " + veiculo;
  outEntrada.textContent = "Entrada de R$: " + entrada.toFixed(2);
  outParcelas.textContent = "+ 12 parcelas de R$: " + parcelas.toFixed(2);
}

let btPromocao = document.getElementById("btPromocao");
btPromocao.addEventListener("click", mostrarPromocao);
