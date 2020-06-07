/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {
   let cartaUsuario = [comprarCarta(), comprarCarta()]
   let cartaComputador = [comprarCarta(), comprarCarta()]
   let pontuacaoUsuario = 0
   let pontuacaoComputador = 0

   while(cartaUsuario[0].texto === "A" && cartaUsuario[1].texto === "A"){
      cartaUsuario[0] = comprarCarta()
      cartaUsuario[1] = comprarCarta()
   }
   while(cartaComputador[0].texto === "A" && cartaComputador[1].texto === "A"){
      cartaComputador[0] = comprarCarta()
      cartaComputador[1] = comprarCarta()
   }

   console.log(cartaUsuario[0].texto, cartaUsuario[1].texto)
   

   // pontuacaoUsuario = cartaUsuario[0].valor + cartaUsuario[1].valor
   // pontuacaoComputador = cartaComputador[0].valor + cartaComputador[1].valor

   // let mensagemUsuario = [cartaUsuario[0], cartaUsuario[1]]
   // let mensagemComputador = []

   // while(pontuacaoUsuario <= 21){
   //    if(confirm(
   //       "Suas cartas são " + mensagemUsuario + " . A carta revelada do computador é " + cartaComputador[0].texto +
   //       "\n" + "Deseja comprar mais uma carta?"
   //    )){
   //       cartaUsuario.push(comprarCarta())
   //       pontuacaoUsuario += cartaUsuario[2].valor
         
   //    }else{
         
   //    }
   // }
   // if(pontuacaoUsuario > pontuacaoComputador){
   //    alert("Suas cartas são 3♣️ J♥️ 5♣️ 4♣️ . Sua pontuação é 22.\n" +
   //       "As cartas do computador são Q♠️ K♦️ . A pontuação do computador é 20.\n" +
   //       "O Usuário ganhou!")
   // }else if(pontuacaoComputador > pontuacaoUsuario){
   //    alert("Suas cartas são 3♣️ J♥️ 5♣️ 4♣️ . Sua pontuação é 22.\n" +
   //       "As cartas do computador são Q♠️ K♦️ . A pontuação do computador é 20.\n" +
   //       "O computador ganhou!")
   // }else{
   //    alert("Suas cartas são 3♣️ J♥️ 5♣️ 4♣️ . Sua pontuação é 22.\n" +
   //       "As cartas do computador são Q♠️ K♦️ . A pontuação do computador é 20.\n" +
   //       "Empate!")
   // }
} else {
   console.log("O jogo acabou")
}
