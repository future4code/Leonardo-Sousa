// Exercício 1 --------------------------------------------------

// 1. Leia o código abaixo. Indique todas as mensagens impressas no console.

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado)         // a. false 

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado)         // b. false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)         // c. true 

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado)         // d. false 

console.log("e. ", typeof resultado)  // e. boolean


// 2. Leia o código abaixo. 
    
let array
console.log('I. ', array)                         // I. undefined

array = null
console.log('II. ', array)                        // II. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]     
console.log('III. ', array.length)                // III. 11

let i = 0
console.log('IV. ', array[i], " e ", array[i+1])  // IV. 3  e  4

array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor)      // V. 19  e  9

i+=1
array[i] = array[i-1]
console.log('VI. ', array[i])                     // VI. 3

i = array.length - 1
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. ', resultadoC)                  // VII. 1  

    

/*a. O que é `array` e como se declara em `JS`? 
Resposta:
Array é uma variável onde podemos guardar vários valores,
é declarada com seu nome e em seguida os valores que serão agregados 
a ela dentro de colchetes 
ex: let array = [3,2,1]
*/

/*b. Qual o index inicial de um `array`? 
Resposta:
O index inicial de um array é 0(zero)
*/

/*c. Como se determinar o tamanho do `array`? 
Resposta:
Usando o comando .length ele imprime o tamanho do array
*/

/*d. Indique todas as mensagens impressas no console.*/



// Exercício 2 --------------------------------------------------

// 1.

let kelvin = 0
let fahrenheit = 77
let celsius = 80

kelvin = (fahrenheit - 32)*5/9 + 273.15
console.log(kelvin + " graus kelvin")

fahrenheit = celsius*9/5 + 32 
console.log(fahrenheit + " graus fahrenheit")


celsius = prompt ("Insira graus em Celsius")
let celsiusFormat = parseInt(celsius)
fahrenheit = celsiusFormat*9/5 + 32 
console.log(fahrenheit + " graus fahrenheit")
kelvin = celsiusFormat + 273.15
console.log(kelvin + " graus kelvin")


// 2.

const nome = prompt ("Me diz seu nome")
console.log("1. Seu nome: " + nome)
const idade = prompt ("Sua idade")
console.log("2. Sua idade: " + idade)
const altura = prompt ("Sua altura")
console.log("3. Sua altura: " + altura)
const cidade = prompt ("Qual é sua cidade")
console.log("4. Sua idade: " + cidade)
const comida = prompt ("Uma comida")
console.log("5. Uma comida: " + comida)

// 3.

const watt = prompt ("Quantidade consumida de quilowatt-hora")
const desconto = prompt ("Seu desconto")
let conta 

conta = watt * 0.05 * desconto / 100

let valores = (watt * 0.05) - conta
console.log("Valor a ser pago com desconto: " + valores) 