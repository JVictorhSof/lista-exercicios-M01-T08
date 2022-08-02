const capacidadeDeEntrega = 1000;
const quantidadeDoPedido = 3500;
const quandidadeDeviagem = 0;

function quantidadeDeViagens(pedido, capacidade) {
  return Math.ceil(pedido / capacidade);
}

console.log(quantidadeDeViagens(quantidadeDoPedido, capacidadeDeEntrega));
