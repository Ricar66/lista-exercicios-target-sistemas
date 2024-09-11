// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

let faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  let total = 0;
  for (let estado in faturamentoPorEstado) {
    total += faturamentoPorEstado[estado];
  }
  
  for (let estado in faturamentoPorEstado) {
    let percentual = (faturamentoPorEstado[estado] / total) * 100;
    console.log(estado + ": " + percentual.toFixed(2) + "%");
  }
  