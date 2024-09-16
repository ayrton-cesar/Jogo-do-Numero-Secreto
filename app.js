// Variável para armazenar a lista de números sorteados
let listaDeNumeros = [];
// Número máximo para o sorteio
let numeroTotal = 100;
// Chama função para gerar número
let numeroSecreto = gerarNumeroAleatorio();
// Contador de tentativas
let tentativas = 1;

// Função para exibir texto na tela e também falar usando a biblioteca responsiveVoice
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}

// Função para exibir a mensagem inicial do jogo
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número de 1 a 100');
}

exibirMensagemInicial();

// Função para verificar o chute
function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Booa!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o Número Secreto '${numeroSecreto}' com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O Número Secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O Número Secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

// Função para gerar um número aleatório que não foi sorteado anteriormente
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroTotal + 1);
    let quantidadeElementos = listaDeNumeros.length;

    // Se todos os números já foram sorteados, reinicia a lista
    if (quantidadeElementos == numeroTotal) {
        listaDeNumeros = [];
    }

    // Verifica se o número já foi sorteado antes
    if (listaDeNumeros.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeros.push(numeroEscolhido);
        console.log(listaDeNumeros); // Exibe a lista de números sorteados no console
        return numeroEscolhido;
    }
}

// Função para limpar o campo de entrada
function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

// Função para reiniciar o jogo
function reinicarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}
