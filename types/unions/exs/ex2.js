"use strict";
/*
Exercício 2: Lista de Produtos

Objetivo: Praticar Union Types com arrays.

Enunciado:
- Crie uma variável chamada productList que aceite um array de números ou um array de strings.
- Primeiro, atribua à variável um array contendo os preços de três produtos.

- Utilize um laço de repetição para percorrer o array e imprimir cada preço no console.
- Em seguida, atribua à variável um array contendo os nomes de três produtos.
- Utilize um laço de repetição para percorrer o novo array e imprimir cada nome no console.

Desafio extra:
- Tente atribuir à variável um único array contendo números e strings, como [10, "Teclado", 25].
- Observe se essa atribuição é aceita pelo TypeScript e procure entender o motivo.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let productList;
productList = ["R$30,00", "R$40,00", "R$10,00"];
var i;
for (i = 0; i < productList.length; i++) {
    console.log(productList[i]);
}
// productList = [10, "Teclado", 25]; TS REJEITA
/*
    O TS rejeita p "number[] | string[]" significa que o
    array deve ser INTEIRAMENTE de números ou de string


    Para conseguir misturar diferentes tipos ao mesmo tempo temos
    2 opções:

    1° - (number | string)[]
    ---> É uma forma de dizer ao TS que o array pode conter number ou string em qualquer posição
    ---> Os parenteses são necessários para dizer que o uniou "|" se
    aplica a cada elemento do array


    2° - [number, string, number]
    ---> Isso se a intenção é ter posições específicas com tipos fixos
    ---> Ex, o primeiro elemento é um numero, o segundo uma string e assim por diante
    ---> Ex, o primeiro elemento é um numero, o segundo uma string e assim por diante
*/
var arrayDeTiposMisturados;
arrayDeTiposMisturados = ["teclado", 10, "mouse", 20];
var tuplaDeTiposMisturados;
tuplaDeTiposMisturados = [20, "mouse"];
