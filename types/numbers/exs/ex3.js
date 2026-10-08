"use strict";
// Faça um programa que leia um número inteiro e mostre o seu antecessor e seu sucessor.
Object.defineProperty(exports, "__esModule", { value: true });
function process(n) {
    var ant = n - 1;
    var suc = n + 1;
    return `O Antecessor é: ${ant} \nE o Sucessor é: ${suc}`;
}
;
const result = process(5);
console.log(result);
