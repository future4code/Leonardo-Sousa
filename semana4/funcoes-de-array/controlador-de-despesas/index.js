const inputValor = document.getElementById("valor")
const inputDescricao = document.getElementById("descricao")
const inputTipoDespesa = document.getElementById("tipo-despesa")
let valor = inputValor.value
let descricao = inputDescricao.value
let tipo = inputTipoDespesa.value
let arrayObjDespesa = []

function cadastraDespesa(){
    let despesas = {
        valorDespesa: valor,
        descricaoDespesa: descricao,
        tipoDespesa: tipo 
    }
    arrayObjDespesa.push(despesas)
    console.log(arrayObjDespesa)
    limpaCadastro()
}

function limpaCadastro(){
    inputValor.value = ""
    inputDescricao.value = ""
}