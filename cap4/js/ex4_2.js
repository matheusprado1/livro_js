function listarNumeros() {
  let inNumero = document.getElementById("inNumero");
  let outResposta = document.getElementById("outResposta");

  let numero = Number(inNumero.value);

  if (numero == 0 || isNaN(numero)) {
    alert("Informe um número válido...");
    inNumero.focus();
    return;
  }

  let resposta = "Entre " + numero + " e 1: " + numero;
  //forma menos funcional pois o looping vai se repetir varias vezes para o primeiro if
  //   for (let i = numero; i > 0; i--) {
  //     if (i == 1) {
  //       resposta = resposta + i + ".";
  //     } else {
  //       resposta = resposta + i + ",";
  //     }
  //   }

  // forma com while
  // let i = numero/
  // //enquanto i maior que 0
  // while (i>0){
  //   //acumula em resposta os números em ordem decrescente
  //   resposta = resposta + i + ", ";
  // //subtrai 1 no valor da variável i (i=i-1)
  // i--;
  // }

  // forma mais funcional
  for (let i = numero - 1; i > 0; i--) {
    resposta = resposta + ", " + i;
  }
  resposta = resposta + ".";

  outResposta.textContent = resposta;
}

let btDecrescer = document.getElementById("btDecrescer");
btDecrescer.addEventListener("click", listarNumeros);
