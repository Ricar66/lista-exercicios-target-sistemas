//1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
//Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
//Imprimir(SOMA);
//Ao final do processamento, qual será o valor da variável SOMA?

// O código tem três variáveis: INDICE com valor 13, SOMA com valor 0 e K com valor 0.
// O loop Enquanto K < INDICE faça itera enquanto K for menor que 13.
// A cada iteração, K é incrementado em 1 e SOMA é incrementada com o valor atual de K.
// Ao final do loop, o valor de SOMA é impresso.
// Resposta:
// Soma sera a soma de todos os numeros de 1 a 13, que é igual a 91.



let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA);