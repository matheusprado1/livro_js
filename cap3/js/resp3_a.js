function ParOuImpar() {
  //referência aos elementos
  let inNumero = document.getElementById("inNumero");
  let outResposta = document.getElementById("outResposta");

  //converte o valor
  let numero = Number(inNumero.value);

  //verifica se o valor é 0 ou Not-a-Number
  if (numero == 0 || isNaN(numero)) {
    alert("Insira um valor válido(apenas números)"); // exibe alerta
    inNumero.focus();
    return;
  }

  //verifica se o numero é par
  if (numero % 2 == 0) {
    outResposta.textContent = "Resposta: " + numero + " é Par";
  } else {
    // se não ele é impar
    outResposta.textContent = "Resposta: " + numero + " é Ímpar";
  }
}
//referência o botão  e adiciona o event
let btParOuImpar = document.getElementById("btParOuImpar");
btParOuImpar.addEventListener("click", ParOuImpar);
