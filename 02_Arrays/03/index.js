const treinos = [true, false, true, true, true];
const rendimentoEsperado = 80;

function rendimentos(qtDeTreinos, esperado) {
  let quantDeTreinos = 0;
  for (let item of qtDeTreinos) {
    if (item === true) {
      quantDeTreinos++;
    }
  }
  (quantDeTreinos / qtDeTreinos.length) * 100 >= esperado
    ? console.log(`Rendimento satisfatório.`)
    : console.log(`Rendimento insatisfatório.`);
}
rendimentos(treinos, rendimentoEsperado);
