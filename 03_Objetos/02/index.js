const partidas = [
  {
    timeA: 5,
    timeB: 4,
  },
  {
    timeA: 3,
    timeB: 3,
  },
  {
    timeA: 2,
    timeB: 1,
  },
  {
    timeA: 1,
    timeB: 3,
  },
  {
    timeA: 2,
    timeB: 5,
  },
  {
    timeA: 0,
    timeB: 1,
  },
];

function analiseDoMaiorVencedor(confrontos) {
  let partidasGanhasA = 0;
  let partidasGanhasB = 0;
  for (let item of confrontos) {
    if (item.timeA > item.timeB) {
      partidasGanhasA++;
    } else if (item.timeA < item.timeB) {
      partidasGanhasB++;
    }
  }
  if (partidasGanhasA > partidasGanhasB) {
    return `Time A ganhou mais vezes!`;
  } else if (partidasGanhasA < partidasGanhasB) {
    return `Time B ganhou mais vezes!`;
  } else {
    return `Empate!`;
  }
}
console.log(analiseDoMaiorVencedor(partidas));
