const lista = [25, 5, 7, 8, 6, 9, 1, 3, 7, 10, 2, 4];
const propriedade = 3;
function propriedades(array, operacao) {
  let soma = 0;
  let numTres = 0;
  let numEntre = 0;
  switch (operacao) {
    case 1:
      for (let item of array) {
        soma += item;
      }
      return `Soma dos elementos do array: ${soma}`;
    case 2:
      for (let item of array) {
        if (item === 3) {
          numTres++;
        }
      }
      return `Quantidade de números 3 que existem no array: ${numTres}`;
    case 3:
      for (let item of array) {
        if (item >= 6 && item <= 9) {
          numEntre++;
        }
      }
      return `Quantidade de números entre 6 e 10 que existem no array: ${numEntre}`;
    case 4:
      return `Maior número da lista: ${Math.max(...array)}`;
    case 5:
      return `Menor número da lista: ${Math.min(...array)}`;
    case 6:
      return `Quantidade de itens na lista: ${array.length}`;
  }
  return `Operação inválida!`;
}
console.log(propriedades(lista, propriedade));
