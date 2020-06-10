let arrayPost = []
let divPosts = document.getElementById("posts")

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
    
    inputAutor.value = ""
    inputConteudo.value = ""
    inputTitulo.value = ""

    divPosts.innerHTML += `<hr><p class= title>${post.titulo}</p><p class= author> ${post.autor}</p>
    <p class= content>${post.conteudo}</p>` 
}

function enviaEnter(evento){
    if(evento.key === "Enter"){
        adicionaPost()
    }           
}