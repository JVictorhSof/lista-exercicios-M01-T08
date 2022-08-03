const dados = [
  ["A", 1550, 1800, 3000, 25000],
  ["J", 6000, 8800, 5000, 2000, 9000, 24000, 800],
  ["I", 150, 10000, 9900],
];

function mediaSalarial(infos) {
  let somaA = [];
  let totalA = 0;
  let itensA = 0;
  let somaJ = [];
  let totalJ = 0;
  let itensJ = 0;
  let somaI = [];
  let totalI = 0;
  let itensI = 0;
  let arraySomas = [];
  for (let item of infos) {
    if (item[0] === "A") {
      somaA = item.slice(1);
      for (let i of somaA) {
        totalA += i;
        itensA++;
      }
      arraySomas.push(totalA / somaA.length);
      break;
    }
  }
  for (let item of infos) {
    if (item[0] === "J") {
      somaJ = item.slice(1);
      for (let i of somaJ) {
        totalJ += i;
        itensJ++;
      }
      arraySomas.push(totalJ / somaJ.length);
      break;
    }
  }
  for (let item of infos) {
    if (item[0] === "I") {
      somaI = item.slice(1);
      for (let i of somaI) {
        totalI += i;
        itensI++;
      }
      arraySomas.push(totalI / somaI.length);
      break;
    }
  }
  if (Math.max(...arraySomas) === arraySomas[0]) {
    return `A maior média salarial é a do Adulto com R$ ${arraySomas[0].toFixed(
      2
    )}`;
  } else if (Math.max(...arraySomas) === arraySomas[1]) {
    return `A maior média salarial é a do Jovem com R$ ${arraySomas[1].toFixed(
      2
    )}`;
  } else {
    return `A maior média salarial é a do Idoso com R$ ${arraySomas[2].toFixed(
      2
    )}`;
  }
}

console.log(mediaSalarial(dados));
