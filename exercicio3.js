// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// numeros de exemplo
let faturamento = [1000, 2000, 0, 3000, 1500, 0, 2500]; // valores de exemplo


let faturamentoValido = faturamento.filter(valor => valor > 0);

// menor e maior valor de faturamento
let menor = Math.min(...faturamentoValido);
let maior = Math.max(...faturamentoValido);

// media de faturamento
let soma = faturamentoValido.reduce((acc, val) => acc + val, 0);
let media = soma / faturamentoValido.length;

// aciam da media
let diasAcimaDaMedia = faturamentoValido.filter(valor => valor > media).length;

console.log("Menor valor: " + menor);
console.log("Maior valor: " + maior);
console.log("Dias acima da média: " + diasAcimaDaMedia);