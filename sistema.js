//Se a peça possuir um peso superior a 100 g, cadastre.
//Se não,

let peso = 50;

if (peso < 100) {
    console.log("A peça precisa de 100g no mínimo")
} else {
    console.log("A peça possui o peso adequado!")
}

//Dada a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprima uma mensagem informando não ter capacidade suficiente.

let listaDePecas = ["Amortecedor", "Disco de Freio", "Motor"]

if (listaDePecas.length){
    console.log("Épossível cadastrar mais peças")
}else{
    ("Lista cheia!")
}

//Caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro.
let nomePeca = "Motor"

if(nomePeca.length > 3){
    console.log("Nome válido")
}else{
    console.log("Quantidade insuficiente. Tente novamente!")
}