/*
25) [DESAFIO] Crie um programa que leia o tamanho de três segmentos de reta.
Analise seus comprimentos e diga se é possível formar um triângulo com essas
retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento
de cada lado deve ser menor que a soma dos outros dois.
*/

let retaA = 7;
let retaB = 10;
let retaC = 5;

function triangulo(a: number, b: number, c: number): boolean {
  return a < b + c && b < a + c && c < a + b;
}

if (triangulo(retaA, retaB, retaC)) {
  console.log("É possível formar um triangulo!");
} else {
  console.log("Não é possível formar um triangulo!");
}
