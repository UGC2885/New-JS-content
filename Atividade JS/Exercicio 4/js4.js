function adicionarItem(){
    var novoItem = document.createElement('li')
    novoItem.textContent = 'Novo item da lista'
    document.getElementById('listaItens').appendChild(novoItem)
}



