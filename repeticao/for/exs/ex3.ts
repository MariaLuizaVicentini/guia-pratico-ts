/**
 * DESAFIO 3 — Soma dos números pares
 *
 * Crie uma variável soma iniciada em 0.
 *
 * Utilize o for para:
 * - Percorrer os números de 1 até 20.
 * - Identificar os números pares.
 * - Acumular os números pares na variável soma.
 * - Exibir o resultado final no console.
 *
 * Resultado esperado: 110
 */

function parOuImpar(n: number): number | null {
  let restoDivisao = n % 2;
  if (restoDivisao !== 0) {
    return null;
  } else {
    return restoDivisao;
  }
}

var soma: number = 0;
var i: number;

for (i = 0; i <= 20; i++) {
  let result = parOuImpar(i);
  if (result === 0) {
    console.log(`O número ${i} é par`);
    soma = soma + i;
  }
}

console.log("Resultado final: ", soma);
