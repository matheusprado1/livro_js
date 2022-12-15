function verPromocao() {
  let inProduto = document.getElementById("inProduto");
  let inPreco = document.getElementById("inPreco");
  let outResultado = document.getElementById("outResultado");
  let outPromocao = document.getElementById("outPromocao");

  let produto = inProduto.value;
  let preco = Number(inPreco.value);

  let total = preco * 3;
  let desconto = preco * 0.5;
  let totalDesconto = total - desconto;

  outResultado.textContent = produto + " - Promoção: Leve 3 por R$: " + totalDesconto.toFixed(2);
  outPromocao.textContent = "O 3o Produto custa apenas R$: " + desconto.toFixed(2);
}

let btPromocao = document.getElementById("btPromocao");
btPromocao.addEventListener("click", verPromocao);
