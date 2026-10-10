/*
Exercício 1: Informações de um Usuário

Objetivo: Praticar a criação e utilização de Union Types com tipos primitivos.

Enunciado:
- Crie uma variável chamada exemplo que aceite valores dos tipos string, number e boolean.
- Atribua um valor numérico à variável e imprima o resultado no console.
- Em seguida, atribua um texto à variável e imprima o resultado no console.
- Por último, atribua um valor booleano à variável e imprima o resultado no console.


Desafio extra:
- Utilize typeof para verificar o tipo do valor armazenado na variável após cada atribuição.
*/

var exemplo: string | number | boolean;
exemplo = 3;
console.log( typeof(exemplo),exemplo);

exemplo = "Hello world!";
console.log( typeof(exemplo),exemplo);

exemplo = false;
console.log( typeof(exemplo),exemplo);
