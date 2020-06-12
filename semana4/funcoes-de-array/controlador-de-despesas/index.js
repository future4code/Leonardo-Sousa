let arrayObjDespesa = []

function cadastraDespesa(){
    const inputValor = document.getElementById("valor")
    const inputDescricao = document.getElementById("descricao")
    const inputTipoDespesa = document.getElementById("tipo-despesa")
    let valor = inputValor.value
    let descricao = inputDescricao.value
    let tipo = inputTipoDespesa.value

    if(valor !== "" && descricao !== "" && tipo !== ""){
        let despesas = {
            valorDespesa: Number(valor) ,
            descricaoDespesa: descricao,
            tipoDespesa: tipo 
        }
        arrayObjDespesa.push(despesas)
        console.log(arrayObjDespesa)
    }else{
        alert("Preencha todos os campos!")
    }
    limpaCadastro()
}

function filtraDespesa(){
    const inputTipoDespesa = document.getElementById("tipo")
    const list = document.getElementById("lista")
    
    list.innerHTML = ""

    const arrayTipoDespesa = arrayObjDespesa.filter(( despesa, index, array) => {
        return despesa.tipoDespesa === inputTipoDespesa.value
    })

    arrayTipoDespesa.forEach(( despesa, i, array) =>{
        list.innerHTML += "<hr>"
        list.innerHTML += "<li>" + despesa.valorDespesa + "</li>"
        list.innerHTML += "<li>" + despesa.tipoDespesa + "</li>"
        list.innerHTML += "<li>" + despesa.descricaoDespesa + "</li>"
    })

    mostraTotalValor()
}

function mostraTotalValor(){
    const inputTipoDespesa = document.getElementById("tipo")
    const inputValor = document.getElementById("valor")
    const listaTotais = document.getElementById("totais")

    let totalCasa = 0
    let totalViagem = 0
    let totalRoles = 0
    let totalOutros = 0

    listaTotais.innerHTML = ""

    arrayObjDespesa.forEach(( despesas, i, array) =>{
        if(despesas.tipoDespesa === "casa"){
            totalCasa += despesas.valorDespesa
        }
        if(despesas.tipoDespesa === "viagem"){
            totalViagem += despesas.valorDespesa
        }
        if(despesas.tipoDespesa === "roles"){
            totalRoles += despesas.valorDespesa
        }
        if(despesas.tipoDespesa === "outros"){
            totalOutros += despesas.valorDespesa
        }
    })

    let total = totalCasa + totalViagem + totalRoles + totalOutros

    listaTotais.innerHTML += "<li> Total de despesas com casa R$ " + totalCasa + "</li>"
    listaTotais.innerHTML += "<li> Total de despesas com viagem R$ " + totalViagem + "</li>"
    listaTotais.innerHTML += "<li> Total de despesas com Roles R$ " + totalRoles + "</li>"
    listaTotais.innerHTML += "<li> Total de despesas com Outros R$ " + totalOutros + "</li>"
    listaTotais.innerHTML += "<li> Total R$ " + total + "</li>"

}

function limpaCadastro(){
    const inputValor = document.getElementById("valor")
    const inputDescricao = document.getElementById("descricao")
   
    let valor = inputValor.value
    let descricao = inputDescricao.value
    
    inputValor.value = ""
    inputDescricao.value = ""
}

