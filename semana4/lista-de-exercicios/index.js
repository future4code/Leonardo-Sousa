// Interpretação de código - Exercício 1 ------------------------------------------------------------

// Cria uma função com o nome conversorMoeda com o parâmetro valorEmDolar,
// dentro dela é criado um prompt para receber a cotação do dolar,
// vai retornar uma string concatenada no calculo para saber o valor em reais que é o parametro da função
// multiplicado pela cotação, é criada uma variável meuDinheiro que vai receber a função conversorMoeda
// com atributo 100 que é o valorEmDolar. No console é mostrado o valor em reais equivalente a 100 dolares
// que esta na variavel meuDinheiro que recebe o return da função. 


// Interpretação de código - Exercício 2 ------------------------------------------------------------

// Cria uma função com o nome investeDinheiro com dois parâmetros, tipoInvestimento e valor, dentro dela 
// é declarada uma variável valorAposInvestimento, é criado um switch para essa variavel que vai escolher   
// e somar valores de investimento diferentes de acordo com o tipo de investimento, caso o tipo de investimento
// não exista ele vai mostrar com um alert dizendo que o tipo de investimento informado está incorreto.
// No primeiro console será mostrado o investimento corretamente o no segundo será mostrado o alert que é o
// default do switch ja que nele nao tem o investimento Tesouro Direto.


// Interpretação de código - Exercício 3 ------------------------------------------------------------

// Cria três arrays, um com números e dois vazios, é criado um for of para percorrer o array com números 
// e um if, se for mod 2 igual a 0 ele é par e vai ser empurrado para um array que estava vazio e os 
// impares vão para o outro array que estava vazio. No console será mostrado quantos números tem no array
// original a partir da .legth e nos outros dois será mostrado quantos impares e quantos pares.


// Interpretação de código - Exercício 4 ------------------------------------------------------------

// É criado um array com valore numéricos e duas variáveis, uma com valor infinity e outra com valor zero,
// é criado um for of para percorrer o array de números dentro dele dois ifs, se o número do array for menor  
// que a primeira variável, numero1, o número vai substituir o valor da variavel, o mesmo aconteco com a 
// segunda variável mas se o número for maior que ela. Nos consoles são mostrados o maior e o menor número
// do array.


// Lógica de programação - Exercício 1 ------------------------------------------------------------

// O for of passa por todo array iterando cada elemento, usado especificamente para arrays. 

// for (elemento of array){
// }

// Nesse exemplo com o for, será mostrado o elemento de cada posição(i) até que a posição(i) fique igual ou 
// maior que o tamanho do array  

// for (let i; i < array.length; i++){
//     array[i]
// }

// Usado para arrays, o forEach, percorre cada elemento do array tendo como parâmetro uma função

// array.forEach(elemento => {
// });


// Lógica de programação - Exercício 2 ------------------------------------------------------------

// a. false
// b. false
// c. true
// d. true
// e. true


// Lógica de programação - Exercício 3 ------------------------------------------------------------

// Ele não funcionava, faltava declarar a quantidade de numeros pares e um incremento no while
// e tava com igual sobrando no loop

// const quantidadeDeNumerosPares = 5
// let i = 0
// while(i < quantidadeDeNumerosPares) {
//         console.log(i*2)
//         i++
// }


// Lógica de programação - Exercício 4 ------------------------------------------------------------

// let tipo = ""

// function tipoDeTriangulo(a, b, c){
//     if(a === b && b === c){
//         tipo = "O triângulo é equilátero"
//     }else if(a === b || b === c || c === a){
//         tipo = "O triângulo é escaleno"
//     }else{
//         tipo = "O triângulo é isósceles"
//     }
//     return tipo
// }

// let medida = tipoDeTriangulo(2, 2, 2)
// console.log(medida)


// Lógica de programação - Exercício 5 ------------------------------------------------------------

function calculaNumeros(num1, num2){
    let maior = 0
    let menor = 0
    let divisivel1 = ""
    let divisivel2 = ""

    if(num1 > num2){
        maior = num1
        menor = num2
    }else if(num2 > num1){
        maior = num2
        menor = num1
    }else{
        maior = "Os números são iguais"
    }

    if(num1 % num2 === 0){
        divisivel1 = "é divisível"
    }else{
        divisivel1 = "não é divisível"
    }

    if(num2 % num1 === 0){
        divisivel2 = "é divisível"
    }else{
        divisivel2 = "não é divisível"
    }

    let diferenca = maior - menor
    let mensagem = "O maior é " + maior + "\n" + num1 + " " + divisivel1 + " por " + num2 + 
    "\n" + num2 + " " + divisivel2 + " por " + num1 + "\nA diferença entre eles é " + diferenca

    return mensagem
}

let numeros = calculaNumeros(15, 30)
console.log(numeros)