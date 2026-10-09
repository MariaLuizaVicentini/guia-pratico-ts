/*
Exercício 1: Criar uma Tupla de Produto

Enunciado:
- Crie uma tupla chamada produto que armazene o nome, o preço e a quantidade de um produto, nessa ordem.
- O nome deve ser do tipo string.
- O preço deve ser do tipo number.
- A quantidade deve ser do tipo number.
- Atribua valores à tupla.
- Imprima cada informação individualmente no console, acessando os elementos pelos seus índices.

Requisitos:
- Utilize a tipagem explícita para definir os tipos dos elementos da tupla.
- Utilize console.log() para exibir cada informação.
*/

type Produto = [nome: string, preco: number, quantidade: number];

function exibirProduto(produto: Produto): void {
  console.log("Nome:", produto[0]);
  console.log("Preço:", produto[1]);
  console.log("Quantidade:", produto[2]);
}

const meuProduto: Produto = ["parafuso", 0.5, 100];
exibirProduto(meuProduto);
