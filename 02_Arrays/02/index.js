const marcadas = ["A", "B", "B", "D", "A", "C"];
const gabarito = ["B", "B", "C", "D", "A", "C"];

function nota(marcou, prova) {
  let acertou = 0;
  let errou = 0;

  for (let i = 0; i < marcou.length; i++) {
    if (marcou[i] === prova[i]) {
      acertou++;
    } else {
      errou++;
    }
  }
  let resultado = acertou > errou ? acertou - errou : errou - acertou;
  return `O resultado da prova: ${resultado} ponto(s)`;
}

console.log(nota(marcadas, gabarito));
