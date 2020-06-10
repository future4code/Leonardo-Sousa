let arrayPost = []

function adicionaPost(){
    let inputTitulo = document.getElementById("titulo")
    let inputAutor = document.getElementById("autor")
    let inputConteudo = document.getElementById("conteudo")

    let titulo = inputTitulo.value
    let autor = inputAutor.value
    let conteudo = inputConteudo.value

    let post = {
        titulo,
        autor,
        conteudo 
    }
    arrayPost.push(post)
    console.log(arrayPost)
    
    inputAutor.value = ""
    inputConteudo.value = ""
    inputTitulo.value = ""
}

let ar = adicionaPost()
console.log(ar)


function enviaEnter(){
    if(enviaEnter().key === "Enter"){
        adicionaPost()
    }
}