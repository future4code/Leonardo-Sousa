// Exercício 1 ----------------------------------------------------------------------

let sum = 0
for(let i = 0; i < 15; i++) {
    sum += i
}
console.log(sum)

// O que o código abaixo está fazendo?
//      R: Ele soma todos os valores que estão sendo passados pela "i"
//      dentro da "sum" emostrando essa soma no final
// Qual o resultado impresso no console?
//      R: 105. É a soma dos valores


// Exercício 2 ----------------------------------------------------------------------

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 5
for(const item of lista) {
    if(item%numero === 0) {
        novaLista.push(item)
    }
}
console.log(novaLista)

// a. O que o comando `.push` faz?
//      R: Ele empurra um valor para dentro do array, no caso um numero multiplo de 5
// b. Qual o valor impresso no console?
//      R: (4) [10, 15, 25, 30]
// c. Qual **seria** imprimido no console se a variável `numero` tivesse o valor de `3`? 
// E se tivesse o valor de `4`?
//      R: Se fosse 3. (6) [12, 15, 18, 21, 27, 30]
//      Se fosse 4. (1) [12]


// Exercício 3 ----------------------------------------------------------------------

// a. Escreva um programa que devolva o maior e o menor números contidos no array original

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maior = arrayOriginal[0]
let menor = arrayOriginal[0]

for(let num of arrayOriginal){
    if(num > maior){
        maior = num
    }
    if(num < menor){
        menor = num
    }
}
console.log("O maior número é " + maior + " e o menor é " + menor)

// b. Escreva um programa que devolva um novo array contendo todos os valores do array original divididos por 10.

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let divisao =[]

for(let num of arrayOriginal){
    divisao.push(num/10)
}
console.log(divisao)

// c. Escreva um programa que devolva um novo array contendo, somente, os números pares do array original.

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let numpar =[]

for(let num of arrayOriginal){
    if(num % 2 === 0){
        numpar.push(num)
    }
}
console.log(numpar)


// d. Escreva um programa que gere um novo array contendo strings, da seguinte forma: "O elemento do
// índex i é: numero"

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for(let i = 0; i < 12; i++) {
    console.log("O elemento do índex "+ i +" é " + arrayOriginal[i] )
}

