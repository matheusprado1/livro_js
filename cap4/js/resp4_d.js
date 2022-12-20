function fabricarEstrelas() {
  let inLinhas = document.getElementById("inLinhas");
  let outEstrelas = document.getElementById("outEstrelas");

  let linhas = Number(inLinhas.value);

  if (linhas == 0 || isNaN(linhas)) {
    alert("Informe o número de linhas corretamente...");
    inLinhas.focus();
    return;
  }

  let estrelas = "";

  for (let i = 1; i <= linhas; i++) {
    for (let j = 1; j <= i; j++) {
      estrelas = estrelas + "*";
    }
    estrelas = estrelas + "\n";
  }

  outEstrelas.textContent = estrelas;
}

let btCriarEstrelas = document.getElementById("btCriarEstrelas");
btCriarEstrelas.addEventListener("click", fabricarEstrelas);
