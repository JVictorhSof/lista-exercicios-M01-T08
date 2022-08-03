const dados = [
  ["A", 1550, 1800, 3000, 25000],
  ["J", 6000, 8800, 5000, 2000, 9000, 24000, 800],
  ["I", 150, 10000, 9900],
];

function transf(infos) {
  for (let item of infos) {
    let listSalar = item.slice(1);
    let salarMax = Math.max(...listSalar);
    let initialValue = 0;
    if (item[0] === "A") {
      item.splice(item, item.length, {
        faixaEtaria: "Adulto",
        salarios: listSalar.sort(),
        mediaSalarial: (
          listSalar.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            initialValue
          ) / listSalar.length
        ).toFixed(2),
        maiorSalario: salarMax,
      });
    } else if (item[0] === "J") {
      item.splice(item, item.length, {
        faixaEtaria: "Jovem",
        salarios: listSalar.sort(),
        mediaSalarial: (
          listSalar.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            initialValue
          ) / listSalar.length
        ).toFixed(2),
        maiorSalario: salarMax,
      });
    } else {
      item.splice(item, item.length, {
        faixaEtaria: "Idoso",
        salarios: listSalar.sort(),
        mediaSalarial: (
          listSalar.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            initialValue
          ) / listSalar.length
        ).toFixed(2),
        maiorSalario: salarMax,
      });
    }
  }
  return infos;
}

console.log(transf(dados));
