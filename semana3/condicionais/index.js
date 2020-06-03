/*// Exercício 1 ----------------------------------------------------------------------

const respostaDoUsuario = prompt("Digite o número que você quer testar?")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

// Explique o que o código faz.   
//      R: Pede um número via prompt, coloca em uma variável, transfroma ela no tipo number
//      e aplica condições nela e retorna respostas
// Qual o teste que ele realiza? 
//      R: Realiza um teste de pra saber se o resto da divisão do numero por 2 é igual a 0,
//      dividindo os números em dois tipos
// Para que tipos de números ele imprime no console "Passou no teste"? 
//      R: Para números pares
// Para que tipos, a mensagem é "Não passou no teste"?
//      R: Para números ímpares


// Exercício 2 ----------------------------------------------------------------------

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
    case "Laranja":
        preco = 3.5
    break;
    case "Maçã":
        preco = 2.25
    break;
    case "Uva":
        preco = 0.30
    break;
    case "Pêra":
        preco = 5.5
    break; // BREAK PARA O ITEM d.
    default:
        preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a. Para que serve o código acima?
//      R: Ele pergunta a fruta que quer saber o preço e logo informa ele
// b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//      R: R$ 2.25
// c. Considere que você vá ao mercado com o objetivo de comprar 2 laranjas, 1 maçã,
// 3 bananas e 1 uva. Qual seria o preço que você pagaria?
//      R: R$ 24.55
// d. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa
// no console se retirássemos o `break` que está logo acima do `deafult` 
// (o `break` indicado pelo comentário "BREAK PARA O ITEM d.")?
//      R: Ele cairia no case default/padrão que o preço é 5 reais.
//      O preço da fruta Pêra é R$ 5


// Exercício 3 ----------------------------------------------------------------------

const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o próximo número?")

if(numero1 > 0 && numero2 > 0) {
  let mensagem
  if(numero1 > numero2) {
    mensagem = "Número 1 é maior que o 2!"
  } else {
    mensagem = "Número 1 é menor ou igual ao 2!"
  }
  console.log(mensagem)
}

// Considere um usuário que digita os números 3 e 4 respectivamente. Qual será a mensagem do terminal?
// Haverá algum erro? Justifique usando os conceitos de bloco ou escopo.
//      R: A mensagem que aparecerá no terminal será uma de erro "index.js:74 Uncaught ReferenceError: mensagem 
//      is not defined at index.js:74". Sim há um erro, ele ocorre quando a variável mensagem é declarada 
//      dentro do if "filho" logo ela só existe lá dentro e quando o "pai" procura ele nao acha pois a
//      let mensagem faz parte do escopo do outro bloco  


// Exercício 4 ----------------------------------------------------------------------

// a. O que acontece com o seu programa se os 2 números forem iguais?
//      R: Não tem nenhum resultado

const num1 = prompt("Digite o primeiro número.")
const num2 = prompt("Digite o segundo número")

if(num1 > num2){
    console.log(num1 + " " + num2)
} else if (num2 > num1){
    console.log(num2 + " " + num1)
}

// b. O que acontece como seu programa se os 3 números forem iguais?
//      R: Aparece no console valores booleanos iguais

const num1 = prompt("Digite o primeiro número.")
const num2 = prompt("Digite o segundo número")
const num3 = prompt("Digite o terceiro número")
let menor = 0 
let medio = 0
let maior = 0

if((num1 > num2) && (num1 > num3)){             // 1 maior
    maior = num1
} else if ((num2 > num1) && (num2 > num3)) {    // 2 maior
    maior = num2
} else if ((num3 > num2) && (num3 > num1)){     // 3 maior  
    maior = num3
}
if ((num1 < num2) && (num1 < num3)) {           // 1 menor
    menor = num1
} else if ((num2 < num1) && (num2 < num3)){     // 2 menor
    menor = num2
} else if ((num3 < num1) && (num3 < num2)){     // 3 menor
    menor = num3
} 
if ((num1 > num2) && (num1 < num3) || (num1 < num2) && (num1 > num3)) {         // 1 medio
    medio = num1
} else if ((num2 > num1) && (num2 < num3) || (num2 < num1) && (num2 > num3)){   // 2 medio
    medio = num2
} else if ((num3 > num1) && (num3 < num2) || (num3 < num1) && (num3 > num2)){   // 3 medio
    medio = num3
}
console.log(maior, medio, menor)

// c.Caso todos sejam iguais, mostre um aviso ao usuário indicando que ele deve, 
// ao menos, inserir um número diferente.

const num1 = prompt("Digite o primeiro número.")
const num2 = prompt("Digite o segundo número")
const num3 = prompt("Digite o terceiro número")
let menor = 0 
let medio = 0
let maior = 0

if((num1 > num2) && (num1 > num3)){             // 1 maior
    maior = num1
} else if ((num2 > num1) && (num2 > num3)) {    // 2 maior
    maior = num2
} else if ((num3 > num2) && (num3 > num1)){     // 3 maior  
    maior = num3
}
if ((num1 < num2) && (num1 < num3)) {           // 1 menor
    menor = num1
} else if ((num2 < num1) && (num2 < num3)){     // 2 menor
    menor = num2
} else if ((num3 < num1) && (num3 < num2)){     // 3 menor
    menor = num3
} 
if ((num1 > num2) && (num1 < num3) || (num1 < num2) && (num1 > num3)) {         // 1 medio
    medio = num1
} else if ((num2 > num1) && (num2 < num3) || (num2 < num1) && (num2 > num3)){   // 2 medio
    medio = num2
} else if ((num3 > num1) && (num3 < num2) || (num3 < num1) && (num3 > num2)){   // 3 medio
    medio = num3
}
if ((num1 = num2) && (num1 = num3)){
    console.log("Digite pelo menos um número diferente")
}else if ((num2 = num3) && (num2 = num1)){
    console.log("Digite pelo menos um número diferente")
}else if ((num3 = num2) && (num3 = num1)){
    console.log("Digite pelo menos um número diferente")
}
console.log(maior, medio, menor)
*/

const racional = ""
const penas = ""
const terrestre = ""
const viveagua = ""

const animal = prompt("Informe o nome do animal")
const vertebrado = prompt ("O animal possui ossos?")

if(vertebrado === "sim"){
    const mamifero = prompt ("O animal possui pelos?")
} else{
    console.log("O animal" + animal + "é invertebrado")
}

