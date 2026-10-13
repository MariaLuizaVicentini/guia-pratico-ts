"use strict";
/*
 * Desafio 2 - Conversor de Valores
 * - Crie uma função que receba um valor de qualquer tipo e tente convertê-lo em uma string.
 * - Se o valor for um número, converta-o em uma string que represente seu valor.
 * - Se for um booleano, retorne "Verdadeiro" ou "Falso".
 * - Se for uma string, retorne o próprio conteúdo em letras maiúsculas.
 * - Para qualquer outro tipo de valor, retorne uma mensagem informando que a conversão não é suportada.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function currencyConverter(value) {
    if (typeof value === "number") {
        value.toString();
        console.log(value);
    }
    else if (typeof value === "boolean") {
        console.log("VERDADEIRO  ou FALSO");
    }
    else if (typeof value === "string") {
        console.log(`${value.toUpperCase()}`);
    }
    else {
        console.log("A conversão não é suportada!");
    }
}
currencyConverter(2);
currencyConverter(false);
currencyConverter("malu");
currencyConverter({ name: "malu", age: 23 });
