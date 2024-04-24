

var imagens = ['carson-arias-7Z03R1wOdmI-unsplash.jpg', 'jonatan-pie-3l3RwQdHRHg-unsplash.jpg']

var indiceImagem = 0

function alterarImagem() {
    indiceImagem = (indiceImagem + 1) % imagens.length
    document.getElementById('imagem').src = imagens[indiceImagem]
}