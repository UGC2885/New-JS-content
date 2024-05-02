function calcular(tipo, valor) {
    
    if (tipo === 'acao'){

        if (valor === 'c'){
            //Limpar o visor
            document.getElementById("resultado").value = "" //vazio para limpar os números na tela
        }

        if (valor === "-" || valor === "+" || valor === "/" || valor === "*" || valor === "."){
            // Concatenar com o resultado
            document.getElementById("resultado").value += valor
        }

        if (valor === "="){ //eval serve para que o interpretador de JS faça um calculo, mesmo sendo uma concatenação entre elementos 
                            // (considerando que será uma expressão numérica)

           var valorCampo = eval(document.getElementById("resultado").value)

           document.getElementById("resultado").value = valorCampo
           // Para retornar o valor concatenado e interpretado pelo "eval" na tela de resultados.
        }
        
    } else if (tipo === 'valor'){

    document.getElementById("resultado").value += valor

    //O código serve para que os valores possam concatenar e assim, 
    // poder formar um valor maior que somente de 1 número
}

}