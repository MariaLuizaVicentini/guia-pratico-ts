"use strict";
/**
 * Desafio 3 - Manipulação de strings
 *
 * - Crie uma variável do tipo unknown que receba o valor "typescript".
 * - Utilize a sintaxe <string>variavel para informar ao TypeScript
 *   que o valor deve ser tratado como string.
 * - Armazene o resultado em uma nova variável do tipo string.
 * - Converta o texto para letras maiúsculas.
 * - Exiba o texto original e o texto convertido no console.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var unknown = "typescript";
var stringType = unknown;
console.log(`Valor recebido:   ${stringType}`);
console.log(`Valor convertido: ${stringType.toUpperCase()}`);
