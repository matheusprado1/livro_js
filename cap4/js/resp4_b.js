function calcularChinchilas() {
  let inChinchilas = document.getElementById("inChinchilas");
  let inAnos = document.getElementById("inAnos");
  let outResposta = document.getElementById("outResposta");

  let chinchilas = Number(inChinchilas.value);
  let anos = Number(inAnos.value);

  if (chinchilas < 2 || isNaN(chinchilas) || anos == 0 || isNaN(anos)) {
    alert("Digite o No de chinchilas(maior que 2) e anos válidos...");
    inChinchilas.focus();
    return;
  }

  let resposta = "";
  let total = chinchilas;

  for (let i = 1; i <= anos; i++) {
    resposta = resposta + i + "o Ano: " + total + " Chinchilas\n";
    total = total * 3;
  }

  outResposta.textContent = resposta;

}

let btMostrarChinchilas = document.getElementById("btMostrarChinchilas");
btMostrarChinchilas.addEventListener("click", calcularChinchilas)
