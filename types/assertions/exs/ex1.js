"use strict";
/**
 * Type Assertions (as)
 *
 * Desafio 1 - Conversão de tipo
 *
 * - Crie uma variável do tipo unknown que receba o valor "TypeScript".
 * - Utilize uma type assertion para tratar essa variável como string.
 * - Armazene o resultado em uma nova variável do tipo string.
 * - Exiba a quantidade de caracteres da string.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// type unknown - desconhecido
let unk = "TypeScript";
// console.log("ANTES", unk.length); // como o tipo é desconhecido, o ts nao sabe se da pra aplicar o length
console.log("ANTES (tipo): ", typeof unk);
let stringAssertion = unk;
console.log("DEPOIS (quantidade de caracteres)", stringAssertion.length);
console.log("DEPOIS (tipo): ", typeof stringAssertion);
