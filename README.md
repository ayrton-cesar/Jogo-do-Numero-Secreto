# Jogo do Número Secreto :game_die:

Projeto de jogo realizado pelo curso de logica de programação na [Alura](https://cursos.alura.com.br/) onde o jogador tenta adivinhar o número secreto sorteado pelo programa.

Jogue o Jogo do Número Secreto [aqui](https://jogo-do-numero-secreto-dusky-ten.vercel.app/)

## Funcionalidades

- Gera um número inteiro aleatório entre 1 e 100 que o jogador deve adivinhar.
- Exibe mensagens na tela e utiliza a biblioteca [responsiveVoice](https://responsivevoice.org/) para feedback de voz em português.
- Informa ao jogador se o número secreto é maior ou menor que o chute.
- Contabiliza o número de tentativas.
- Permite reiniciar o jogo após acertar o número.

## Estrutura do Código

O código está estruturado nas seguintes funções:

- **exibirTextoNaTela(tag, texto)**: Exibe o texto na tela na tag HTML especificada e usa o `responsiveVoice` para feedback de voz.
- **gerarNumeroAleatorio()**: Gera um número aleatório entre 1 e 100 que ainda não foi sorteado.
- **exibirMensagemInicial()**: Exibe a mensagem inicial do jogo.
- **verificarChute()**: Verifica se o chute do jogador está correto, atualiza o contador de tentativas e dá dicas.
- **limparCampo()**: Limpa o campo de entrada de texto.
- **reinicarJogo()**: Reinicia o jogo, sorteando um novo número e reinicializando o contador de tentativas.

## Como Usar

1. Acesse o [Jogo do Número Secreto](https://jogo-do-numero-secreto-dusky-ten.vercel.app/);
2. O jogo iniciará automaticamente exibindo uma mensagem na tela e usando feedback de voz;
3. Insira seu chute (um número entre 1 e 100) no campo de entrada e veja se acertou;
4. Caso o chute esteja errado, o programa dará uma dica para ajudá-lo a adivinhar;
5. Após acertar, clique no botão "Reiniciar" para começar uma nova rodada.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
