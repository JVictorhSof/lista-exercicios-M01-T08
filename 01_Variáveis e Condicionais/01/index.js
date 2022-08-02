const numA = 3;
const numB = 9;
const operacao = 10;
function operacaoMat(numI, numF) {
  if (operacao === 1) {
    return numI + numF;
  } else if (operacao === 2) {
    return numI - numF;
  } else if (operacao === 3) {
    return numI * numF;
  } else if (operacao === 4) {
    return numI / numF;
  } else if (operacao === 5) {
    return numI % numF;
  } else {
    return `Operação inválida! Selecione as seguintes opções:
    - 1 Para adição;
    - 2 Para subtração;
    - 3 Para multiplicação;
    - 4 Para divisão;
    - 5 Para o resto da divisão.`;
  }
}

console.log(operacaoMat(numA, numB));
