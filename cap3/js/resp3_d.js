function verificarLados() {
  let inLadoA = document.getElementById("inLadoA");
  let inLadoB = document.getElementById("inLadoB");
  let inLadoC = document.getElementById("inLadoC");
  let outResposta = document.getElementById("outResposta");
  let outTipo = document.getElementById("outTipo");

  outResposta.textContent = "";
  outTipo.textContent = "";

  let ladoA = Number(inLadoA.value);
  let ladoB = Number(inLadoB.value);
  let ladoC = Number(inLadoC.value);

  if (
    ladoA == 0 ||
    isNaN(ladoA) ||
    ladoB == 0 ||
    isNaN(ladoB) ||
    ladoC == 0 ||
    isNaN(ladoC)
  ) {
    alert("Digite um valor válido para os três lados");
    inLadoA.focus();
    return;
  }

  if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
    outResposta.textContent = "Lados Não Podem Formar um triângulo";
  } else {
    outResposta.textContent = "Lados Podem Formar um Triângulo";
    if (ladoA == ladoB && ladoA == ladoC) {
      outTipo.textContent = "Tipo: Equilátero";
    } else if (ladoA == ladoB || ladoA == ladoC || ladoC == ladoB) {
      outTipo.textContent = "Tipo: Isósceles";
    } else {
      outTipo.textContent = "Tipo: Escaleno";
    }
  }
}

let btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarLados);
