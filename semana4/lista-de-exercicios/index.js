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

// function calculaNumeros(num1, num2){
//     let maior = 0
//     let menor = 0
//     let divisivel1 = ""
//     let divisivel2 = ""

//     if(num1 > num2){
//         maior = num1
//         menor = num2
//     }else if(num2 > num1){
//         maior = num2
//         menor = num1
//     }else{
//         maior = "Os números são iguais"
//     }

//     if(num1 % num2 === 0){
//         divisivel1 = "é divisível"
//     }else{
//         divisivel1 = "não é divisível"
//     }

//     if(num2 % num1 === 0){
//         divisivel2 = "é divisível"
//     }else{
//         divisivel2 = "não é divisível"
//     }

//     let diferenca = maior - menor
//     let mensagem = "O maior é " + maior + "\n" + num1 + " " + divisivel1 + " por " + num2 + 
//     "\n" + num2 + " " + divisivel2 + " por " + num1 + "\nA diferença entre eles é " + diferenca

//     return mensagem
// }

// let numeros = calculaNumeros(15, 30)
// console.log(numeros)


// Funções - Exercício 1 ------------------------------------------------------------

// const numeros = [32, 45, 12, 361, 60, 76, 98, 2, 10, 888, 54]

// let menor = Infinity
// let segundoMenor = 0
// let maior = 0
// let segundoMaior = 0

// for(let numero of numeros){
//     if(numero < menor){
//         segundoMenor = menor
//         menor = numero
//     }

//     if(numero < segundoMenor && numero > menor){
//         segundoMenor = numero
//     }

//     if(numero > maior){
//         segundoMaior = maior
//         maior = numero
//     }
// }
// console.log("O segundo menor número é " + segundoMenor)
// console.log("O segundo maior número é " + segundoMaior)


// Funções - Exercício 2 ------------------------------------------------------------

// let hello = () => {
//     return "Hello Labenu"
// }
// let mensagem = hello()
// alert(mensagem)


// Objetos - Exercício 1 ------------------------------------------------------------

// Objetos e arrays devemos usar quando vamos guardar várias informações e que geralmente tem 
// relação uma com a outra, usamos eles para economizar codigo ao invés de usar variáveis, e também
// facilita quando for acessar as informações deles.


// Objetos - Exercício 2 ------------------------------------------------------------

// function criaRetangulo(lado1, lado2){
//     let objRetangulo = {
//         largura: lado1,
//         altura: lado2,
//         perimetro: 2 * (lado1 + lado2),
//         area: lado1 * lado2
//     }
//     return objRetangulo
// }

// console.log(criaRetangulo(2, 4))


// Objetos - Exercício 3 ------------------------------------------------------------

// let arrayAtorAtriz = [" Marc Zinga", " Aïssa Maïga", " Bayron Lebli"]

// let filme = {
//     nome: "Bem-vindo a Marly-Gomont",
//     ano: 2016,
//     diretor: "Julien Rambaldi",
//     AtorAtriz: arrayAtorAtriz
// }

// let mensagem = "Venha assistir ao filme " + filme.nome + ", de " + filme.ano + ", dirigido por "
// + filme.diretor + " e estrelado por " + arrayAtorAtriz 

// console.log(mensagem)


// Objetos - Exercício 4 ------------------------------------------------------------

// let pessoa = {
//     nome: "Leonardo",
//     idade: 22,
//     email: "leogomes@gmail.com",
//     endereco: "Brasília"
// }

// function anonimizarPessoa(){
//     let anonimo = {
//         ...pessoa,
//         nome: "ANÔNIMO"
//     }
//     return anonimo
// }

// console.log(anonimizarPessoa())


// Funções de arrays- Exercício 1 - A ------------------------------------------------------------

// let arrayIdades = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]

// function mostraMaioresDeIdade(){
//     let arrayMaioresDeIdade = arrayIdades.filter((elementoIdade, index, array) => {
//         if(elementoIdade.idade >= 20){
//             return true
//         }
//         return false
//     })
//     return arrayMaioresDeIdade
// }
// console.log(mostraMaioresDeIdade())


