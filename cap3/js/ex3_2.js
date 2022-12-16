function calcularPeso() {
  //cria referência aos elementos manipulados pela function
  let inNome = document.getElementById("inNome");
  let rbMasculino = document.getElementById("rbMasculino");
  let rbFerminino = document.getElementById("rbFerminino");
  let inAltura = document.getElementById("inAltura");
  let outResposta = document.getElementById("outResposta");

  //obtém o conteúdo dos campos de edição da página
  let nome = inNome.value;
  let masculino = rbMasculino.checked;
  let feminino = rbFerminino.checked;
  let altura = Number(inAltura.value);

  //verifica se o nome foi preenchido e sexo selecionado
  if (nome == "" || (masculino == false && feminino == false)) {
    alert("Por favor, informe o nome e selecione o sexo...");
    inNome.focus(); // posiciona(joga o foco) no campo de edição inNome
    return;
  }
  //se masculino (significa se masculino == true)
  if (masculino) {
    var peso = 22 * Math.pow(altura, 2); // Math.pow eleva ao quadrado
  } else {
    var peso = 21 * Math.pow(altura, 2);
  }

  //apresenta a resposta(altera o conteúdo da linha outResposta)
  outResposta.textContent =
    nome + ": Seu peso ideal é " + peso.toFixed(3) + " kg";
}

//cria referência ao elemento btCalcular e registra evento associado a calcularPeso

let btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPeso);

function limparCampos() {
  //Limpa os conteúdos dos elementos
  //   document.getElementById("inNome").value = "";
  //   document.getElementById("inAltura").value = "";
  //   document.getElementById("outResposta").textContent = "";
  //   document.getElementById("rbMasculino").checked = false;
  //   document.getElementById("rbFeminino").checked = false;

  //   //posiciona (joga o foco) no elemento inNome
  //   document.getElementById("inNome").focus;

  // método location.reload()
  location.reload();
  document.getElementById("inNome").focus();
}

let btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparCampos);
