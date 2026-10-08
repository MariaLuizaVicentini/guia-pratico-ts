/*
Exercício 1: Filtrar e Mapear Números
Dado o array [10, 15, 20, 25, 30]:
- Crie uma nova variável que filtre apenas os números maiores ou iguais a 20.
- Em seguida, crie outra lista com esses números filtrados multiplicados por 2.
- Imprima o resultado final no console. 
*/

var listNum: Array<number> = [10, 15, 20, 25, 30];

function mapNumbers(list: number[]) {
  const newArray = list.filter((list) => list >= 20);
  console.log(newArray);
  const listOfMultipliedNums = newArray.map((n) => n * 2);
  return `O resultado final é: ${listOfMultipliedNums}`;
};

const result = mapNumbers(listNum);
console.log(result);