// Funções de arrays- Exercício 1 - B ------------------------------------------------------------

// let arrayIdades = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]

// function mostraMenoresDeIdade(){
//     let arrayMenoresDeIdade = arrayIdades.filter((elementoIdade, index, array) => {
//         if(elementoIdade.idade < 20){
//             return true
//         }
//         return false
//     })
//     return arrayMenoresDeIdade
// }
// console.log(mostraMenoresDeIdade())


// Funções de arrays- Exercício 2 - A ------------------------------------------------------------

// const array = [1, 2, 3, 4, 5, 6]

// function multiplicadoPorDois(a){
//     a = array.map((elementoNum, index, a) => {
//         return elementoNum * 2
//     })
//     return a
// }

// console.log(multiplicadoPorDois(array))


// Funções de arrays- Exercício 2 - B ------------------------------------------------------------

// function multiplicadoPorTres(a){
//     a = array.map((elementoNum, index, a) => {
//         return "" + elementoNum * 3
//     })
//     return a
// }

// console.log(multiplicadoPorTres(array))


// Funções de arrays- Exercício 2 - C ------------------------------------------------------------

// function mostraImparOuPar(a){
//     a = array.map((elementoNum, index, a) => {
//         if(elementoNum % 2 === 0){
//             return elementoNum + " é par"
//         }
//         return elementoNum + " é impar"
//     })
//     return a
// }

// console.log(mostraImparOuPar(array))


// Funções de arrays- Exercício 3 - A ------------------------------------------------------------

// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]

// function filtraFilaEntra(){
//     let filaFiltradaEntra = pessoas.filter((elementoPessoa, index, array) => {
//         if(elementoPessoa.altura >= 1.5 && elementoPessoa.idade > 14 && elementoPessoa.idade < 60){
//             return true
//         }
//     })
//     return filaFiltradaEntra
// }
// console.log(filtraFilaEntra())


// Funções de arrays- Exercício 3 - B ------------------------------------------------------------

// function filtraFilaNaoEntra(){
//     let filaFiltradaNaoEntra = pessoas.filter((elementoPessoa, index, array) => {
//         if(elementoPessoa.altura < 1.5 || elementoPessoa.idade < 14 || elementoPessoa.idade > 60){
//             return true
//         }
//     })
//     return filaFiltradaNaoEntra
// }
// console.log(filtraFilaNaoEntra())


// Funções de arrays- Exercício 4 ------------------------------------------------------------

// const consultas = [
// 	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
// 	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
// 	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
// 	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
// ]

// let arrayEmails = consultas.map((elementoConsulta, index, array) => {
//     let gen = ""
//     let lembrete = ""
//     if(elementoConsulta.genero === "feminino"){
//         gen = "Sra."
//         lembrete = "lembrá-la"
//     }else{
//         gen = "Sr."
//         lembrete = "lembrá-lo"
//     }
//     if(elementoConsulta.cancelada === true){
//         return `Olá, ${gen} ${elementoConsulta.nome}. Infelizmente, sua consulta marcada para o dia ${elementoConsulta.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`
//     }else{
//         return `Olá, ${gen} ${elementoConsulta.nome}. Estamos enviando esta mensagem para ${lembrete} da sua consulta no dia ${elementoConsulta.data}. Por favor, acuse o recebimento deste e-mail.`
//     }
// })

// console.log(arrayEmails)


// Funções de arrays- Exercício 5 ------------------------------------------------------------

const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function calculaSaldoTotal(){
    contas.forEach((elementoConta, index, array) => {
        let totalCompras = 0
        for(elemento of elementoConta.compras){
            totalCompras += elemento 
        }
        elementoConta.saldoTotal = elementoConta.saldoTotal - totalCompras
    });
    return contas
}

console.log(calculaSaldoTotal())
