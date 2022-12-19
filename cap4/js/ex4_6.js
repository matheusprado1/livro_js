function verificarPrimo() {
    //cria referência aos elementos da página
    let inNumero = document.getElementById("inNumero");
    let outResposta = document.getElementById("outResposta");

    let num = Number(inNumero.value); //obtém o número informado

    // verifica se preencheu corretamente o campo inNumero
    if (num == 0 || isNaN(num)) {
        alert("Número Inválido...");
        inNumero.focus();
        return;
    }

    // let numDivisores = 0; //declara e inicializaz contador

    //declara e inicializa a variável tipo flag
    let temDivisor = 0;

    //percorre todos os possíveis divisores do número
    for (let i = 2; i <= num / 2; i++) {
        //verifica se i (1, 2, 3...) é divisor do num
        if(num % i == 0) {
            temDivisor = 1; //muda o flag
            // numDivisores++; //se é, incrementa contador
            break; //sai da repetição
        }
    }
    //se num > 1 e não possui divisor
    if (num > 1 && !temDivisor) {
        outResposta.textContent = num + " É primo";
    } else {
        outResposta.textContent = num + " Não é primo";
    }

    //se possui apenas 2 divisores, é primo
    // if (numDivisores == 2) {
    //     outResposta.textContent = num + " É primo";
    // } else {
    //     outResposta.textContent = num + " Não é primo";
    // }
}

//referencia elemento e após associa function ao evento click
let btVerificarPrimo = document.getElementById("btVerificarPrimo");
btVerificarPrimo.addEventListener("click", verificarPrimo)