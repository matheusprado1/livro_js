function numerosPerfeitos() {
  let inNumero = document.getElementById("inNumero");
  let outDivisores = document.getElementById("outDivisores");
  let outPerfeito = document.getElementById("outPerfeito");

  let numero = Number(inNumero.value);

  if (numero == 0 || isNaN(numero)) {
    alert("Informe os dados corretamente...");
    inNumero.focus();
    return;
  }

  let divisores = "Divisores do " + numero + ": 1";
  let soma = 1;

  for (let i = 2; i <= numero / 2; i++) {
    if (numero % i == 0) {
      divisores = divisores + ", " + i; //vírgula + i (evita a última vírgula)
      soma = soma + i;
    }
  }
  divisores = divisores + " (Soma: " + soma + ")";

  outDivisores.textContent = divisores;

  if (numero == soma) {
    outPerfeito.textContent = numero + " É um Número Perfeito";
  } else {
    outPerfeito.textContent = numero + " Não É um Número Perfeito";
  }
}

let btMostrarPerfeitos = document.getElementById("btMostrarPerfeitos");
btMostrarPerfeitos.addEventListener("click", numerosPerfeitos);
