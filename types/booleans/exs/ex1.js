"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Exercício 1: Verificar a Maioridade

Enunciado:
- Crie uma variável chamada age e atribua a ela um valor numérico.
- Crie uma variável chamada isAdult que verifique se a idade é maior ou igual a 18.
- Imprima o resultado no console.

Requisitos:
- Utilize o tipo number para armazenar a idade.
- Utilize o tipo boolean para armazenar o resultado da comparação.
- Utilize console.log() para exibir o resultado.

Resultado esperado:
- Se a idade for 20, isAdult deverá ser true.
- Se a idade for 15, isAdult deverá ser false.
*/
let isAdult = false;
function isOfLegalAge(age) {
    if (age >= 18) {
        isAdult = true;
        return `O user possui ${age} anos, portanto, é maior de idade!`;
    }
    return `O user possui ${age} anos, e não completou a maioridade!`;
}
;
// const result = isOfLegalAge(23);
const result = isOfLegalAge(5);
console.log(result);
