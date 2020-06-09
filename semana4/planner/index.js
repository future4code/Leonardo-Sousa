function adicionaTarefa(){
    const meuInput = document.getElementById("tarefa")
    const meuSelect = document.getElementById("diaDaSemana")
    let tarefa = meuInput.value
    let dia = meuSelect.value

    if(dia === "segunda"){
        const quadro = document.getElementById("segunda")
        quadro.innerHTML += "<li>" + tarefa + "</li>"
        meuInput.value = ""
    }else if(dia === "terca"){
        const quadro = document.getElementById("terca")
        quadro.innerHTML += "<li>" + tarefa + "</li>"
        meuInput.value = ""
    }else if(dia === "quarta"){
        const quadro = document.getElementById("quarta")
        quadro.innerHTML += "<li>" + tarefa + "</li>"
        meuInput.value = ""
    }else if(dia === "quinta"){
        const quadro = document.getElementById("quinta")
        quadro.innerHTML += "<li>" + tarefa + "</li>"
        meuInput.value = ""
    }else if(dia === "sexta"){
        const quadro = document.getElementById("sexta")
        quadro.innerHTML += "<li>" + tarefa + "</li>"
        meuInput.value = ""
    }else if(dia === "sabado"){
        const quadro = document.getElementById("sabado")
        quadro.innerHTML += "<li>" + tarefa + "</li>"
        meuInput.value = ""
    }else if(dia === "domingo"){
        const quadro = document.getElementById("domingo")
        quadro.innerHTML += "<li>" + tarefa + "</li>"
        meuInput.value = ""
    }
}