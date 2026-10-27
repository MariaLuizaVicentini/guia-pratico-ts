/*
    20) Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou ÍMPAR.
*/

function parOuImpar(num: number): void {
  let restoDivisao = num % 2;
  if (restoDivisao == 0) {
    console.log(`O número ${num} é par!`);
  } else {
    console.log(`O número ${num} é impar!`);
  }
}

// parOuImpar(2);
parOuImpar(5);