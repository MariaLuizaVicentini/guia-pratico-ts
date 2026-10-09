/*
Exercício 3: Somar Elementos do Array
Dado o array de preços [12.5, 30.0, 5.25, 8.0]:
- Use o método .reduce() para somar todos os valores da lista. 
- Armazene o resultado em uma variável total.
- Imprima o total formatado no console.
*/

const priceList: Array<number> = [12.5, 30.0, 5.25, 8.0];

const resulReduce = priceList.reduce((acc, priceCurrent) => {
  return acc + priceCurrent;
});

console.log(resulReduce);
