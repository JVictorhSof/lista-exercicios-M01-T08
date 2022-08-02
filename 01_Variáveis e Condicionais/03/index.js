const valorCompra = 40000;
const descontoEmPorcentagem = 15;
const totalDaCompraComDesconto =
  valorCompra / 100 - valorCompra * (descontoEmPorcentagem / 100 / 100);

console.log(
  `Total da compra com desconto: R$ ${totalDaCompraComDesconto.toFixed(2)}`
);
