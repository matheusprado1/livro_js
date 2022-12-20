function preencherEstrelas() {
  //cria referencia aos elementos html manipulados pela function
  let inNumero = document.getElementById("inNumero");
  let outEspacos = document.getElementById("outEspacos");

  let num = Number(inNumero.value); //obtém conteúdo do campo inNumero

  if (num == 0 || isNaN(num)) {
    alert("Número Inválido...");
    inNumero.focus();
    return;
  }

  let estrelas = ""; //declara variável que irá concatenar as estrelas/traços

  //cria um laço de repetição de 1 até o número informado
  for (let i = 1; i <= num; i++) {
    if (i % 2 == 1) {
      estrelas = estrelas + "*"; // na posição ímpar do i: *
    } else {
      estrelas = estrelas + "-"; // na posição par : -
    }
  }
  outEspacos.textContent = estrelas; //exibe as estrelas
}
//cria referencia ao botão e spós associa function ao evento click
let btPreencher = document.getElementById("btPreencher");
btPreencher.addEventListener("click", preencherEstrelas);
