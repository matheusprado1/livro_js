function repetirFruta() {
  let inFruta = document.getElementById("inFruta");
  let inNumero = document.getElementById("inNumero");
  let outResultado = document.getElementById("outResultado");

  let fruta = inFruta.value;
  let numero = Number(inNumero.value);

  if (fruta == "" || numero == 0 || isNaN(numero)) {
    alert("Digite valores válidos...");
    inFruta.focus();
    return;
  }

  let resposta = "";

  for (let i = 1; i <= numero; i++) {
    if (i == numero) {
      resposta = resposta + fruta;
    } else {
      resposta = resposta + fruta + " * ";
    }
  }
  outResultado.textContent = resposta;
}

let btRepetirFruta = document.getElementById("btRepetirFruta");
btRepetirFruta.addEventListener("click", repetirFruta);
