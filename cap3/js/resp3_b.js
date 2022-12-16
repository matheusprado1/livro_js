function verificarVelocidade() {
  let inPermitida = document.getElementById("inPermitida");
  let inCondutor = document.getElementById("inCondutor");
  let outSitucao = document.getElementById("outSituacao");

  let permitida = Number(inPermitida.value);
  let condutor = Number(inCondutor.value);

  //verifica se é um valor válido
  if (permitida == 0 || isNaN(permitida) || condutor == 0 || isNaN(condutor)) {
    alert("Digite uma velocidade válida");
    inPermitida.focus();
    return;
  }

  //se o condutor estiver 20% a cima da velocidade permitida multa grave
  if (condutor > permitida + permitida * 0.2) {
    outSitucao.textContent = "Situação: Multa Grave";
  } else if (condutor <= permitida) {
    // e se ele estiver abaixo ou igual a permitida sem multa
    outSitucao.textContent = "Situação: Sem Multa";
  } else {
    // se não multa leve
    outSitucao.textContent = "Situação: Multa leve";
  }
}

let btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarVelocidade);
