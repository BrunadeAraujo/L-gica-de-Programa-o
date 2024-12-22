//Adicione uma verificação para garantir que a quantidade inserida pelo usuário seja 
// um número positivo. Se o valor não for válido, exiba uma mensagem de erro adequada.

if (isNaN(qtd) || qtd <= 0) { //A função isNaN verifica se o valor de qtd não é um número.
    alert('Por favor, insira uma quantidade válida.'); //(Operador OU): ||
    return;
} //  


//Crie uma função que aceite uma string como parâmetro, utilize a função parseInt para 
// converter essa string em um número inteiro e retorne o resultado.

function converterParaInteiro(valorString) {
    return parseInt(valorString);
}

// Exemplo de uso
let valorString = "42";
let valorInteiro = converterParaInteiro(valorString);
console.log(valorInteiro);  // Saída esperada: 42


//Escreva um programa de calculadora simples com funções separadas para adição, subtração,
//  multiplicação e divisão. Utilize um bloco condicional para determinar qual função executar
//  com base em uma variável que representa a operação desejada.

 function adicao(a,b){
    return a + b;
 }
 function subtracao(a,b){
    return a - b;
 }
 function multiplicacao(a,b){
    return a * b;
 }
 function divisao(a,b){
   if(b !== 0) { //Verifica se o valor de b (o denominador) não é igual a zero (!== significa "diferente de").
    return a/b;
 }  else{
    return "Erro: divisão por zero.";
 }
}
function calculadora(operacao, a, b) {
    switch (operacao) {
        case 'soma':
            return adicao(a, b);
        case 'subtracao':
            return subtracao(a, b);
        case 'multiplicacao':
            return multiplicacao(a, b);
        case 'divisao':
            return divisao(a, b);
        default:
            return "Operação inválida.";
    }
}
//A estrutura switch avalia o valor do parâmetro operacao e executa o código correspondente
//  ao caso (case) que corresponde ao valor.
// Exemplo de uso
let resultado = calculadora('soma', 5, 3);
console.log(resultado);  // Saída esperada: 8

//Implemente uma função que aceite um número como parâmetro e utilize um bloco condicional
//  para determinar se o número é par ou ímpar.

    function verificarParOuImpar (numero){
        if(numero % 2 === 0){ //A verificação === 0 está checando se o resto da divisão de numero por 2 é igual a zero.
            return "Par"
        }else{
            return "Ímpar";
        }
    }
let numero = 7;
let resultadoParOuImpar = verificarParOuImpar(numero);
console.log(resultadoParOuImpar); 

 
