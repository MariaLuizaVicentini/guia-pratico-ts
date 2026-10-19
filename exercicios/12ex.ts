/*
12) Crie um programa que leia o preço de um produto, calcule e mostre o seu
PREÇO PROMOCIONAL, com 5% de desconto.
*/

type Produto = {
  nome: string;
  preco: number;
};

function aplicaDesconto(produto: Produto): void {
  let desconto: number = 0.05;
  let descontoTotal = produto.preco * desconto;
  let valorFinalComDesconto = produto.preco - descontoTotal;
  console.log(`O valor total de desconto: ${descontoTotal}`);
  console.log(
    `O valor total do produto com desconto aplicado: ${valorFinalComDesconto}`,
  );
}

aplicaDesconto({ nome: "tv", preco: 3000 });
