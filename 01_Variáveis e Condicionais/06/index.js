const anoDeTeste = 2006;
function anoDeCopa(ano) {
  ano % 4 === 2
    ? console.log("Ano de copa!!")
    : console.log("Não é ano de copa!!");
}
anoDeCopa(anoDeTeste);
