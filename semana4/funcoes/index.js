// Exercício 1 --------------------------------------------------

// const minhaFuncao = (quantidade) => {
// 	const array = []
// 	for(let i = 0; i < quantidade; i+=2) {
// 			for(let j = 0; j < i; j++) {
// 				array.push(j)
// 			}
// 	}
// 	return array
// }

// let resultado = minhaFuncao(2)
// console.log(resultado)

// a. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(2)`
//      R: [] array vazio
// b. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(5)`
//      R: [0, 1, 0, 1, 2, 3]
// c. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(8)`
//      R: [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]


// Exercício 2 --------------------------------------------------

// let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

// const funcao = (lista, nome) => {
//   for (let i = 0; i < lista.length; i++) {
//     if (lista[i] === nome) {
//       return i;
//     }
//   }
// };

// console.log(funcao(arrayDeNomes, "Darvas"));
// console.log(funcao(arrayDeNomes, "João"));
// console.log(funcao(arrayDeNomes, "Paula"));

// a. Explique quais são as saídas impressas no console
//      R: Elas mostram a posição no índice do arrayDeNomes. Darvas e João, indice 0 e 2 e Paula não esta no 
//      índice por isso aparece como undefined
// b. O código funcionaria se a lista fosse um array de números (ao invés de um array de string) e o nome 
// fosse um número, ao se chamar a função? Justifique sua resposta.
//      R: Funcionaria sim, pois a função funciona independente do tipo de valor que ela esteja recebendo. E ela 
//      retorna a posição no índice do array


// Exercício 3 --------------------------------------------------

// let arrayNum = [1, 2, 3, 4]

// function iterarSomaMultiplicacao(array) {
//     let resultadoA = 0;
//     let resultadoB = 1;
//     let arrayFinal = [];
  
//     for (let x of array) {
//       resultadoA += x;
//       resultadoB *= x;
//     }
  
//     arrayFinal.push(resultadoA);
//     arrayFinal.push(resultadoB);
//     return arrayFinal;
//   }

//   let final = iterarSomaMultiplicacao(arrayNum)
//   console.log(final)

// Explique rapidamente o que ela faz e sugira um nome melhor para ela!
//      R: Ela soma e multiplica os valores do array em variaveis e mostra elas


// Exercício 4 --------------------------------------------------
 
// a.

// let idadeCachorro  = Number(prompt ("Qual a idade do cachorro?"))

// const calcularIdadeCachorro = (idade) => {
//     let idadeFinal = idadeCachorro * 7
//     return idadeFinal
// }

// console.log(calcularIdadeCachorro(idadeCachorro))

// b.

// let nome  = prompt ("Qual o seu nome?")
// let idade  = prompt ("Qual a sua idade?")
// let endereco  = prompt ("Qual o seu endereço?")
// let estudante  = confirm ("É estudante?")


// const escreverDadosMensagem = (name, age, address, student) => {
//     if(estudante === true){
//         estudante = "sou"
//     }else{
//         estudante ="não sou"
//     }
//     let mensagem = "Eu sou o "+ nome +", tenho " + idade + " anos, moro em " + endereco + " e " + estudante + " estudante"
//     return mensagem
// }

// console.log(escreverDadosMensagem(nome, idade, endereco, estudante))


// Exercício 5 --------------------------------------------------
 
// 1.