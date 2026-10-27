"use strict";
/**
 * Desafio 1 - Calculadora de Operações
 *
 * - Crie uma função que receba dois números e uma operação matemática.
 * - A operação deve ser representada por uma string: "soma", "subtração",
 *   "multiplicação" ou "divisão".
 * - Utilize switch para identificar a operação e realizar o cálculo correspondente.
 * - Exiba o resultado da operação escolhida.
 * - Caso a operação recebida não seja válida, exiba uma mensagem de erro.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function calculadora(n1, n2, op) {
    switch (op) {
        case "divisão":
            console.log(n1 / n2);
            break;
        case "soma":
            console.log(n1 + n2);
            break;
        case "subtração":
            console.log(n1 - n2);
            break;
        case "multiplicação":
            console.log(n1 * n2);
            break;
        default:
            console.log("Esse tipo de operção ainda não foi implementado");
            break;
    }
}
calculadora(1, 1, "soma");
