 
//Exercício 1
//Crie um programa que possua duas variáveis com os valores 199,3 e 120 e realize a soma de ambas.


function soma() {
    
    let valor1 = 199.3;
    let valor2 = 120;
    let soma = valor1 + valor2;

    console.log('A soma dos números é ' + soma);

}



//Exercício 2
//Crie um vetor contendo 10 números e faça a média de todos os valores.



function media() {
    
    var num = [2, 4, 7, 23, 10, 11, 31, 39, 40, 47];
    
    soma = 0;
    for (i = 0; i < num.length; i++) {
        
        soma += num[i];
        
    } 
    console.log("A média é " + soma/num.length);
    
}




//Exercício 3
//Pegue os mesmos 10 números do exercício anterior e mostre no console apenas os números primos.

function numPrimo() {
    
    var num = [2, 4, 7, 23, 10, 11, 31, 39, 40, 47];
    
    for (var i = 0; i <=num.length; i++) {
        if (ehNumber(num[i])) {
            console.log(num[i]) 
        }
    }

}




function ehNumber(num) {
    
    for (var divisor = 2; divisor < num; divisor++) 
        if (num % divisor == 0) return false;
    return true;
}




 

//Exercício 4
//Crie um jogo de par ou impar.

function parOuImpar() {
    
    jogadorPar = 5
    jogadorImpar = 8

    soma = jogadorPar + jogadorImpar;

    if (soma % 2 === 0) {
        console.log("Jogador par venceu.");
    }
    else {
        console.log("Jogador ímpar venceu.");
    }    

}




//Exercício 5
//Crie uma função que receba um valor N e descubra qual é o N-ésimo termo da série Fibonacci.

function fibonacci(n) {

    
    if (n < 1) {
        console.log("O termo numero " + n + " é 0 ");
    } 
    else if ( n <= 2 )
    {
        console.log("O termo numero " + n + " é 1 ");
    }
    else 
    {
        console.log ( (n - 1) + (n - 2) );
    }
}
    
    

