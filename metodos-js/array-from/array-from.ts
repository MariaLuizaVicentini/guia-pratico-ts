/**
 * ArrayLike (Semelhante a um array)
 *
 * - É um objeto que possui características estruturais parecidas com as de um array,
 *   mas que não é necessariamente uma instância de Array.
 *
 * - Não possui diretamente os métodos de instância de Array, como map, filter e forEach.
 *
 * Características:
 * - Possui uma propriedade length.
 * - Possui propriedades numéricas que permitem acessar valores por índice.
 */

const arrayLike = {
  0: "Python",
  1: "JavaScript",
  2: "TypeScript",
  length: 3,
};

// console.log(typeof arrayLike); // object
// console.log(arrayLike[0]); // Python
// console.log(arrayLike[1]); // JavaScript
// console.log(arrayLike.length); // 3

/**
 * Sintaxe do Array.from()
 *
 * Array.from(arrayLike, mapFn?, thisArg?)
 *
 * arrayLike (Obrigatório):
 * - Objeto com estrutura semelhante a um array ou objeto iterável.
 *
 * mapFn (Opcional):
 * - Função executada para cada elemento durante a criação do novo array.
 * - Permite transformar os elementos sem precisar executar um map() posteriormente.
 *
 * thisArg (Opcional):
 * - Valor utilizado como this dentro da mapFn.
 *
 * OBS:
 * - Esse método não modifica a estrutura original (arrayLike).
 * - Ele cria um NOVO array.
 */

const arrayPuro = Array.from(arrayLike);

// console.log(arrayPuro); // ["Python", "JavaScript", "TypeScript"]

/**
 * Utilizando mapFn durante a criação do array
 */

const numeros = {
  0: 10,
  1: 20,
  2: 30,
  length: 3,
};

const numerosDuplicados = Array.from(numeros, (item) => item * 2);

// console.log(numerosDuplicados); // [20, 40, 60]

/**
 * Verificando se um valor é um array puro
 *
 * typeof:
 * - Retorna "object" tanto para arrays quanto para objetos comuns.
 * - Portanto, não é suficiente para diferenciar os dois.
 *
 * Array.isArray():
 * - Verifica se um valor é realmente uma instância de Array.
 * - Retorna true para arrays e false para objetos comuns e ArrayLike.
 */

console.log(typeof arrayLike); // object
console.log(typeof arrayPuro); // object

console.log(Array.isArray(arrayLike)); // false
console.log(Array.isArray(arrayPuro)); // true

if (Array.isArray(arrayLike)) {
  console.log("Esse é um array puro.");
} else {
  console.log("Esse não é um array puro.");
}

/**
 * OBSERVAÇÃO:
 *
 * - ArrayLike não é um tipo especial de objeto criado pelo JavaScript.
 * - É uma classificação baseada na estrutura do objeto.
 *
 * - Alguns métodos de Array.prototype conseguem trabalhar com objetos ArrayLike
 *   utilizando call() ou apply().
 *
 * - Array.from() aceita tanto objetos ArrayLike quanto objetos Iterable (ex: strings).
 */