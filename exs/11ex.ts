/*
11) Desenvolva uma lógica que leia os valores de A, B e C de uma equação do
segundo grau e mostre o valor de Delta.
*/

// delta = (b * 2) - 4 * a * c;

function delta(a: number, b: number, c: number): void {
  console.log(`Resultado: ${b ** 2 - 4 * a * c}`);
}

delta(1, -5, 6);
