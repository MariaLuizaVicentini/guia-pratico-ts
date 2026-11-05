/**
 * Map - Mapeamento de elementos

• O que faz: 
    Transforma os dados. Ele passa por cada elemento, aplica uma alteração e salva o resultado em um novo array.

• Retorno: 
    Um novo array de mesmo tamanho.

• Quando usar: 
    Quando você precisa modificar os dados e quer armazenar esse novo resultado em uma variável (ex: transformar uma lista de preços em uma lista de strings formatadas com "R$").
 */

var languages: Array<string> = ["Python", "JS", "TS", "Php"];

var result = languages.map((l) => {
  return l.toUpperCase();
});

console.log(result);
// ["PYTHON", "JS", "TS", "PHP"]

/**
 * Sintaxe - Map (mapear):
 *
 * coleção.map(
 *   (elemento, indice, arrayOriginal) => {
 *     return novoValor;
 *   }
 * );
 */
