function validarForm(){
    var nome = document.getElementById('campoNome').value
    var email = document.getElementById('campoEmail').value

    if (nome === '' || email === ''){
        alert('Preencha todos os campos para continuar!')
        return false
    }

    else{
        return true
    }

}