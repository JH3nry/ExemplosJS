let numero01 = document.getElementById("n1");//Criando uma variavel com o comando let de nome numero01
                                            //Usando document.getElementById para pegar o elemento referente ao id n1, e armazenando ele na variavel numero01
                                            //* O "elemento" está la no index.html, mas que o index.js consegue enxergar com base no seu id

let numero02 = document.getElementById("n2");//Codigo identico ao de cima, alterando apenas o nome da variavel e o id

let btn = document.getElementById("botao");//Criando uma variavel de nome btn e armazenando o elemento contido do id botao

let div= document.getElementById("ValorSoma");//Criando uma variavel de nome div e armazenando o elemento contido em ValorSoma


function escreve(){ //Criando uma funçao(function) de nome escreve, com as seguintes cordenadas:
    console.log(numero01);//Escreve no console o valor da variavel numero01
    console.log(numero02);//Escreve no console o valor da variavel numero02
    console.log(numero01.value * numero02.value);//Escreve no console o resultado da multiplicação dos valores(.value) contidos nas variaveis numero01 e numero02

    div.innerHTML= `<p> ${numero01.value} | ${numero02.value}</p>`// Usando variavel div junto do comando .innerHTML onde ele retorna para o index.html o que está dentro dela
}                                                                 //Que nesse caso é um paragrafo em html <p> contendo os valores das variaveis numero01 e numero02, usando `${}` para realizar interpolação

btn.addEventListener("click", escreve)//usando a variavel btn e adicionando um evento nela com o comando .addEventListener, evento esse que tem nome de click e faz rodar a funçao escreve criada acima