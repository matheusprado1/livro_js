//declara e inicializa contadores e acumuladores (variáveis globais)
let numContas = 0; //contador
let valTotal = 0; //acumulador

//váriavel string que acumula as contas
let resposta = "";

function registrarConta() {
  //cria referência aos elementos da página manipulados pela function
  let inDescricao = document.getElementById("inDescricao");
  let inValor = document.getElementById("inValor");
  let outListaContas = document.getElementById("outListaContas");
  let outTotal = document.getElementById("ouTotal");

  //obtém conteúdo dos campos
  let descricao = inDescricao.value;
  let valor = Number(inValor.value);

  //verifica preenchimento dos campos
  if (descricao == "" || valor == 0 || isNaN(valor)) {
    alert("Informe od dados corretamente...");
    inDescricao.focus();
    return;
  }

  //adiciona valores ao contador e acumulador
  numContas++;
  valTotal = valTotal + valor;

  //concatena as contas
  resposta = resposta + descricao + " -R$: " + valor.toFixed(2) + "\n";

  //altera o conteúdo das tags de resposta
  outListaContas.textContent = resposta + "------------------------------";
  outTotal.textContent =
    numContas + " Conta(s) - Total R$: " + valTotal.toFixed(2);

  //limpa campos e posiciona cursor em inDescricao
  inDescricao.value = "";
  inValor.value = "";
  inDescricao.focus();
}
//referencia elemento e após associa function ao evento click
let btRegistrar = document.getElementById("btRegistrar");
btRegistrar.addEventListener("click", registrarConta);
