function calcularRaiz() {
  //cria uma referência aos elementos da página
  let inNumero = document.getElementById("inNumero");
  let outResposta = document.getElementById("outResposta");

  let numero = Number(inNumero.value); //obtém conteúdo do campo inNumero

  //se não preencheu ou Not-a-Number(NaN)
  if (numero == 0 || isNaN(numero)) {
    alert("Informe um número válido..."); //exibe alerta
    inNumero.focus(); // posiciona no campo inNumero
    return; //retorna
  }

  let raiz = Math.sqrt(numero); //calcula raiz quadrada do número

  //se valor da variavel raiz igual a este valor arredondado para baixo...
  if (raiz === Math.floor(raiz)) {
    outResposta.textContent = "Raiz: " + raiz; //mostra a raiz
  } else {
    //senão, exibe a mensagem indicando que não há raiz quadrada exata
    outResposta.textContent = "Não há raiz quadrada exata pra " + numero;
  }
}

let btExibir = document.getElementById("btExibir");
btExibir = addEventListener("click", calcularRaiz);
