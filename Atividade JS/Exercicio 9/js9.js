var imagens = document.querySelectorAll("#carrossel img")
var indiceImagemAtual = 0

function proximaImagem(){
    imagens[indiceImagemAtual].classList.remove("mostrar")
    indiceImagemAtual = (indiceImagemAtual + 1) % imagens.length
    imagens[indiceImagemAtual].classList.add("mostrar")
}

imagens[indiceImagemAtual].classList.add("mostrar")