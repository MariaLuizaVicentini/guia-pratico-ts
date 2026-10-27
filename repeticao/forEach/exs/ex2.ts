/*
Desafio 2 — Dobro dos números
Crie um array de números inteiros. Utilize forEach para percorrer o array, calcular o dobro de cada número e exibir os resultados no console.
*/

let arrayNums: Array<number> = [1, 2, 3];

arrayNums.forEach((num) => {
  let dobro = num * 2;
  console.log(`O dobro de ${num} é: ${dobro}`);
});
