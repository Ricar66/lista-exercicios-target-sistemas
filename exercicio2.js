// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.


function isFibonacci(num) {
    let a = 0;
    let b = 1;
    let fib = 0;
  
    while (fib < num) {
      fib = a + b;
      a = b;
      b = fib;
    }
  
    if (fib === num || num === 0) {
      console.log(num + " pertence à sequência de Fibonacci.");
    } else {
      console.log(num + " não pertence à sequência de Fibonacci.");
    }
  }
  
  // Coloque Quarquer número para verificar se ele pertence à sequência de Fibonacci
  isFibonacci(21); 