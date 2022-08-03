const treinos = [
  true,
  false,
  true,
  true,
  true,
  false,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
];
const rendimentoEsperado = 80;

function rendimentos(qtDeTreinos, esperado) {
  let quantDeTreinos = 0;
  let treinosConsecutivos = 0;
  let treinoConsecutivosComparacao = [];
  for (let item of qtDeTreinos) {
    if (item === true) {
      quantDeTreinos++;
    }
  }
  (quantDeTreinos / qtDeTreinos.length) * 100 >= esperado
    ? console.log(`Rendimento satisfatório.`)
    : console.log(`Rendimento insatisfatório.`);

  for (let item of qtDeTreinos) {
    if (item === true) {
      treinosConsecutivos++;
    } else if (item === false || item === qtDeTreinos.length) {
      treinoConsecutivosComparacao.push(treinosConsecutivos);
      treinosConsecutivos = 0;
    }
  }
  treinoConsecutivosComparacao.push(treinosConsecutivos);
  console.log(
    `A Maior quantidade de treinos consecutivos foi de ${Math.max(
      ...treinoConsecutivosComparacao
    )} veze(s)`
  );
}
rendimentos(treinos, rendimentoEsperado);
