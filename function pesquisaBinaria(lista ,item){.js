function pesquisaBinaria(lista ,item){
    baixo = 0
    alto = lista.length -1
    while (baixo <= alto) {
        meio = (baixo + alto) / 2
        chute = lista[meio]
        if (chute == item) {
            return meio
        } else if (chute > item) {
            return alto = meio -1
        } else {
            baixo = meio + 1
        }

    }
  
    
    return null    
}

console.log(pesquisaBinaria([1,3,5,7,9],3))