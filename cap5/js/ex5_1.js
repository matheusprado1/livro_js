let pacientes = []; //declara vetor global

function adicionarPaciente() {
  //cria referência aos elementos de entrada e saída de dados da página
  let inPaciente = document.getElementById("inPaciente");
  let outLista = document.getElementById("outLista");

  let nome = inPaciente.value; //obtém o nome do paciente

  //verifica preenchimento do nome do paciente
  if (nome == "") {
    alert("Informe o nome do paciente");
    inPaciente.focus();
    return;
  }

  pacientes.push(nome); //adiciona o nome no final do vetor

  let lista = ""; //string para concatenar pacientes

  //percorre os elementos do vetor
  for (i = 0; i < pacientes.length; i++) {
    lista += i + 1 + ". " + pacientes[i] + "\n";
  }

  //altera o conteúdo da tag outLista
  outLista.textContent = lista;

  //limpa campo e posiciona cursor em inPaciente
  inPaciente.value = "";
  inPaciente.focus();
}
//cria referência ao btAdicionar e associa function ao evento click
let btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarPaciente);

function adicionarUrgencia() {
  //cria referência aos elementos de entrada e saída de dados da página
  let inPaciente = document.getElementById("inPaciente");
  let outLista = document.getElementById("outLista");

  let nome = inPaciente.value; //obtém o nome do paciente

  //verifica preenchimento do nome do paciente
  if (nome == "") {
    alert("Informe o nome do paciente");
    inPaciente.focus();
    return;
  }

  pacientes.unshift(nome); // adiciona o nome no início do vetor

  let lista = ""; //string para concatenar pacientes

  //percorre os elementos do vetor
  for (i = 0; i < pacientes.length; i++) {
    lista += i + 1 + ". " + pacientes[i] + "\n";
  }

  //altera o conteúdo da tag outLista
  outLista.textContent = lista;

  //limpa campo e posiciona cursor em inPaciente
  inPaciente.value = "";
  inPaciente.focus();
}
//cria referência ao btUrgencia e associa function ao evento click
let btUrgencia = document.getElementById("btUrgencia");
btUrgencia.addEventListener("click", adicionarUrgencia);

function atenderPaciente() {
  let inPaciente = document.getElementById("inPaciente");
  //verifica se vetor pacientes está vazio
  if (pacientes.length == 0) {
    alert("Não há pacientes na lista de espera");
    inPaciente.focus();
    return;
  }

  //cria referência aos elementos de saída de dados
  let outAtendimento = document.getElementById("outAtendimento");
  let outLista = document.getElementById("outLista");

  //remove paciente do início da fila e (obtém nome)
  let atender = pacientes.shift();
  //exibe nome do paciente em atendimento
  outAtendimento.textContent = atender;

  //string para concatenar pacientes
  let lista = "";

  //percoree os elementos do vetor
  for (i = 0; i < pacientes.length; i++) {
    lista += i + 1 + ". " + pacientes[i] + "\n";
  }
  //altera o conteúdo da tag outLista
  outLista.textContent = lista;
}
//cria referência ao btAtender e associa function ao evento click
let btAtender = document.getElementById("btAtender");
btAtender.addEventListener("click", atenderPaciente);
