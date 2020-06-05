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
	const carta = comprarCarta(); 
   // Sorteia uma carta. Por exemplo, o rei de ouros

   console.log(carta.texto) 
   // imprime o texto da carta. Nesse caso: "K♦️"
   
   comprarCarta();
   
   console.log(carta.valor) 
   // imprime o valor da carta (um número). Nesse caso: 10)
   
   console.log("Usuário - cartas: " + carta.valor , carta.texto + "♣️  - pontuação 20")
   console.log("Computador - cartas: " + carta.valor , carta.texto + "  - pontuação 20")

} else {
	console.log("O jogo acabou")
}

