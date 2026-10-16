/**
 * DESAFIO 2 — Contagem regressiva
 *
 * Crie uma variável contador iniciada em 10.
 *
 * Utilize o for para:
 * - Exibir o valor do contador no console.
 * - Decrementar o contador em uma unidade a cada execução.
 * - Repetir enquanto o contador for maior ou igual a 0.
 */

var contador = 10;

let i: number;
for (i = 0; contador >= 0; i++) {
  console.log("DEBUG - Contador: ", contador);
  contador = contador - 1;
}
